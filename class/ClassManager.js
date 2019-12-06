/**
 * @typedef {object} ClassManagerSettings
 * @property {SchemaManager|null} schemaManager
 * @property {DataMapper|null} dataMapper
 */

/**
 * @typedef {object} ClassOptions
 * @property {object} [arguments]
 * @property {object} [schemaOptions]
 * @property {object} [mappingOptions]
 */

/**
 * @typedef {object} SchemaManager
 * @property {function} schema
 * @property {object} schemaList
 * TODO: Use real class.
 */

/**
 * @typedef {object} DataMapper
 * TODO: Use real class.
 */

/**
 * @typedef {object} MappingOptions
 * @property {{type: object, value: function}} condition
 * @property {{capitalize: boolean}} options
 */

/**
 * Handles class specific functions:
 * 1. Class from Schema list
 * 2. Base class inheritance
 * 3. Applying functions
 *
 * @param {ClassManagerSettings} settings
 */
var ClassManager = function(settings) {
    var manager = {}
        /**
         * @type {SchemaManager|null}
         */
    manager.schemaManager = null
        /**
         * @type {DataMapper|null}
         */
    manager.dataMapper = null
        /**
         * @type {object|null}
         */
    manager.baseClass = null

    manager.ClassOptions = function() {
        /**
         * @type {ClassOptions}
         */
        const classOptions = {
            arguments: {},
            schemaOptions: {},
            mappingOptions: {}
        }
        return classOptions
    }

    /**
     * @return {MappingOptions[]}
     */
    manager.getClassMappingOptionsFromSchema = function() {
        return manager.SimpleDataToClassMappingOptions(manager.schemaManager.schemaList)
    }

    /**
     * @param {Array<string>} classNames
     * @return {Array<MappingOptions>}
     */
    manager.SimpleDataToClassMappingOptions = function(classNames) { // ??test
        return [{
            condition: {
                type: 'key',
                value: function(val) {
                    return classNames.includes(val)
                }
            },
            options: {
                capitalize: true
            }
        }]
    }

    /**
     * Gets class by passing name and options(including data)
     * @param {String} className
     * @param {ClassOptions|undefined} options
     * @return {Object}
     */
    manager.getClass = function(className, options) {
        if (!options) {
            options = manager.ClassOptions()
        }

        // Data Mapping
        var data = manager.mapArguments(options.arguments, options.mappingOptions)

        // Schema
        var schema = manager.schemaManager.schema(manager.schemaManager.schemaList, className, data, options.schemaOptions)
        var classObj = schema

        // Base class
        if (manager.baseClass) {
            classObj = manager.inheritClass(classObj, manager.baseClass)
        }

        // Functions
        //

        return classObj
    }

    /**
     * @param {Object} args
     * @param {Object} options
     * @return {Object}
     */
    manager.mapArguments = function(args, options) {
        if (!manager.dataMapper) { // No data mapper
            return args
        } else if (!args || Object.keys(args).length === 0) { // No args
            return {}
        } else if (!options || Object.keys(options).length === 0) { // No options
            return args
        } else { // Map
            return manager.dataMapper.map(args, options)
        }
    }

    /**
     * @param {Object} classObj
     * @param {Object} baseClass
     * @return {Object}
     */
    manager.inheritClass = function(classObj, baseClass) {
        return Object.assign(classObj, baseClass)
    }

    /**
     * @param {ClassManagerSettings} settings
     */
    manager.setup = function(settings = {}) {
        if (!settings.schemaManager) {
            throw Error('ClassManager requires implementation of this.SchemaManager')
        }

        if (settings.dataMapper) {
            manager.dataMapper = settings.dataMapper
        }

        manager.schemaManager = settings.schemaManager
    }

    /**
     * @return {ClassManagerSettings}
     */
    manager.Settings = function() {
        /**
         * @type {ClassManagerSettings}
         */
        const settings = {
            schemaManager: null,
            dataMapper: null
        }
        return settings
    }

    /**
     * @return {SchemaManager}
     */
    manager.SchemaManager = function() {
        /**
         * @type {SchemaManager}
         */
        const schemaManager = { // TODO: Should import typedef from SchemaManager.
            schema: (schemaList, className, data, schemaOptions) => {},
            schemaList: {}
        }
        return schemaManager
    }

    manager.setup(settings)

    return manager
}

if (typeof window === 'object') {
    window.ClassManager = ClassManager
}
if (typeof module !== 'undefined') {
    module.exports = ClassManager
}