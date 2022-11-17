// const { Utility } = require('js-functions')
import { Utility } from 'js-functions'
import ObjectTraverser from 'object-traverser'

// TODO: Quite a few major type issues. Increase specification and improve types.

/**
 * @typedef {Object} Wrap
 * @property {string|null} preparationName
 * @property {boolean} preparing
 * @property {boolean} executingWrappedFunction
 * @property {function[]} wrapped
 */

/**
 * @typedef {function & { __wrapStatus?: WrapStatus, __wrapped?: boolean }} WrapperFunction
 */

/**
 * @typedef {Object} WrapStatus
 * @property {*} status
 * @property {*} old
 * @property {*[]} references
 */

/**
 * @typedef {Object} CommonEventData
 * property {(function():void)|null} event Can not find function.
 * @property {'complete'|'start'|null} event
 * @property {string} logTitle
 * @property {string} name
 * @property {*} data
 * @property {WrapperOptions} options
 */

/**
 * @typedef {Object} WrapperOptions
 * @property {Object<string, (arg0: any[]) => void|null>} events
 * @property {boolean} log
 * @property {boolean} logPossiblyBadOnly
 * @property {boolean} wrapFunctionArguments
 * @property {boolean} wrapReturnFunctions
 * @property {boolean} allowMultipleWrap
 * @property {boolean} stackTrace
 */

/**
 * @typedef {object} FunctionData
 * @property {string} name
 * @property {function|null} function
 * @property {any[]} arguments
 * @property {*} return
 * @property {boolean} returned
 */

/**
 * @typedef {object} StackTraceData
 * @property {*} caller
 * @property {string|null} callerName
 * @property {string|null} name
 * @property {(function():void)|null} function
 * @property {number|null} time
 */

/**
 * @typedef {{parent: HTMLElement|null, key: string|null}} Reference
 */

/**
 * Dependencies: utility.js
 * Function wrapping functions.
 * FunctionWrapper functions not allowed to be wrapped.
 * Any function from FunctionWrapper should not be stack traced.
 */
export default class FunctionWrapper {
  constructor() {
    this.settings = {
      events: {
        start: 'onStart',
        complete: 'onComplete'
      }
    }
    this.status = {
      /**
       * @type {StackTraceData[]}
       */
      stackTrace: [],
      /**
       * @type {Wrap}
       */
      wrap: {
        preparationName: null,
        preparing: false,
        executingWrappedFunction: false,
        wrapped: []
      },
      disableStackTrace: false // Only during special functions
    }
    this.setup()
  }

  /**
   * @param {Partial<WrapperOptions>} options
   * @return {WrapperOptions}
   */
  wrapperOptions(options = {}) {
    return Object.assign({
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
    }, options)
  }

  /**
   * @return {FunctionData}
   */
  functionData() {
    return {
      name: '',
      function: null,
      arguments: [],
      return: null,
      returned: false
    }
  }

  /**
   * All info is non-wrap function info.
   * @return {StackTraceData}
   */
  stackTraceData() {
    return {
      caller: null,
      callerName: null,
      name: null,
      function: null,
      time: null
    }
  }

  /**
   * @return {Reference}
   */
  Reference() {
    return {
      parent: null,
      key: null
    }
  }

  /**
   * @return {WrapStatus}
   */
  WrapStatus() {
    return {

      // Common
      status: null,

      // This function
      old: null,

      // This object(Multiple possible. For unwrapping.)
      references: []
    }
  }

  setup() {
    //
  }

  /**
   * @param {function} func
   * @param {function|undefined} before
   * @param {function|undefined} after
   */
  simpleWrapFunction(func, before = undefined, after = undefined) {
    // Do not wrap this function

    /**
     * @this Function
     */
    return function () {
      if (before) {
        before(arguments)
      }
      const returnData = func.apply(this, arguments)
      if (after) {
        after(arguments)
      }

      return returnData
    }
  }

  /**
   * @param {string} name
   * @param {boolean} inPreparation
   * @return {boolean}
   */
  handlePreparation(name, inPreparation) {
    // No name
    if (!name) {
      return false
    }

    // Wrong name
    if (
      this.status.wrap.preparationName &&
      this.status.wrap.preparationName !== name
    ) {
      return false
    }

    if (inPreparation) { // Start
      this.status.wrap.preparationName = name
      this.status.wrap.preparing = true
    } else { // End
      this.status.wrap.preparationName = null
      this.status.wrap.preparing = false
    }

    return true
  }

