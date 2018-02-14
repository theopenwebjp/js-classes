/**
 * Dependencies: utility.js
 * Function wrapping functions.
 * FunctionWrapper functions not allowed to be wrapped.
 * Any function from FunctionWrapper should not be stack traced.
 */
var FunctionWrapper = function(){
  var wrapper = {};
  wrapper.settings = {
    events: {
      start: "onStart",
      complete: "onComplete"
    }
  };
  wrapper.status = {
    stackTrace: [],
    wrap: {
      preparationName: null,
      preparing: false,
      executingWrappedFunction: false,
      wrapped: []
    },
    disableStackTrace: false//Only during special functions
  };
  
  wrapper.WrapperOptions = function(){
    return {
      events: {
        start: null,
        complete: null,
        check: null
      },
      log: false,
      logPossiblyBadOnly: true,
      wrapFunctionArguments: false,
      wrapReturnFunctions: false,
      allowMultipleWrap: false,
      stackTrace: false
    };
  }
  
  wrapper.FunctionData = function(){
    return {
      function: null,
      arguments: [],
      return: null,
      returned: false
    };
  }
  
  wrapper.StackTraceData = function(){
    //All info is non-wrap function info.
    return {
      caller: null,
      callerName: null,
      name: null,
      function: null,
      time: null
    };
  }
  
  wrapper.Reference = function(){
    return {
      parent: null,
      key: null
    };
  }
  
  wrapper.WrapStatus = function(){
    return {
      
      //Common
      status: null,
      
      //This function
      old: null,
      
      //This object(Multiple possible. For unwrapping.)
      references: []
    };
  }
  
  wrapper.setup = function(){
    //
  }
  
  wrapper.simpleWrapFunction = function(func, before, after){
    //Do not wrap this function
    
    return function(){
      if(before){before(arguments);};
      var returnData = func.apply(this, arguments);
      if(after){after(arguments);};
      
      return returnData;
    };
  }
  
  wrapper.handlePreparation = function(name, inPreparation){
    
    //No name
    if(!name){return false;}
    
    //Wrong name
    if(
      wrapper.status.wrap.preparationName &&
      wrapper.status.wrap.preparationName !== name
    ){
      return false;
    }
    
    //Start
    if(inPreparation){
      wrapper.status.wrap.preparationName = name;
      wrapper.status.wrap.preparing = true;
    }
    
    //End
    else{
      wrapper.status.wrap.preparationName = null;
      wrapper.status.wrap.preparing = false;
    }
  }
  
  wrapper.setupWrapStatus = function(wrapperFunction, func){
    
    //Create new
    if(!wrapperFunction.__wrapStatus){
      wrapperFunction.__wrapped = true;
      
      wrapperFunction.__wrapStatus = wrapper.WrapStatus();
      wrapperFunction.__wrapStatus.status = wrapper.status.wrap;
      wrapperFunction.__wrapStatus.old = func;
      
      wrapper.status.wrap.wrapped.push(wrapperFunction);
    }
  }
  
  wrapper.handleWrapReference = function(wrapperFunction, reference){
    
    //Add reference
    if(reference){
      wrapperFunction.__wrapStatus.references.push(reference);
    }
    
    //Auto-set
    if(reference && reference.parent && reference.key !== undefined){
      reference.parent[reference.key] = wrapperFunction;
    }
  }
  
  /*public*/
  wrapper.wrapFunction = function(func, reference, options){
    /*
    Wraps function with ability to handle arguments and return values.
    parent and key should be passed to reference to be able to unwrap.
    Setting to existing function automatically done if reference.parent + reference.key is parent.
    Already wrapped must not be wrapped, but must be set to object key.
    */
    
    var wrapperFunction = false;
    
    if(!options){options = wrapper.WrapperOptions();}
    
    //Not allowed
    if(wrapper.isWrapForbidden(func)){
      return false;
    }
    
    //Already wrapped handling
    if(wrapper.isWrapped(func) && !options.allowMultipleWrap){
      wrapperFunction = func;
    }
    
    //Wrap
    else{
      wrapperFunction = wrapper.createWrapFunction(func, options);
    }
    
    //Reference
    wrapper.handleWrapReference(wrapperFunction, reference);
    
    if(func.name === "isCapitalLetter"){
      console.log("isCapitalLetter");
      console.log("func");
      console.log(func);
      console.log(reference);
      console.log(wrapperFunction);
    }
    return wrapperFunction;
  }
  
  wrapper.createWrapFunction = function(func, options){
    /*
    func = old function
    wrapperFunction = wrapping function
    */
    var wrapperFunction = function(){
      
      //??bug: loopObject has no func.__wrapStatus. Why?
      if(func.name === "loopObject" || !wrapperFunction.__wrapStatus){
        console.log(func.name); console.log(wrapperFunction.__wrapStatus);
      }
      
      var ignoreWrap = false;
      var ignoreStackTrace = false;
      ignoreWrap = (wrapperFunction.__wrapStatus.status.executingWrappedFunction ? true: false);//??This is preventing nested functions from being stackTraced.
      
      if(!ignoreStackTrace){
        if(options.stackTrace && !wrapper.status.disableStackTrace && !wrapper.status.wrap.preparing){
          wrapper.stackTrace(func);
        }else{
          //
        }
      }
      
      if(!ignoreWrap){console.log("not ignored", func.name);
        wrapper.status.wrap.executingWrappedFunction = true;
        
        //Arguments wrap
        if(options.wrapFunctionArguments){
          wrapper.wrapObjectFunctions(arguments);
        }

        var startData = wrapper.getFunctionData(func, arguments);
        wrapper.handleEvent("start", [startData, options]);
      }
      
      var returnVal = func.apply(this, arguments);
      
      if(!ignoreWrap){
        var completeData = wrapper.getFunctionData(func, arguments, returnVal);
        wrapper.handleEvent("complete", [completeData, options]);

        //Return wrap
        if(options.wrapReturnFunctions){
          returnVal = wrapper.attemptWrapFunction(returnVal, null, options);//Return function can not have object/key because unknown.
        }
        
        wrapper.status.wrap.executingWrappedFunction = false;
      }
      
      return returnVal;
    };
    
    //Status
    wrapper.setupWrapStatus(wrapperFunction, func);
    
    return wrapperFunction;
  }
  
  /*public*/
  wrapper.stackTraceFunctionCombinations = function(funcs, callback, obj){
    /*
    Goal: Get every possible function that is executed in functions.
    This requires handling every function which may require varying arguments.
    */
    
    /*
    Example:
    var alertSomething = function(type){
     var something;
     if(type === 1){
      something = "hello";
     }else{
      something = "bye";
     }
     alert(something);
    }
    
    var funcs = [
      function(callback){
       alertSomething(1);
       callback();
      },
      function(callback){
       alertSomething();
       callback();
      };
    ]
    
    wrapper.stackTraceFunctionCombinations(funcs, callback);
    */
    
    //Setup
    var stackTraces = [];
    var index = 0;
    var cur = funcs[0];
    
    //No data
    if(!cur){callback([]); return false;}
    
    //Handle
    var handle = function(){
      wrapper.stackTraceFunction(cur, function(stackTrace){
        stackTraces.push(stackTrace);

        index++;
        cur = funcs[index];
        
        if(cur){
          handle();
        }else{
          callback(stackTraces);
        }
      }, obj);
    }
    
    //Start
    handle();
  }
  
  /*public*/
  wrapper.stackTraceFunction = function(func, returnHandle, obj){
    /*
    func: Function taking a callback argument to execute on complete
    returnHandle: Execute on end
    obj: Optional object for the scope to watch. Use if possible because default is global window which can be slow.
    
    Example:
    var alertSomething = function(){
     var something = "Hello";
     alert(something);
    }
    
    var func = function(callback){//onComplete
     alertSomething();
     callback();
    }
    
    wrapper.stackTraceFunction(func, callback);
    */
    
    wrapper.startStackTrace(obj);
    var onComplete = function(){
      console.log(removeNonCharacters);
      var stackTrace = wrapper.stopStackTrace();
      console.log(stackTrace[0]);
      //Omit func
      stackTrace.shift();
      
      returnHandle(stackTrace);
    };
    func(onComplete);
    
    return onComplete;
  }
  
  /*public*/
  wrapper.startStackTrace = function(obj){
    /*
    Goal: Handle all function calls and record stack trace.
    Problems: Overriding .call doesn't seem to work because only works when explicitly using .call.
    Fix: Wrapping each function should fix most cases.
    */
    
    wrapper.handlePreparation("stacktrace", true);
    
    //Allow overriding object to start wrapping from(Ex: Class/modules)
    if(!obj){
      obj = window;
    }
    
    wrapper.status.stackTrace = [];
    
    var options = {
      stackTrace: true,
      wrapFunctionArguments: true,
      wrapReturnFunctions: true
    };
    
    wrapper.deepWrapObjectFunctions(obj, options);
    
    wrapper.handlePreparation("stacktrace", false);
  }
  
  /*public*/
  wrapper.stopStackTrace = function(){
    wrapper.unwrapFunctions();
    return wrapper.status.stackTrace;
  }
  
  /*public*/
  wrapper.unwrapFunctions = function(){
    console.log("unwrap");//??
    var wrapped = wrapper.status.wrap.wrapped;
    for(var i=0; i<wrapped.length; i++){
      wrapper.unwrapFunction(wrapped[i]);
    }
    
    wrapper.status.wrap.wrapped = [];
  }
  
  /*public*/
  wrapper.unwrapFunction = function(wrapperFunction){
    //??Bug, should always have __wrapStatus
    if(!wrapperFunction.__wrapStatus){
      console.log("has no __wrapStatus: ", wrapperFunction);
    }
    
    //
    if(wrapperFunction.__wrapStatus && wrapperFunction.__wrapStatus.references){
      for(var i=0; i<wrapperFunction.__wrapStatus.references.length; i++){
        wrapperFunction.__wrapStatus.references[i].parent[ wrapperFunction.__wrapStatus.references[i].key ] = wrapperFunction.__wrapStatus.old;
      }
      wrapperFunction.__wrapStatus.references = [];
    }
    
    //Delete metadata
    delete wrapperFunction.__wrapped;
    delete wrapperFunction.__wrapStatus;
    
  }
  
  wrapper.stackTrace = function(func){
    var trace = wrapper.StackTraceData();
    
    trace.caller = func.caller;
    trace.callerName = ((!!func.caller) ? func.caller.name : null);
    trace.name = func.name;
    trace.function = func;
    trace.time = performance.now();
    
    //Add
    wrapper.status.stackTrace.push(trace);
    
    return trace;
  }
  
  wrapper.isBad = function(obj){
    if(obj.options.events.check){
      return !obj.options.events.check(obj.data);
    }
    
    else{
      return wrapper.isPossibleBad(obj.data);
    }
  }
  
  wrapper.isPossibleBad = function(funcData){
    //Default check. Doesn't need to be 100% accurate. Main goal is to filter out functions unlikely to be bad to reduce logs.
    
    if(funcData.arguments.length === 0){
      return true;
    }
    
    if(funcData.returned && funcData.return === null || funcData.return === undefined){
      return true;
    }
    
    return false;
  }
  
  wrapper.handleEvent = function(eventType, args){
    if(!args){args = [];}
    
    var key = wrapper.settings.events[eventType];
    return wrapper[key].apply(this, args);
  }
  
  wrapper.wrapObjectFunctions = function(obj, options){
    var wrapped;
    for(var key in obj){
      wrapper.attemptWrapObjectFunction(obj, key, options);
    }
  }
  
  wrapper.deepWrapObjectFunctions = function(parentObj, options){
    loopObject(parentObj, function(obj, key, val){
      wrapper.attemptWrapObjectFunction(obj, key, options);
      
      return obj[key];
    });
  }
  
  wrapper.attemptWrapObjectFunction = function(obj, key, options){
    return wrapper.attemptWrapFunction(obj[key], {parent: obj, key: key}, options);
  }
  
  wrapper.attemptWrapFunction = function(data, reference, options){
    /*
    Returns original data on failure for easy setting.
    However, this can not be used for everywhere due to problems like resetting location leading to page reload.
    */
    
    if(
      typeof data === "function" &&
      !wrapper.isWrapperFunction(data)
    ){
      var func = data;
      var wrappedFunction = wrapper.wrapFunction(func, reference, options);
      if(wrappedFunction){
        data = wrappedFunction;
      }
    }
    
    return data;
  }
  
  wrapper.isWrapperFunction = function(data){
    
    if(typeof data !== "function"){
      return false;
    }
    
    for(var key in wrapper){
      if(wrapper[key] === data){
        return true;
      }
    }
    
    return false;
  }
  
  wrapper.isWrapForbidden = function(func){
    
    //Disallow this class so doesn't stackTrace
    if(func === FunctionWrapper){
      return true;
    }
    
    //Disallow special functions used in wrapper function
    if(func === isLogFunction){
      return true;
    }
    
    //Disallow all forms of logging by default
    if(isLogFunction(func)){
      return true;
    }
    
    return false;
  }
  
  wrapper.isWrapped = function(func){
    return !!func.__wrapped;
  }
  
  wrapper.getFunctionData = function(func, args, returnVal){
    var data = wrapper.FunctionData();
    
    var sortArgs = function(args) {
      var args = Array.prototype.slice.call(args);
      return args.sort();
    }
    
    data.name = func.name;
    data.function = func;
    data.arguments = sortArgs(args);
    data.return = returnVal;
    
    if(arguments.length === wrapper.getFunctionData.length){data.returned = true;}
    
    return data;
  }
  
  wrapper.handleCommonEvent = function(obj){
    if(obj.options.events && obj.options.events[obj.event]){
      obj.options.events[obj.data].apply(this, [obj.data]);
    }
    
    if(obj.options.log){
      
      if(obj.options.logPossiblyBadOnly){
        if(wrapper.isBad(obj)){
          return false;
        }
      }
      
      //Log
      console.log(obj.logTitle);
      wrapper.logFunction(obj);
    }
  }
  
  wrapper.getCommonEventData = function(objOptions, funcData, options){
    var obj = {
      event: null,
      logTitle: "Unknown:",
      name: funcData.name,
      data: funcData,
      options: options
    };
    
    if(objOptions){
      for(var key in objOptions){
        obj[key] = objOptions[key];
      }
    }
    
    return obj;
  }
  
  wrapper.onStart = function(funcData, options){
    var obj = wrapper.getCommonEventData({
      event: "start",
      logTitle: "Start event:"
    }, funcData, options);
    return wrapper.handleCommonEvent(obj);
  }
  
  wrapper.onComplete = function(funcData, options){
    var obj = wrapper.getCommonEventData({
      event: "complete",
      logTitle: "Complete event:"
    }, funcData, options);
    return wrapper.handleCommonEvent(obj);
  }
  
  wrapper.logFunction = function(funcData){
    if(window.logObjectOnSingleLine){
      logObjectOnSingleLine(funcData);
    }else{
      console.log(funcData);
    }
  }
  
  wrapper.setup();
  
  return wrapper;
}

if(typeof window === 'object'){
  window.FunctionWrapper = FunctionWrapper;
}
if(typeof module !== 'undefined'){
  module.exports = FunctionWrapper;
}