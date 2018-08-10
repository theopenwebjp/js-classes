/**
 * Text language handling class.
 * language/defaultLanguage:
 * Any string allowed, but using ISO standard preferred.
 * http://www-01.sil.org/iso639-3/codes.asp // same as wordpress and newer than many others.
 * //Old: http://www.loc.gov/standards/iso639-2/php/English_list.php
 * Name deprecated. Use I18n class instead.
 * Similar libary exists: https://github.com/i18next/i18next
 * Should use similar libary and unite functions over time. However some functions may be unique here.
 * @param {*} settings 
 */
var TextManager = function(settings){
  var manager = {};
  
  manager.settings = {
    auto: true,
    actionHandler: null,//Pass in to allow url param handling
    languageParam: "language",
    defaultLanguage: "",
    language: "",
    languages: {
      //Language
    },
    languageFormat: "iso639-3",
    characterSet: "standard"
  };
  
  manager.Language = function(){
    return {
      //key value pairs
    };
  }
  
  manager.help = function(){
    alert("Language codes use: " + "iso639-3");
  }
  
  manager.setup = function(settings){
    
    //Settings
    if(settings){
      for(var key in settings){
        manager.settings[key] = settings[key];
      }
    }
    
    //Default language
    if(manager.settings.auto){
      manager.setLanguageFromEnvironment();
    }
    
    //Check
    if(!manager.check()){
      throw Error("Check failed. Please check log.");
    }
  }
  
  manager.check = function(){
    /*
    Should allow languageFormat + character sets
    */
    
    if(manager.settings.languageFormat === "iso639-3"){//Basic check for now to avoid likely bugs.
      var l = manager.settings.languages;
      if(l["en"] || l["jp"] || l["english"] || l["japanese"]){
        console.error('Invalid language format. Check https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes');
        return false;
      }
    }
    
    if(manager.settings.characterSet === "standard"){
      //Allow any. Should use lowercase.
      //Examples: https://en.wikipedia.org/wiki/List_of_writing_systems
    }
    
    return true;
  }
  
  manager.getLanguage = function(language){
    return manager.settings.language;
  }
  
  manager.setLanguage = function(language){
    if(language && manager.settings.languages[language]){
      manager.settings.language = language;
      return true;
    }else{
      return false;
    }
  }
  
  manager.getCurrentLanguageData = function(){
    return manager.getCommonLanguageData("language");
  }
  
  manager.getDefaultLanguageData = function(){
    return manager.getCommonLanguageData("defaultLanguage");
  }
  
  manager.getCommonLanguageData = function(key){
    var language, data;
    
    language = manager.settings[key];
    data = manager.settings.languages[language];
    if(data){
      return data;
    }
    
    //FAILED
    return null;
  }
  
  manager.getMessage = function(key){
    var data;
    
    //Normal
    data = manager.getCurrentLanguageData();
    if(data && data[key]){
      return data[key];
    }
    
    //Default
    data = manager.getDefaultLanguageData();
    if(data && data[key]){
      return data[key];
    }
    
    //None
    return "";
  }
  
  //Alias
  manager.m = manager.getMessage;

  manager.getMessageObject = function(keys){
    const obj = {};
    keys.forEach((key)=>{
      obj[key] = manager.getMessage(key);
    });

    return obj;
  }
    
  manager.getMessageArray = function(keys){
    return keys.map((key)=>{return manager.getMessage(key);});
  }
  
  manager.setMessage = function(key, val){
    var data = manager.getCurrentLanguageData();
    if(data){
      data[key] = val;
      return true;
    }
    
    //Nothing changed
    return false;
  }
  
  manager.getAvailableLanguages = function(){
    var languages = manager.settings.languages;
    return Object.keys(languages);
  }
  
  manager.setLanguageFromEnvironment = function(){
    if(!manager.setLanguageFromUrlParam()){
      manager.setLanguageFromBrowserLanguage();
    }
  }
  
  manager.setLanguageFromBrowserLanguage = function(){
    var l = navigator.language;
    var key = l.split("-")[0];
    manager.setLanguage(key);
  }
  
  manager.setLanguageFromUrlParam = function(actionHandler, onTextUpdate, key){
    //actionHandler: uriActionHandler OR independent implementation
    var url = location.href;

    if(!key){
      key = manager.settings.languageParam;
    }
    
    if(!actionHandler){
      actionHandler = manager.settings.actionHandler;
      if(!actionHandler){return false;}
    }
    
    var handleLanguage = function(language){
      var bool = manager.setLanguage(language);
      if(bool && onTextUpdate){
        onTextUpdate();
      }
      return bool;
    }

    var actions = {};
    actions[key] = handleLanguage;

    var results = actionHandler(url, actions);
    return results;
  }
  
  manager.setup(settings);
  
  return manager;
}

if(typeof window === 'object'){
  window.TextManager = TextManager;
}
if(typeof module !== 'undefined'){
  module.exports = TextManager;
}