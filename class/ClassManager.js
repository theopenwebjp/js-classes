/**
 * Handles class specific functions:
 * 1. Class from Schema list
 * 2. Base class inheritance
 * 3. Applying functions
 * 
 * @param {*} settings 
 */
var ClassManager = function (settings) {
  var manager = {};
  manager.schemaManager = null;
  manager.dataMapper = null;

  manager.baseClass = null;

  manager.ClassOptions = function () {
    return {
      arguments: {},
      schemaOptions: {},
      mappingOptions: {}
    };
  }

  manager.getClassMappingOptionsFromSchema = function () {
    return manager.SimpleDataToClassMappingOptions(manager.schemaManager.schemaList);
  }

  manager.SimpleDataToClassMappingOptions = function (classNames) { //??test
    return [{
      condition: {
        type: "key",
        value: function (val) {
          if (classNames.indexOf(val) >= 0) {
            return true;
          } else {
            return false;
          }
        }
      },
      options: {
        capitalize: true
      }
    }];
  }

  manager.getClass = function (className, options) {
    /*Gets class by passing name and options(including data)*/
    if (!options) {
      options = manager.ClassOptions();
    }

    //Data Mapping
    var data = manager.mapArguments(options.arguments, options.mappingOptions);

    //Schema
    var schema = manager.schemaManager.schema(manager.schemaManager.schemaList, className, data, options.schemaOptions);
    var classObj = schema;

    //Base class
    if (manager.baseClass) {
      classObj = manager.inheritClass(classObj, manager.baseClass);
    }

    //Functions
    //

    return classObj;
  }

  manager.mapArguments = function (args, options) {

    //No data mapper
    if (!manager.dataMapper) {
      return args;
    }

    //No args
    if (!args || Object.keys(args).length === 0) {
      return {};
    }

    //No options
    if (!options || Object.keys(options).length === 0) {
      return args;
    }

    //Map
    return manager.dataMapper.map(args, options);
  }

  manager.inheritClass = function (classobj, baseClass) {
    return Object.assign(classobj, baseClass);
  }

  manager.setup = function (settings) {
    if (!settings || !settings.schemaManager) {
      throw Error("ClassManager requires SchemaManager");
    }

    manager.schemaManager = settings.schemaManager;
  }

  manager.setup(settings);

  return manager;
}

if (typeof window === 'object') {
  window.ClassManager = ClassManager;
}
if (typeof module !== 'undefined') {
  module.exports = ClassManager;
}