  /**
   * @param {WrapperFunction} wrapperFunction
   * @param {function} func
   */
  setupWrapStatus(wrapperFunction, func) {
    // Create new
    if (!wrapperFunction.__wrapStatus) {
      wrapperFunction.__wrapped = true

      wrapperFunction.__wrapStatus = this.WrapStatus()
      wrapperFunction.__wrapStatus.status = this.status.wrap
      wrapperFunction.__wrapStatus.old = func

      this.status.wrap.wrapped.push(wrapperFunction)
    }
  }

  /**
     * @param {WrapperFunction} wrapperFunction
     * @param {Reference} reference
     */
  handleWrapReference(wrapperFunction, reference) {
    // Add reference
    if (reference && wrapperFunction.__wrapStatus) {
      wrapperFunction.__wrapStatus.references.push(reference)
    }

    // Auto-set
    if (reference && reference.parent && (reference.key)) {
      const key = reference.key; // Arbitrary.
      /** @type {any} */(reference.parent)[key] = wrapperFunction // "any" to avoid readonly setting error.
    }
  }

  /**
   * @public
   * @param {function} func
   * @param {Reference} reference
   * @param {Partial<WrapperOptions>|undefined} wrapperOptions
   * @return {function|false}
   */
  wrapFunction(func, reference, wrapperOptions = {}) {
    /*
      Wraps function with ability to handle arguments and return values.
      parent and key should be passed to reference to be able to unwrap.
      Setting to existing function automatically done if reference.parent + reference.key is parent.
      Already wrapped must not be wrapped, but must be set to object key.
      */

    /**
     * @type {function|false}
     */
    let wrapperFunction = false

    const options = this.wrapperOptions(wrapperOptions)

    // Not allowed
    if (this.isWrapForbidden(func)) {
      return false
    }

    if (this.isWrapped(func) && !options.allowMultipleWrap) { // Already wrapped handling
      wrapperFunction = func
    } else { // Wrap
      wrapperFunction = this.createWrapFunction(func, options)
    }

    // Reference
    this.handleWrapReference(wrapperFunction, reference)

    return wrapperFunction
  }

  /**
   * @param {function} func
   * @param {WrapperOptions} options
   */
  createWrapFunction(func, options) {
    /**
     * func = old function
     * wrapperFunction = wrapping function
     * @this any TODO: Better typing
     * @type {WrapperFunction}
     */
    const wrapperFunction = function () {
      // TODO: bug: loopObject has no func.__wrapStatus. Why?
      const ctx = this
      if (func.name === 'loopObject' || !wrapperFunction.__wrapStatus) {
        /*
        console.log(func.name)
        console.log(wrapperFunction.__wrapStatus)
        */
      }

      let ignoreWrap = false
      const ignoreStackTrace = false
      ignoreWrap = (!!(wrapperFunction.__wrapStatus && wrapperFunction.__wrapStatus.status.executingWrappedFunction)) // TODO: This is preventing nested functions from being stackTraced.

      if (!ignoreStackTrace) {
        if (options.stackTrace && !ctx.status.disableStackTrace && !ctx.status.wrap.preparing) {
          ctx.stackTrace(func)
        } else {
          //
        }
      }

      if (!ignoreWrap) {
        console.log('not ignored', func.name)
        ctx.status.wrap.executingWrappedFunction = true

        // Arguments wrap
        if (options.wrapFunctionArguments) {
          ctx.wrapObjectFunctions(arguments)
        }

        const startData = ctx.getFunctionData(func, arguments)
        ctx.handleEvent('start', [startData, options])
      }

      let returnVal = func.apply(ctx, arguments)

      if (!ignoreWrap) {
        const completeData = ctx.getFunctionData(func, arguments, returnVal)
        ctx.handleEvent('complete', [completeData, options])

        // Return wrap
        if (options.wrapReturnFunctions) {
          returnVal = ctx.attemptWrapFunction(returnVal, null, options) // Return function can not have object/key because unknown.
        }

        ctx.status.wrap.executingWrappedFunction = false
      }

      return returnVal
    }

    // Status
    this.setupWrapStatus(wrapperFunction, func)

    return wrapperFunction
  }

  /**
   * @public
   * @param {function[]} funcs
   * @param {(trace: StackTraceData[]) => void} callback
   * @param {object} obj
   * @return {false|undefined}
   */
  stackTraceFunctionCombinations(funcs, callback, obj) {
    /*
    Goal: Get every possible function that is executed in functions.
    This requires handling every function which may require varying arguments.
    */

    /*
    Example:
    var alertSomething = function(type){
      var something;
      if (type === 1){
      something = "hello";
      } else{
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

    this.stackTraceFunctionCombinations(funcs, callback);
    */

    // Setup
    /**
     * @type {StackTraceData[]}
     */
    const stackTraces = []
    let index = 0
    let cur = funcs[0]

    // No data
    if (!cur) {
      callback([])
      return false
    }

    // Handle
    const handle = () => {
      this.stackTraceFunction(cur, function (stackTrace) {
        stackTraces.push(...stackTrace)

        index++
        cur = funcs[index]

        if (cur) {
          handle()
        } else {
          callback(stackTraces)
        }
      }, obj)
    }

    // Start
    handle()
  }

