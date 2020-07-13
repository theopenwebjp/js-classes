/**
 * @typedef {object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {object} RGBA
 * @property {number} r
 * @property {number} g
 * @property {number} b
 * @property {number} a
 */

/**
 * @typedef {Object} ToolSetting
 * @property {string} name
 * @property {string} description
 * @property {Object<string, function(*, *):void>} handles
 * @property {Object<string, function (MouseEvent, *, *):void>} listeners
 */

/**
 * @typedef {Object} State
 * @property {string|null} action
 * @property {*[]} args
 */

/**
 * @typedef {Object<string, (function(MouseEvent):void)|null>} MouseEventMap
 */

/**
 * Abstract drawable canvas(Does not necessarily use Canvas element).
 * Event listeners used so can draw freely depending on tool.
 * Comes with a number of tools.
 * Uses the Drawer class to perform actual drawing.
 * TODO: Move out functionality that can be reused.
 * @deprecated Use CanvasHelper OR fabricjs, etc.
 *
 * @param {Object} settings
 */
function DrawableCanvas(settings) {
    var dCanvas = {}
    dCanvas.drawer_args = {} // Arguments passed to Drawer abstraction.
    dCanvas.format = 'canvas' // canvas, svg, dom
    dCanvas.width = 100
    dCanvas.height = 100
    dCanvas.background_color = null // Empty = transparent

    // Flags
    dCanvas.store_states = false // In testing
    dCanvas.allow_interaction = true
    dCanvas.auto_append = false // Better to allow not appending by default.

    /**
     * Drawer class.
     * Must pass.
     * Not imported because own implementation may be accepted.
     * @type {import('./Drawer')|null}
     */
    dCanvas.Drawer = null

    /**
     * @type {State[]}
     */
    dCanvas.states = []
    /**
     * @type {number|null}
     */
    dCanvas.current_state_index = null

    // Action state
    dCanvas.current_state = {
        tool: 'pen', // use dCanvas.getTool(.tool) to get tool settings
        /**
         * @type {ToolSetting|null}
         */
        tool_settings: null,
        last_coords: {
            x: 0,
            y: 0
        },
        mouse_down: false
    }

    /**
     * Tool for ease of use(Represent listener action)
     * @type {Object<string, ToolSetting>}
     */
    dCanvas.tool_settings = {
        pen: {
            name: 'Pen',
            description: 'Pen',
            handles: {
                circle: function (state, lastCoords) {
                    dCanvas.executeAction('drawCircle', [state.last_coords.x, state.last_coords.y, dCanvas.m().getStyles().line_width / 2])
                },
                line: function (state, lastCoords) { // TODO: quick line leads to thin line but big circle, why?
                    if (state.mouse_down) {
                        state.tool_settings.handles.circle(state, lastCoords)
                        dCanvas.executeAction('drawLine', [lastCoords.x, lastCoords.y, state.last_coords.x, state.last_coords.y])
                    }
                }
            },
            listeners: {
                /**
                 * @param {MouseEvent} ev 
                 * @param {*} state 
                 * @param {*} lastCoords 
                 */
                mousedown: function (ev, state, lastCoords) {
                    state.tool_settings.handles.circle(state, lastCoords)
                },
                /**
                 * @param {MouseEvent} ev
                 * @param {*} state
                 * @param {*} lastCoords
                 */
                mousemove: function (ev, state, lastCoords) {
                    state.tool_settings.handles.line(state, lastCoords)
                }
            }
        },

        eraser: {
            name: 'Eraser',
            description: 'Eraser',
            handles: {
                autoStyle: function (handle) {
                    // Clear
                    const {
                        stroke_style,
                        fill_style
                    } = dCanvas.m().getStyles()
                    dCanvas.m().setStyles({
                        stroke_style: '',
                        fill_style: ''
                    })

                    // Handle
                    handle()

                    // Original style
                    dCanvas.m().setStyles({
                        stroke_style,
                        fill_style
                    })
                }
            },
            listeners: {
                /**
                 * @param {MouseEvent} ev 
                 * @param {*} state 
                 * @param {*} lastCoords 
                 */
                mousedown: function (ev, state, lastCoords) {
                    const handle = () => {
                        dCanvas.tool_settings.pen.handles.circle(state, lastCoords)
                    }
                    state.tool_settings.handles.autoStyle(handle)
                },
                /**
                 * @param {MouseEvent} ev
                 * @param {*} state
                 * @param {*} lastCoords
                 */
                mousemove: function (ev, state, lastCoords) {
                    const handle = () => {
                        dCanvas.tool_settings.pen.handles.line(state, lastCoords)
                    }
                    state.tool_settings.handles.autoStyle(handle)
                }
            }
        },

        pixel: {
            name: 'Pixel',
            description: 'Single pixel action',
            listeners: {
                /**
                 * @param {MouseEvent} ev
                 * @param {*} state
                 * @param {*} lastCoords
                 */
                mousedown: function (ev, state, lastCoords) {
                    dCanvas.executeAction('drawPixel', [state.last_coords.x, state.last_coords.y])
                }
            }
        },

        color_picker: {
            name: 'Color picker',
            description: 'Select pixel as color',
            listeners: {
                /**
                 * @param {MouseEvent} ev
                 * @param {*} state
                 * @param {*} lastCoords
                 */
                mousedown: function (ev, state, lastCoords) {
                    var data = dCanvas.executeAction('getPixelData', [state.last_coords.x, state.last_coords.y]) // TODO
                    dCanvas.setColor(data.color)
                },
                /**
                 * @param {MouseEvent} ev
                 * @param {*} state
                 * @param {*} lastCoords
                 */
                mousemove: function (ev, state, lastCoords) {
                    /*
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]);
                    */
                }
            }
        },

        text: {
            name: 'Text',
            description: 'Click position to add text',
            listeners: {
                /**
                 * @param {MouseEvent} ev
                 * @param {*} state
                 * @param {*} lastCoords
                 */
                mousedown: function (ev, state, lastCoords) {
                    /*
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]); // TODO
                    */
                },
                /**
                 * @param {MouseEvent} ev
                 * @param {*} state
                 * @param {*} lastCoords
                 */
                mousemove: function (ev, state, lastCoords) {
                    /*
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]); // TODO
                    */
                }
            }
        },

        fill: {
            name: 'Fill',
            description: 'Fills area with selected color',
            handles: {
                /**
                 * @param {number} x
                 * @param {number} y
                 * @param {RGBA} color
                 * @param {HTMLCanvasElement} canvas
                 */
                floodFill: function (x, y, color, canvas) {
                    // https://gist.github.com/binarymax/4071852
                    var ctx = canvas.getContext('2d')
                    if (!ctx) {
                        throw new Error('Could not get context')
                    }
                    var width = canvas.width
                    var height = canvas.height
                    var tolerance = 0
                    floodfill(x, y, color, ctx, width, height, tolerance)

                    //= =====================

                    // MIT License
                    // Author: Max Irwin, 2011

                    // Floodfill functions
                    /**
                     * @param {number} x
                     * @param {number} y
                     * @param {RGBA} fillcolor
                     * @param {CanvasRenderingContext2D} ctx
                     * @param {number} width
                     * @param {number} height
                     * @param {number} tolerance
                     */
                    function floodfill(x, y, fillcolor, ctx, width, height, tolerance) {
                        var img = ctx.getImageData(0, 0, width, height)
                        var data = img.data
                        var length = data.length
                        var Q = []
                        var i = (x + y * width) * 4
                        var e = i,
                            w = i,
                            me, mw, w2 = width * 4
                        var targetcolor = [data[i], data[i + 1], data[i + 2], data[i + 3]]
                        var targettotal = data[i] + data[i + 1] + data[i + 2] + data[i + 3]

                        if (!pixelCompare(i, targetcolor, targettotal, fillcolor, data, length, tolerance)) {
                            return false
                        }
                        Q.push(i)
                        while (Q.length) {
                            i = Q.pop()
                            if (pixelCompareAndSet(i, targetcolor, targettotal, fillcolor, data, length, tolerance)) {
                                e = i
                                w = i
                                mw = parseInt(i / w2) * w2 // left bound
                                me = mw + w2 // right bound
                                while (mw < (w -= 4) && pixelCompareAndSet(w, targetcolor, targettotal, fillcolor, data, length, tolerance)); // go left until edge hit
                                while (me > (e += 4) && pixelCompareAndSet(e, targetcolor, targettotal, fillcolor, data, length, tolerance)); // go right until edge hit
                                for (var j = w; j < e; j += 4) {
                                    if (j - w2 >= 0 && pixelCompare(j - w2, targetcolor, targettotal, fillcolor, data, length, tolerance)) Q.push(j - w2) // queue y-1
                                    if (j + w2 < length && pixelCompare(j + w2, targetcolor, targettotal, fillcolor, data, length, tolerance)) Q.push(j + w2) // queue y+1
                                }
                            }
                        }
                        ctx.putImageData(img, 0, 0)
                    }

                    /**
                     * @param {number} i
                     * @param {number[]} targetcolor
                     * @param {number} targettotal
                     * @param {RGBA} fillcolor
                     * @param {Uint8ClampedArray} data
                     * @param {number} length
                     * @param {number} tolerance
                     * @return {boolean}
                     */
                    function pixelCompare(i, targetcolor, targettotal, fillcolor, data, length, tolerance) {
                        if (i < 0 || i >= length) return false // out of bounds
                        if (data[i + 3] === 0) return true // surface is invisible

                        if (
                            (targetcolor[3] === fillcolor.a) &&
                            (targetcolor[0] === fillcolor.r) &&
                            (targetcolor[1] === fillcolor.g) &&
                            (targetcolor[2] === fillcolor.b)
                        ) return false // target is same as fill

                        if (
                            (targetcolor[3] === data[i + 3]) &&
                            (targetcolor[0] === data[i]) &&
                            (targetcolor[1] === data[i + 1]) &&
                            (targetcolor[2] === data[i + 2])
                        ) return true // target matches surface

                        if (
                            Math.abs(targetcolor[3] - data[i + 3]) <= (255 - tolerance) &&
                            Math.abs(targetcolor[0] - data[i]) <= tolerance &&
                            Math.abs(targetcolor[1] - data[i + 1]) <= tolerance &&
                            Math.abs(targetcolor[2] - data[i + 2]) <= tolerance
                        ) return true // target to surface within tolerance

                        return false // no match
                    }

                    /**
                     * @param {number} i
                     * @param {number[]} targetcolor
                     * @param {number} targettotal
                     * @param {RGBA} fillcolor
                     * @param {Uint8ClampedArray} data
                     * @param {number} length
                     * @param {number} tolerance
                     * @return {boolean}
                     */
                    function pixelCompareAndSet(i, targetcolor, targettotal, fillcolor, data, length, tolerance) {
                        if (pixelCompare(i, targetcolor, targettotal, fillcolor, data, length, tolerance)) {
                            // fill the color
                            data[i] = fillcolor.r
                            data[i + 1] = fillcolor.g
                            data[i + 2] = fillcolor.b
                            data[i + 3] = fillcolor.a
                            return true
                        }
                        return false
                    }
                }
            },
            listeners: {
                /**
                 * @param {MouseEvent} ev 
                 * @param {*} state 
                 * @param {*} lastCoords 
                 */
                mousedown: function (ev, state, lastCoords) {
                    var color = dCanvas.m().getStyles().fill_style
                    floodFill(state.last_coords.x, state.last_coords.y, color, dCanvas.m().canvas) // TODO: handles.floodFill function
                }
            }
        },

        zoom: {
            // TODO
        },

        shape: {
            // TODO
        }
    }

    dCanvas.manager = null

    // Listeners
    dCanvas.listeners = {
        /**
         * @param {MouseEvent} ev 
         */
        handleMouseDown: function (ev) {
            if (!dCanvas._checkIsClick(ev)) {
                return false
            }
            return dCanvas.executeCurrentTool('mousedown', ev)
        },
        /**
         * @param {MouseEvent} ev
         */
        handleMouseUp: function (ev) {
            return dCanvas.executeCurrentTool('mouseup', ev)
        },
        /**
         * @param {MouseEvent} ev
         */
        handleMouseMove: function (ev) {
            if (!dCanvas._checkIsClick(ev)) {
                return false
            }
            return dCanvas.executeCurrentTool('mousemove', ev)
        }
    }

    /**
     * @param {object} settings
     */
    dCanvas.setup = function (settings) {
        // Settings
        const ALLOWED_SETTINGS = [
            'Drawer',
            'drawer_args',
            'format',
            'width',
            'height',
            'background_color',
            'store_states',
            'allow_interaction',
            'auto_append'
        ]
        for (var key in settings) {
            if (ALLOWED_SETTINGS.indexOf(key) < 0) {
                continue
            }
            dCanvas[key] = settings[key]
        }

        // Tools
        dCanvas.setupTools()

        // Format
        dCanvas.setupFormat()

        // DOM
        dCanvas.setupElements()
    }

    dCanvas.setupFormat = function () {
        dCanvas.manager = new dCanvas.Drawer({
            format: dCanvas.format,
            args: dCanvas.drawer_args
        })
    }

    dCanvas.getManager = function () {
        return dCanvas.manager
    }

    dCanvas.m = dCanvas.getManager

    /**
     * Abstract element used for drawing/events
     * @return {HTMLCanvasElement}
     */
    dCanvas.getCanvas = function () {
        return dCanvas.manager.element
    }

    /**
     * @param {HTMLElement} [element]
     */
    dCanvas.append = function (element = document.body) {
        var childElement = dCanvas.getCanvas()
        if (!childElement.parentElement) {
            element.appendChild(childElement)
        }
    }

    dCanvas.setupElements = function () {
        // Event listeners
        if (dCanvas.allow_interaction) {
            var element = dCanvas.getCanvas()
            var l = dCanvas.listeners
            element.addEventListener('mousedown', l.handleMouseDown)
            element.addEventListener('mouseup', l.handleMouseUp)
            element.addEventListener('mousemove', l.handleMouseMove)
        }

        // Appending
        if (dCanvas.auto_append) {
            dCanvas.append()
        }
    }

    /**
     * Removes events so no interaction possible.
     */
    dCanvas.removeEvents = function () {
        var element = dCanvas.getCanvas()
        var l = dCanvas.listeners
        element.removeEventListener('mousedown', l.handleMouseDown)
        element.removeEventListener('mouseup', l.handleMouseUp)
        element.removeEventListener('mousemove', l.handleMouseMove)
    }

    /**
     * Initializes canvas to state before using in this class.
     * Will remove events and attributes.
     */
    dCanvas.initializeCanvas = function () {
        dCanvas.removeEvents()
        dCanvas.manager.initialize()
    }

    /**
     * Direct action handling
     * @param {string} action
     * @param {*[]} args
     * @return {*|null}
     */
    dCanvas.executeAction = function (action, args) {
        var manager = dCanvas.manager
        var returnData = null

        // Action
        if (action && manager[action]) {
            // Execute
            returnData = dCanvas.executeRawAction(action, args)

            // State
            dCanvas.handleNewState(action, args)
        }

        return returnData
    }

    /**
     * @param {string} action
     * @param {*[]} args
     * @return {*}
     */
    dCanvas.executeRawAction = function (action, args = []) {
        var returnData = dCanvas.manager[action].apply(this, args)
        return returnData
    }

    /**
     * @param {MouseEvent} ev
     * @return {Point}
     */
    dCanvas.handleNewCoords = function (ev) {
        // Get
        var rawCoords = dCanvas.getElementEventCoordinates(ev)
        /**
         * @type {Point}
         */
        var coords = {
            x: rawCoords.x,
            y: rawCoords.y
        }

        // Set
        dCanvas.current_state.last_coords = coords

        return coords
    }

    /**
     * @param {MouseEvent} ev
     */
    dCanvas.getElementEventCoordinates = function (ev) {
        var rect = ev.currentTarget.getBoundingClientRect()
        var coords = {}

        // Element(May differ with canvas internal size)
        coords.element_x = ev.clientX - rect.left
        coords.element_y = ev.clientY - rect.top

        // Canvas(Element converted to canvas internal size)
        var X_FACTOR = dCanvas.m().canvas.width / rect.width
        var Y_FACTOR = dCanvas.m().canvas.height / rect.height
        coords.x = X_FACTOR * coords.element_x
        coords.y = Y_FACTOR * coords.element_y

        // Client
        coords.client_x = ev.clientX
        coords.client_y = ev.clientY

        // Screen
        coords.screen_x = ev.screenX
        coords.screen_y = ev.screenY

        // Page
        coords.page_x = ev.pageX
        coords.page_y = ev.pageY

        return coords
    }

    /**
     * @param {string} listener
     * @param {MouseEvent} ev
     */
    dCanvas.executeCurrentTool = function (listener, ev) {
        // States
        if (listener === 'mousedown') {
            dCanvas.current_state.mouse_down = true
        } else if (listener === 'mouseup') {
            dCanvas.current_state.mouse_down = false
        }

        var toolName = dCanvas.current_state.tool
        var lastCoords = dCanvas.current_state.last_coords
        var coords = dCanvas.handleNewCoords(ev)
        var args = [ev, dCanvas.current_state, lastCoords]
        return dCanvas.executeTool(toolName, listener, args)
    }

    /**
     * Abstract drawing through here
     * @param {string} toolName
     * @param {string} listener
     * @param {*[]} args
     * @return {*}
     */
    dCanvas.executeTool = function (toolName, listener, args) {
        dCanvas.log('executeTool', toolName, listener, args)

        var returnData = null

        // Tool
        var toolSettings = dCanvas.getTool(toolName)
        if (toolName && toolSettings) {
            // Enabled handling
            if (!toolSettings.enabled) {
                return returnData
            }

            // Execute
            var mArgs = [toolName, listener, args]
            returnData = dCanvas.handleTool.apply(this, mArgs) // TODO: Documentation.

            // State
            dCanvas.handleNewState('handleTool', args)
        }

        return returnData
    }

    /**
     * Allows for enabling/disabling tools based on array.
     * @param {Array} arr
     */
    dCanvas.setUsableTools = function (arr) {
        var tools = dCanvas.tool_settings
        for (let key in tools) {
            tools.enabled = (arr.indexOf(key) >= 0)
        }

        return dCanvas
    }

    /**
     * Sets color of stroke and fill.
     * @param {String} color
     */
    dCanvas.setColor = function (color) {
        dCanvas.manager.setStyles({
            fill_style: color,
            stroke_style: color
        })

        return dCanvas
    }

    /**
     * Sets size of pen.
     * @param {number} px
     */
    dCanvas.setPenSize = function (px) {
        dCanvas.manager.setStyles({
            line_width: px
        })

        return dCanvas
    }

    /**
     * Sets size of text.
     * @param {number} px
     */
    dCanvas.setTextSize = function (px) {
        var partIndex = 0
        var val = px + 'px'
        dCanvas._setFontPart(partIndex, val)

        return dCanvas
    }

    /**
     * Sets text font.
     * @param {string} font
     */
    dCanvas.setTextFont = function (font) {
        var partIndex = 1
        var val = font
        dCanvas._setFontPart(partIndex, val)

        return dCanvas
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font
     * @param {number} index
     * @param {*} val
     */
    dCanvas._setFontPart = function (index, val) {
        var currentFont = dCanvas.m().getStyles().font
        var DELIMITER = ' '
        var parts = currentFont.split(DELIMITER)
        parts[index] = val
        var font = parts.join(DELIMITER)

        dCanvas.m().setStyles({
            font: font
        })
    }

    /**
     * Represents back/forward state.
     * @param {Partial<State>} options
     */
    dCanvas.State = function (options = {}) {
        return Object.assign({
            action: null,
            args: []
        }, options)
    }

    /**
     * Lose forwards on new.
     * Two ways to save:
     * 1. Save each separate action(Would require saving all)
     * 2. Save snapshot(Easier, so use for now)
     * @param {string} action TODO
     * @param {Array} args
     */
    dCanvas.handleNewState = function (action, args) {
        // Check
        if (!dCanvas.store_states) {
            return false
        }

        // Get snapshot
        var snapshot = dCanvas.executeRawAction('getSnapshot')
        var stateAction = 'applySnapshot'
        var stateArgs = [snapshot]

        var state = dCanvas.State({
            action: stateAction,
            args: stateArgs
        })
        dCanvas.addNewState(state)
    }

    /**
     * @param {State} state
     */
    dCanvas.addNewState = function (state) {
        // Remove forwards
        var nextIndex = dCanvas.current_state_index + 1
        var removed = dCanvas.states.splice(nextIndex)

        // Add
        dCanvas.states.push(state)

        // Set last
        dCanvas.current_state_index = dCanvas.states.length - 1
    }

    /**
     * @param {State} state
     */
    dCanvas.applyState = function (state) {
        // Index(allow setting new)
        var index = null
        for (var i = 0; i < dCanvas.states.length; i++) {
            if (dCanvas.states[i] === state) {
                index = i
                break
            }
        }
        if (index === null) {
            dCanvas.addNewState(state)
        }

        // Apply
        dCanvas.executeRawAction(state.action, state.args)
    }

    dCanvas.backState = function () {
        var attemptIndex = dCanvas.current_state_index - 1
        if (attemptIndex >= 0 && dCanvas.states[attemptIndex]) {
            dCanvas.applyState(dCanvas.state[attemptIndex])
        }
    }

    dCanvas.forwardState = function () {
        var attemptIndex = dCanvas.current_state_index + 1
        if (attemptIndex >= 0 && dCanvas.states[attemptIndex]) {
            dCanvas.applyState(dCanvas.state[attemptIndex])
        }
    }

    /**
     * @param {Partial<ToolSetting>} settings
     * @return {object}
     */
    dCanvas.ToolSetting = function (settings) {
        /**
         * @type {ToolSetting} Same as ToolSetting?
         */
        const tSetting = {}
        tSetting.name = ''
        tSetting.description = ''
        tSetting.image = null
        tSetting.enabled = true // false to disable.
        tSetting.handle = null

        // Optional handles usually if same function needed multiple times.
        tSetting.handles = {
            //
        }

        /**
         * @type {MouseEventMap}
         */
        tSetting.listeners = {
            mousedown: null,
            mouseup: null,
            mousemove: null
        }

        for (let key in settings) {
            if (key === 'listeners') {
                for (let lKey in settings[key]) {
                    tSetting.listeners[lKey] = settings[key][lKey]
                }
            } else {
                tSetting[key] = settings[key]
            }
        }

        return tSetting
    }

    dCanvas.setupTools = function () {
        for (var key in dCanvas.tool_settings) {
            dCanvas.tool_settings[key] = new dCanvas.ToolSetting(dCanvas.tool_settings[key])
        }

        // Make sure tool settings updated.
        dCanvas.setTool(dCanvas.current_state.tool)
    }

    dCanvas.getTools = function () {
        return dCanvas.tool_settings
    }

    /**
     * Gets tool settings from tool name.
     * Can also get tool settings from state object.
     *
     * @param {String} name
     */
    dCanvas.getTool = function (name) {
        return dCanvas.tool_settings[name]
    }

    /**
     * Sets current tool
     * @param {String} name
     */
    dCanvas.setTool = function (name) {
        dCanvas.current_state.tool = name
        dCanvas.current_state.tool_settings = dCanvas.getTool(name)

        return dCanvas
    }

    dCanvas.getCurrentTool = function () {
        return dCanvas.current_state.tool_settings // TODO: Need to improve naming tool vs settings.
    }

    /**
     * @param {string} toolName
     * @param {string} listener
     * @param {[MouseEvent, any, any]} args
     * @return {*|undefined}
     */
    dCanvas.handleTool = function (toolName, listener, args) {
        var tool = dCanvas.getTool(toolName)
        if (tool && tool.listeners[listener]) {
            return tool.listeners[listener].apply(this, args)
        }
    }

    /**
     * @param  {...any} args 
     */
    dCanvas.log = function (...args) {
        if (window.console && console.log) {
            console.log(...args)
        }
    }

    /**
     * @param {UIEvent} ev
     * @return {boolean}
     */
    dCanvas._checkIsClick = function (ev) {
        var WHICH_TYPES = {
            NONE: 0,
            LEFT: 1,
            MIDDLE: 2,
            RIGHT: 3
        }

        return (ev.which === undefined || ev.which === WHICH_TYPES.LEFT)
    }

    dCanvas.setup(settings)

    return dCanvas
}

if (typeof window === 'object') {
    window.DrawableCanvas = DrawableCanvas
}
if (typeof module !== 'undefined') {
    module.exports = DrawableCanvas
}