const Swal = require('sweetalert2')
const swal = Swal.fire.bind(Swal)
const {
  Utility
} = require('js-functions')
const DomHelper = require('./DomHelper')
const domHelper = new DomHelper()

/**
 * Class for handling prompting to get image.
 * @param {*} settings
 */
var ImagePrompter = function (settings) {
  var prompter = {
    options: [{
        name: 'File',
        events: {
          create: function (el, option) {
            console.log('create', el, option)
            domHelper.setClickFileHandler(el, function (event) {
              prompter.loadImageFromFile(event, prompter.events.select)
              prompter.hide()
            })
          }
        }
      },
      {
        name: 'Webcam',
        events: {
          click: function (el, option) {
            console.log('click', el, option)
            // prompter.takeBlindPhoto(prompter.events.select)
            prompter.takePreviewablePhoto(prompter.events.select)
            prompter.hide()
          }
        }
      },
      {
        name: 'Empty',
        events: {
          click: function (el, option) {
            console.log('click', el, option)
            var image = document.createElement('img')
            image.src = ''
            prompter.events.select(image)
            prompter.hide()
          }
        }
      }
    ],

    classes: {
      streamManager: null,
      canvasManager: null
    },

    objects: {
      stream: null,
      video: null
    },

    events: {
      select: null // Pass in img element
    },
    elements: {
      main: null,
      list: null
    },

    loadImageFromFile: function (event, callback) {
      return Utility.loadFileInput(event, function (data) {
        var image = new window.Image()
        image.src = data
        image.onload = function () {
          callback(image)
        }
        image.onerror = function (err) {
          console.error('loadImageFromFile onerror', err)
        }
      }, {
        method: 'readAsDataURL'
      })
    },

    takePreviewablePhoto: function (callback) {
      prompter.getCameraStream(function (stream, objects) {
        if (stream) {
          // Display
          if (prompter.elements.main) {
            prompter.elements.main.appendChild(objects.video)
          }

          // Click handler
          objects.video.style.width = '100%'
          objects.video.addEventListener('click', function (ev) {
            ev.cancelBubble = true
            ev.stopPropagation()
            prompter.takePhotoAndStopStream(callback)
          }, false)
        }
      })
    },

    takeBlindPhoto: function (callback) {
      // Get, take, stop.
      prompter.getCameraStream(function (stream) {
        if (stream) {
          prompter.takePhotoAndStopStream(callback)
        }
      })
    },

    getCameraStream: function (callback) {
      // Don't allow multiple
      if (prompter.objects.stream) {
        return callback(prompter.objects.stream)
      }

      var wrappedCallback = function (stream) {
        prompter.classes.streamManager.handleCameraStream(stream, prompter.objects)
        callback(stream, prompter.objects)
      }

      prompter.classes.streamManager.getUserMedia(wrappedCallback)
    },

    takePhoto: function () {
      // Instant

      var video = prompter.objects.video
      if (video) {
        var canvasManager = prompter.classes.canvasManager
        var image = canvasManager.drawableToImage(video)
      }

      return image
    },

    takePhotoAndStopStream: function (callback) {
      var image = prompter.takePhoto()
      prompter.stopCameraStream()
      callback(image)
    },

    stopCameraStream: function () {
      prompter.classes.streamManager.stopCameraStreamObject(prompter.objects)
    },

    setup: function (settings) {
      if (!settings.classes.canvasManager) {
        throw new Error('REQUIRES canvasManager')
      }
      if (!settings.classes.streamManager) {
        throw new Error('REQUIRES streamManager')
      }
      if (!window.$) {
        throw new Error('REQUIRES jQuery')
      }

      if (settings) {
        if (settings.element) {
          prompter.elements.main = settings.element
        }
        if (settings.callback) {
          prompter.events.select = settings.callback
        }
        if (settings.classes && settings.classes.canvasManager) {
          prompter.classes.canvasManager = settings.classes.canvasManager
        }
        if (settings.classes && settings.classes.streamManager) {
          prompter.classes.streamManager = settings.classes.streamManager
        }
      }

      prompter.setupElements()
    },

    setupElements: function () {
      // Main
      if (prompter.elements.main) {
        prompter.elements.main.addEventListener('click', function () {
          prompter.show()
        })
        prompter.elements.main.addEventListener('dragover', function (ev) {
          ev.stopPropagation()
          ev.preventDefault()
          ev.dataTransfer.dropEffect = 'copy'
        })
        prompter.elements.main.addEventListener('drop', function (ev) {
          ev.stopPropagation()
          ev.preventDefault()
          prompter.loadImageFromFile(ev, prompter.events.select)
        })
      }

      // list
      prompter.elements.list = document.createElement('ul')
      prompter.setupMenu()
    },

    setupMenu: function () {
      var options = prompter.options
      var li
      for (var i = 0; i < options.length; i++) {
        li = document.createElement('li')
        li.textContent = options[i].name
        li.addEventListener('click', prompter.getMenuItemHandle(options[i], li))

        // Create event
        var events = options[i].events
        if (events && events.create) {
          events.create(li, options[i])
        }

        prompter.elements.list.appendChild(li)
      }
    },

    getMenuItemHandle: function (option, li) {
      return function () {
        // Events
        var events = option.events

        // Click
        if (events && events.click) {
          events.click(li, option)
        }
      }
    },

    show: function () {
      /*
      Common public function.
      */

      /*
      if(!prompter.elements.list.parentElement){
        document.body.appendChild(prompter.elements.list);
      }
      */
      // centerFixElement(prompter.elements.list);

      prompter.elements.list.style.display = 'block'

      swal({ // https://limonte.github.io/sweetalert2/
        // title: 'Image capture method',
        // text: '',
        type: '',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        onOpen: function (el) {
          window.$(el).prepend(prompter.elements.list)
        }
      }).then(function () {}, function () {})
    },

    hide: function () {
      /*
      if(prompter.elements.list.parentElement){
        prompter.elements.list.parentElement.removeChild(prompter.elements.list);
      }
      */

      prompter.elements.list.style.display = 'none'

      Swal.close()
    }
  }

  // Setup
  prompter.setup(settings)

  return prompter
}

module.exports = ImagePrompter