  /**
   * @param {function} func Function to stacktrace
   * @param {(trace: StackTraceData[]) => void} returnHandle
   * @param {object} obj
   */
  stackTraceFunction(func, returnHandle, obj) {
    /*
    func: Function taking a callback argument to execute on complete
    returnHandle: Execute on end
    obj: Optional object for the scope to watch. Use if possible because default is global window which can be slow.

    Example:
    var alertSomething = function(){
      var something = "Hello";
      alert(something);
    }

    var func = function(callback){ // onComplete
      alertSomething();
      callback();
    }

    this.stackTraceFunction(func, callback);
    */

    this.startStackTrace(obj)
    const ctx = this
    const onComplete = function () { // TODO: Is function here needed for stack tracing? Check.
      const stackTrace = ctx.stopStackTrace()
      // Omit func
      stackTrace.shift()

      returnHandle(stackTrace)
    }
    func(onComplete)

    return onComplete
  }

  /**
     * @param {Object<string, *>} obj
     */
  startStackTrace(obj) {
    /*
    Goal: Handle all function calls and record stack trace.
    Problems: Overriding .call doesn't seem to work because only works when explicitly using .call.
    Fix: Wrapping each function should fix most cases.
    */

    this.handlePreparation('stacktrace', true)

    // Allow overriding object to start wrapping from(Ex: Class/modules)
    if (!obj) {
      obj = window
    }

    this.status.stackTrace = []

    /**
     * @type {Partial<WrapperOptions>}
     */
    const options = {
      stackTrace: true,
      wrapFunctionArguments: true,
      wrapReturnFunctions: true
    }

    this.deepWrapObjectFunctions(obj, options)

    this.handlePreparation('stacktrace', false)
  }

  /**
   * TODO
   */
  stopStackTrace() {
    this.unwrapFunctions()
    return this.status.stackTrace
  }

  /**
   * @public
   */
  unwrapFunctions() {
    // console.log('unwrap') // TODO
    const wrapped = this.status.wrap.wrapped
    for (let i = 0; i < wrapped.length; i++) {
      this.unwrapFunction(wrapped[i])
    }

    this.status.wrap.wrapped = []
  }

  /**
   * @public
   * @param {WrapperFunction} wrapperFunction
   */
  unwrapFunction(wrapperFunction) {
    // TODO: Bug, should always have __wrapStatus
    if (!wrapperFunction.__wrapStatus) {
      console.log('has no __wrapStatus: ', wrapperFunction)
    }

    //
    if (wrapperFunction.__wrapStatus && wrapperFunction.__wrapStatus.references) {
      for (let i = 0; i < wrapperFunction.__wrapStatus.references.length; i++) {
        wrapperFunction.__wrapStatus.references[i].parent[wrapperFunction.__wrapStatus.references[i].key] = wrapperFunction.__wrapStatus.old
      }
      wrapperFunction.__wrapStatus.references = []
    }

    // Delete metadata
    delete wrapperFunction.__wrapped
    delete wrapperFunction.__wrapStatus
  }

  /**
     * @param {() => void} func
     */
  stackTrace(func) {
    const trace = this.stackTraceData()

    trace.caller = func.caller
    trace.callerName = ((func.caller) ? func.caller.name : null)
    trace.name = func.name
    trace.function = func
    trace.time = window.performance.now()

    // Add
    this.status.stackTrace.push(trace)

    return trace
  }

  /**
     * @param {{options: WrapperOptions, data: *}} obj
     */
  isBad(obj) {
    if (obj.options.events.check) {
      return !obj.options.events.check(obj.data)
    } else {
      return this.isPossibleBad(obj.data)
    }
  }

  /**
     * @param {FunctionData} funcData
     */
  isPossibleBad(funcData) {
    // Default check. Doesn't need to be 100% accurate. Main goal is to filter out functions unlikely to be bad to reduce logs.

    if (funcData.arguments.length === 0) {
      return true
    }

    if ((funcData.returned && funcData.return === null) || funcData.return === undefined) {
      return true
    }

    return false
  }

  /**
     * @param {'start'|'complete'} eventType
     * @param {any[]} args
     */
  handleEvent(eventType, args = []) {
    const key = /** @type {keyof this} */ (this.settings.events[eventType])
    return /** @type {any} */ (this[key]).apply(this, args)
  }

  /**
     * @param {object} obj
     * @param {object} options
     */
  wrapObjectFunctions(obj, options) {
    for (let key in obj) {
      this.attemptWrapObjectFunction(obj, key, options)
    }
  }

