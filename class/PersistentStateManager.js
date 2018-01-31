/**
 * Saving class.
 * Handles all possible saving methods in JavaScript.
 */
var PersistentStateManager = function(){
  var manager = {};
  manager.settings = {
    defaultMethod: "localStorage"
  };
  
  manager.fixMethod = function(method){
    if(!method){method = manager.settings.defaultMethod;}
    return method;
  }
  
  manager.get = function(key, method){
    method = manager.fixMethod(method);
    
    switch(method){
      case "localStorage":
        return window.localStorage.getItem(key);
        break;
        
      default:
        console.error("Invalid method", method);
        break;
    }
    
    return false;
  }
  
  manager.set = function(key, value, method){
    method = manager.fixMethod(method);
    
    switch(method){
      case "localStorage":
        //https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        var voidVal = window.localStorage.setItem(key, value);
        return true;
        break;
        
      default:
        console.error("Invalid method", method);
        break;
    }
    
    return false;
  }
  
  return manager;
}