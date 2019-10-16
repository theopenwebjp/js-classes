const ObjectTraverser = require('object-traverser')

/**
 * Abstract class for converting anything.
 * @param {array} formats
 * @param {object} settings
 */
var FormatConverter = function (formats, settings) {
  var converter = {}

  // ??Should make static.
  converter.settings = {
    maxDepth: 5
  }
  converter.formats = []

  /**
   * @return {object}
   */
  converter.Format = function () {
    return {
      id: '',
      name: '',
      extension: '',
      mimeType: {
        main: '',
        sub: ''
      },
      converters: []
    }
  }

  /**
   * @return {object}
   */
  converter.Converter = function () {
    return {
      targetId: '',
      handle: function (data) {
        return new Promise(function (resolve, reject) {
          // convert here
          resolve(data)
        })
      }
    }
  }

  /**
   * @param {array|undefined} formats
   * @param {object|undefined} settings
   */
  converter.setup = function (formats, settings) {
    if (formats) {
      converter.formats = formats
    }

    if (settings) {
      converter.settings = settings
    }
  }

  /**
   * @param {string} id
   * @return {object}
   */
  converter.getFormat = function (id) {
    // Default lookup method
    return converter.getFormatByAttribute('id', id)
  }

  /**
   * @param {string} attr
   * @param {*} val
   * @return {object|null}
   */
  converter.getFormatByAttribute = function (attr, val) {
    var f = converter.formats
    for (var i = 0; i < f.length; i++) {
      if (f[i][attr] === val) {
        return f[i]
      }
    }

    return null
  }

  /**
   * @return {array}
   */
  converter.getFormatIds = function () {
    return converter.getFormatAttributes('id')
  }

  /**
   * @param {string} attr
   * @return {array}
   */
  converter.getFormatAttributes = function (attr) {
    var attributes = []

    var f = converter.formats
    for (var i = 0; i < f.length; i++) {
      attributes.push(f[i][attr])
    }

    return attributes
  }

  /**
   * @param {*} data
   * @param {number} fromId
   * @param {number} toId
   * @param {function} callback TODO: Why callback over promise?
   */
  converter.convert = function (data, fromId, toId, callback) {
    var path = converter.getBestConversionPath(fromId, toId)
    // ??id path to converters path
    var promises = []
    for (var i = 0; i < path.length; i++) {
      promises.push(converter.executeConverter(path[i]))
    }

    Promise.all(promises).then(function (convertedData) {
      callback(convertedData)
    }).catch(err => {
      console.error(err)
    })
  }

  /**
   * @param {object} converter
   * @return {Promise}
   */
  converter.executeConverter = function (converter) {
    return converter.handle()
  }

  /**
   * @param {number} fromId
   * @param {number} toId
   * @return {string|null}
   */
  converter.getBestConversionPath = function (fromId, toId) {
    var paths = converter.getConversionPaths(fromId, toId)
    var chosenPath = null
    for (var i = 0; i < paths.length; i++) {
      if (chosenPath === null || paths[i].length < chosenPath.length) {
        chosenPath = paths[i]
      }
    }

    return chosenPath
  }

  /**
   * @return {array}
   */
  converter.getConversionIdConnections = function () {
    var connections = []

    var f = converter.formats
    var i, j
    for (i = 0; i < f.length; i++) {
      for (j = 0; j < f[i].converters.length; j++) {
        connections.push([f[i].id, f[i].converters[j].id])
      }
    }

    return connections
  }

  /**
   * 1. Never go back to same node
   * 2. Max depth needed in case many paths likely.
   * @param {number} fromId
   * @param {number} toId
   * @return {array}
   */
  converter.getConversionPaths = function (fromId, toId) {
    var connections = converter.getConversionIdConnections()
    var maxDepth = 20
    var paths = converter.getPaths(fromId, toId, connections, maxDepth)

    return paths
  }

  /**
   * fromNode AND toNode ARE ABSTRACT NODES. ONLY EQUALITY CHECK IMPORTANT.
   * connections: [[nodeA, nodeB], ...]
   * @param {*} fromNode
   * @param {*} toNode
   * @param {array} connections
   * @param {number} maxDepth
   * TODO
   */
  converter.getPaths = function (fromNode, toNode, connections, maxDepth) {
    console.log('getPaths', fromNode, toNode, connections, maxDepth) // Should implement maxDepth
    // Create objects
    var objList = []
    ObjectTraverser.loopObject(connections, function (obj, key, val) {
      if (objList.indexOf(val) < 0) {
        objList.push(val)
      }
    })

    // ??
  }

  converter.setup(formats, settings)

  return converter
}

module.exports = FormatConverter