  /**
   * @param {Object<string, *>} parentObj
   * @param {Partial<WrapperOptions>} options
   */
  deepWrapObjectFunctions(parentObj, options) {
    // TODO: ObjectTraverser to become deprecated. Implement alternative.
    ObjectTraverser.loopObject(parentObj, /** @param {any} obj @param {string} key */ (obj, key /*, val */) => {
      this.attemptWrapObjectFunction(obj, key, options)

      return obj[key]
    })
  }

  /**
   * @param {Object<string, *>} obj
   * @param {string} key
   * @param {Partial<WrapperOptions>} options
   */
  attemptWrapObjectFunction(obj, key, options) {
    return this.attemptWrapFunction(obj[key], {
      parent: obj,
      key: key
    }, options)
  }

  /**
   * @param {*} data
   * @param {*} reference
   * @param {Partial<WrapperOptions>} options
   */
  attemptWrapFunction(data, reference, options) {
    /*
    Returns original data on failure for easy setting.
    However, this can not be used for everywhere due to problems like resetting location leading to page reload.
    */

    if (
      typeof data === 'function' &&
      !this.isWrapperFunction(data)
    ) {
      const func = data
      const wrappedFunction = this.wrapFunction(func, reference, options)
      if (wrappedFunction) {
        data = wrappedFunction
      }
    }

    return data
  }

  /**
   * @param {*} data
   */
  isWrapperFunction(data) {
    if (typeof data !== 'function') {
      return false
    }

    const wrapped = this.status.wrap.wrapped
    for (let key in wrapped) {
      if (wrapped[key] === data) {
        return true
      }
    }

    return false
  }

  /**
   * @param {function} func
   */
  isWrapForbidden(func) {
    // Disallow this class so doesn't stackTrace
    if (func === FunctionWrapper) {
      return true
    }

    // Disallow special functions used in wrapper function
    if (func === Utility.isLogFunction) {
      return true
    }

    // Disallow all forms of logging by default
    if (Utility.isLogFunction(func)) {
      return true
    }

    return false
  }

  /**
   * @param {WrapperFunction} func
   * @return {boolean}
   */
  isWrapped(func) {
    return !!func.__wrapped
  }

  /**
   * @param {function} func
   * @param {*[]} args
   * @param {*} returnVal
   */
  getFunctionData(func, args, returnVal = undefined) {
    const data = this.functionData()

    /**
     * @param {*[]} args 
     */
    const sortArgs = function (args) {
      args = Array.prototype.slice.call(args)
      return args.sort()
    }

    data.name = func.name
    data.function = func
    data.arguments = sortArgs(args)
    data.return = returnVal

    if (arguments.length === this.getFunctionData.length) {
      data.returned = true
    }

    return data
  }

  /**
     * @param {CommonEventData} obj
     */
  handleCommonEvent(obj) {
    if (obj.options.events && obj.event && obj.options.events[obj.event]) {
      obj.options.events[obj.data].apply(this, [obj.data])
    }

    if (obj.options.log) {
      if (obj.options.logPossiblyBadOnly) {
        if (this.isBad(obj)) {
          return false
        }
      }

      // Log
      console.log(obj.logTitle)
      this.logFunction(obj)
    }

    return true
  }

  /**
     * @param {Partial<CommonEventData>} objOptions
     * @param {FunctionData} funcData
     * @param {WrapperOptions} options
     */
  getCommonEventData(objOptions, funcData, options) {
    /**
     * @type {CommonEventData}
     */
    const obj = {
      event: null,
      logTitle: 'Unknown:',
      name: funcData.name,
      data: funcData,
      options
    }

    if (objOptions) {
      for (let key in objOptions) {
        /** @type {any} */ (obj)[key] = /** @type {any} */ (/** @type {any} */ (objOptions)[key])
      }
    }

    return obj
  }

  /**
     * @param {FunctionData} funcData
     * @param {WrapperOptions} options
     */
  onStart(funcData, options) {
    const obj = this.getCommonEventData({
      event: 'start',
      logTitle: 'Start event:'
    }, funcData, options)
    return this.handleCommonEvent(obj)
  }

  /**
     * @param {FunctionData} funcData
     * @param {WrapperOptions} options
     */
  onComplete(funcData, options) {
    const obj = this.getCommonEventData({
      event: 'complete',
      logTitle: 'Complete event:'
    }, funcData, options)
    return this.handleCommonEvent(obj)
  }

  /**
     * @param {CommonEventData} funcData
     */
  logFunction(funcData) {
    // logObjectOnSingleLine(funcData) // Consider adding from: js-functions BaseObjectHelper
    console.log(funcData)
  }
}
