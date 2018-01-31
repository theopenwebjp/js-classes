/**
 * Abstract drawable canvas(Does not necessarily use Canvas element).
 * Event listeners used so can draw freely depending on tool.
 * Comes with a number of tools.
 * Uses the Drawer class to perform actual drawing.
 * 
 * @param {Object} settings 
 */
function DrawableCanvas(settings){

    var dCanvas = {};
    dCanvas.format = "canvas";//svg, dom
    dCanvas.width = 100;
    dCanvas.height = 100;
    dCanvas.background_color = null;//Empty = transparent

    //Flags
    dCanvas.store_states = false;//In testing
    dCanvas.allow_interaction = true;
    dCanvas.auto_append = false;//Better to allow not appending by default.

    /**
     * Drawer class.
     * Must pass.
     * Not imported because own implementation may be accepted.
     */
    dCanvas.Drawer = null;
    
    //State
    dCanvas.states = [];
    dCanvas.current_state_index = null;

    //Action state
    dCanvas.current_state = {
        tool: "pen",//use dCanvas.getTool(.tool) to get tool settings
        tool_settings: null,
        last_coords: {
            x: 0,
            y: 0
        },
        mouse_down: false
    };

    /**
     * Tool for ease of use(Represent listener action)
     */
    dCanvas.tool_settings = {
        pen: {
            name: "Pen",
            description: "Pen",
            handles: {
                circle: function(state, lastCoords){
                    dCanvas.executeAction("drawCircle", [state.last_coords.x, state.last_coords.y, dCanvas.m().getStyles().line_width/2]);
                },
                line: function(state, lastCoords){//??quick line leads to thin line but big circle, why?
                    if(state.mouse_down){
                        state.tool_settings.handles.circle(state, lastCoords);
                        dCanvas.executeAction("drawLine", [lastCoords.x, lastCoords.y, state.last_coords.x, state.last_coords.y]);
                    }
                }
            },
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    state.tool_settings.handles.circle(state, lastCoords);
                },
                mousemove: function(ev, state, lastCoords){
                    state.tool_settings.handles.line(state, lastCoords);
                }
            }
        },

        eraser: {
            name: "Eraser",
            description: "Eraser",
            handles: {
                autoStyle: function(handle){
                    
                    //Clear
                    const {stroke_style, fill_style} = dCanvas.getStyles();
                    dCanvas.setStyles({
                        stroke_style: '',
                        fill_style: ''
                    });

                    //Handle
                    handle();

                    //Original style
                    dCanvas.setStyles({
                        stroke_style,
                        fill_style
                    });
                }
            },
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    const handle = ()=>{
                        dCanvas.tool_settings.pen.handles.circle(state, lastCoords);
                    };
                    state.tool_settings.handles.autoStyle(handle);
                },
                mousemove: function(ev, state, localCoords){
                    const handle = ()=>{
                        dCanvas.tool_settings.pen.handles.line(state, lastCoords);
                    };
                    state.tool_settings.handles.autoStyle(handle);
                }
            }
        },

        pixel: {
            name: "Pixel",
            description: "Single pixel action",
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    dCanvas.executeAction("drawPixel", [state.last_coords.x, state.last_coords.y]);
                }
            }
        },

        color_picker: {
            name: "Color picker",
            description: "Select pixel as color",
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]);//??
                    dCanvas.setColor(data.color);
                },
                mousemove: function(ev, state, lastCoords){
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]);
                    //Show data
                    console.log(data);
                    //
                }
            }
        },

        text: {
            name: "Text",
            description: "Click position to add text",
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]);//??
                    //Select data
                    //??data.color
                },
                mousemove: function(ev, state, lastCoords){
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]);//??
                    //Show data
                    //??data.color

                }
            }
        },

        fill: {
            name: "Fill",
            description: "Fills area with selected color",
            handles: {
                floodFill: function(x, y, color, canvas){
                    //https://gist.github.com/binarymax/4071852
                    var ctx = canvas.getContext('2d');
                    var width = canvas.width;
                    var height = canvas.height;
                    var tolerance = 0;
                    floodfill(x,y,color,ctx,width,height,tolerance);

                    //======================

                    //MIT License
                    //Author: Max Irwin, 2011

                    //Floodfill functions
                    function floodfill(x,y,fillcolor,ctx,width,height,tolerance) {
                        var img = ctx.getImageData(0,0,width,height);
                        var data = img.data;
                        var length = data.length;
                        var Q = [];
                        var i = (x+y*width)*4;
                        var e = i, w = i, me, mw, w2 = width*4;
                        var targetcolor = [data[i],data[i+1],data[i+2],data[i+3]];
                        var targettotal = data[i]+data[i+1]+data[i+2]+data[i+3];

                        if(!pixelCompare(i,targetcolor,targettotal,fillcolor,data,length,tolerance)) { return false; }
                        Q.push(i);
                        while(Q.length) {
                            i = Q.pop();
                            if(pixelCompareAndSet(i,targetcolor,targettotal,fillcolor,data,length,tolerance)) {
                                e = i;
                                w = i;
                                mw = parseInt(i/w2)*w2; //left bound
                                me = mw+w2;	//right bound			
                                while(mw<(w-=4) && pixelCompareAndSet(w,targetcolor,targettotal,fillcolor,data,length,tolerance)); //go left until edge hit
                                while(me>(e+=4) && pixelCompareAndSet(e,targetcolor,targettotal,fillcolor,data,length,tolerance)); //go right until edge hit
                                for(var j=w;j<e;j+=4) {
                                    if(j-w2>=0 		&& pixelCompare(j-w2,targetcolor,targettotal,fillcolor,data,length,tolerance)) Q.push(j-w2); //queue y-1
                                    if(j+w2<length	&& pixelCompare(j+w2,targetcolor,targettotal,fillcolor,data,length,tolerance)) Q.push(j+w2); //queue y+1
                                } 			
                            }
                        }
                        ctx.putImageData(img,0,0);
                    }

                    function pixelCompare(i,targetcolor,targettotal,fillcolor,data,length,tolerance) {	
                        if (i<0||i>=length) return false; //out of bounds
                        if (data[i+3]===0)  return true;  //surface is invisible
                        
                        if (
                            (targetcolor[3] === fillcolor.a) && 
                            (targetcolor[0] === fillcolor.r) && 
                            (targetcolor[1] === fillcolor.g) && 
                            (targetcolor[2] === fillcolor.b)
                        ) return false; //target is same as fill
                        
                        if (
                            (targetcolor[3] === data[i+3]) &&
                            (targetcolor[0] === data[i]  ) && 
                            (targetcolor[1] === data[i+1]) &&
                            (targetcolor[2] === data[i+2])
                        ) return true; //target matches surface 
                        
                        if (
                            Math.abs(targetcolor[3] - data[i+3])<=(255-tolerance) &&
                            Math.abs(targetcolor[0] - data[i]  )<=tolerance && 
                            Math.abs(targetcolor[1] - data[i+1])<=tolerance &&
                            Math.abs(targetcolor[2] - data[i+2])<=tolerance
                        ) return true; //target to surface within tolerance 
                        
                        return false; //no match
                    }

                    function pixelCompareAndSet(i,targetcolor,targettotal,fillcolor,data,length,tolerance) {
                        if(pixelCompare(i,targetcolor,targettotal,fillcolor,data,length,tolerance)) {
                            //fill the color
                            data[i] 	 = fillcolor.r;
                            data[i+1] = fillcolor.g;
                            data[i+2] = fillcolor.b;
                            data[i+3] = fillcolor.a;
                            return true;
                        }
                        return false;
                    }
                }
            },
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    var color = dCanvas.getStyles().fill_style;
                    floodFill(state.last_coords.x, state.last_coords.y, color, dCanvas.m().canvas);
                }
            }
        },

        zoom: {
            //??
        },

        shape: {
            //??
        }
    };

    dCanvas.manager = null;

    //Listeners
    dCanvas.listeners = {
        handleMouseDown: function(ev){
            return dCanvas.executeCurrentTool("mousedown", ev);
        },

        handleMouseUp: function(ev){
            return dCanvas.executeCurrentTool("mouseup", ev);
        },

        handleMouseMove: function(ev){
            return dCanvas.executeCurrentTool("mousemove", ev);
        }
    };

    dCanvas.setup = function(settings){

        //Settings
        const ALLOWED_SETTINGS = [
            'Drawer',
            'format',
            'width',
            'height',
            'background_color',
            'store_states',
            'allow_interaction',
            'auto_append'
        ];
        for(var key in settings){
            if(ALLOWED_SETTINGS.indexOf(key) < 0){
                continue;
            }
            dCanvas[key] = settings[key];
        }
        
        //Aliases
        dCanvas.setupAliases();

        //Tools
        dCanvas.setupTools();

        //Format
        dCanvas.setupFormat();

        //DOM
        dCanvas.setupElements();
    }
    
    dCanvas.setupAliases = function(){
        dCanvas.m = dCanvas.getManager;
    }

    dCanvas.setupFormat = function(){
        dCanvas.manager = new dCanvas.Drawer({
            format: dCanvas.format
        });
    }

    dCanvas.getManager = function(){
        return dCanvas.manager;
    }

    /**
     * Abstract element used for drawing/events
     */
    dCanvas.getCanvas = function(){
        return dCanvas.manager.element;
    }

    dCanvas.append = function(element){
        if(!element){
            element = document.body;
        }

        var childElement = dCanvas.getCanvas();
        if(!childElement.parentElement){
            element.appendChild(childElement);
        }
    }

    dCanvas.setupElements = function(){

        //Event listeners
        if(dCanvas.allow_interaction){
            var element = dCanvas.getCanvas();
            var l = dCanvas.listeners;
            element.addEventListener("mousedown", l.handleMouseDown);
            element.addEventListener("mouseup", l.handleMouseUp);
            element.addEventListener("mousemove", l.handleMouseMove);
        }

        //Appending
        if(dCanvas.auto_append){
            dCanvas.append();
        }
    }

    /**
     * Direct action handling
     */
    dCanvas.executeAction = function(action, args){
        var manager = dCanvas.manager;
        var returnData = null;

        //Action
        if(action && manager[action]){

            //Execute
            returnData = dCanvas.executeRawAction(action, args);

            //State
            dCanvas.handleNewState(action, args);
        }

        return returnData;
    }

    dCanvas.executeRawAction = function(action, args){
        var returnData = dCanvas.manager[action].apply(this, args);
        return returnData;
    }

    dCanvas.handleNewCoords = function(ev){

        //Get
        var rawCoords = dCanvas.getElementEventCoordinates(ev);
        var coords = {
            x: rawCoords.x,
            y: rawCoords.y
        };

        //Set
        dCanvas.current_state.last_coords = coords;

        return coords;
    }

    dCanvas.getElementEventCoordinates = function(ev){
        var rect = ev.target.getBoundingClientRect();
        var coords = {};

        //Element
        coords.x = ev.clientX - rect.left;
        coords.y = ev.clientY - rect.top;

        //Client
        coords.client_x = ev.clientX;
        coords.client_y = ev.clientY;

        //Screen
        coords.screen_x = ev.screenX;
        coords.screen_y = ev.screenY;

        //Page
        coords.page_x = ev.pageX;
        coords.page_y = ev.pageY;

        return coords;
    }

    dCanvas.executeCurrentTool = function(listener, ev){

        //States
        if(listener === "mousedown"){
            dCanvas.current_state.mouse_down = true;
        }else if(listener === "mouseup"){
            dCanvas.current_state.mouse_down = false;
        }

        var toolName = dCanvas.current_state.tool;
        var lastCoords = dCanvas.current_state.last_coords;
        var coords = dCanvas.handleNewCoords(ev);
        var args = [ev, dCanvas.current_state, lastCoords];
        return dCanvas.executeTool(toolName, listener, args);
    }

    /**
     * Abstract drawing through here
     */
    dCanvas.executeTool = function(toolName, listener, args){

        dCanvas.log("executeTool:");
        dCanvas.log(toolName);
        dCanvas.log(listener);
        dCanvas.log(args);

        var manager = dCanvas.manager;
        var returnData = null;

        //Tool
        var toolSettings = dCanvas.getTool(toolName);
        if(toolName && toolSettings){
            if(){
                //??
            }

            //Execute
            var mArgs = [toolName, listener, args];
            returnData = dCanvas.handleTool.apply(this, mArgs);//??Documentation.

            //State
            dCanvas.handleNewState("handleTool", args);
        }

        return returnData;
    }

    /**
     * Allows for enabling/disabling tools based on array.
     * @param {Array} arr
     * @return {DrawableCanvas} chainable
     */
    dCanvas.setUsableTools = function(arr){
        var tools = dCanvas.tool_settings;
        for(let key in tools){
            tools.enabled = (arr.indexOf(key) >= 0);
        }

        return dCanvas;
    }

    /**
     * Sets color of stroke and fill.
     * @param {String} color
     * @return {DrawableCanvas} chainable
     */
    dCanvas.setColor = function(color){
        dCanvas.manager.setStyles({
            fill_style: color,
            stroke_style: color
        });

        return dCanvas;
    }

    /**
     * Sets size of pen.
     * @return {DrawableCanvas} chainable
     */
    dCanvas.setPenSize = function(px){
        dCanvas.manager.setStyles({
            line_width: px
        });

        return dCanvas;
    }

    /**
     * Sets size of text.
     * @return {DrawableCanvas} chainable
     */
    dCanvas.setTextSize = function(px){
        var partIndex = 0;
        var val = px + 'px';
        dCanvas._setFontPart(partIndex, val);

        return dCanvas;
    }

    /**
     * Sets text font.
     * @return {DrawableCanvas} chainable
     */
    dCanvas.setTextFont = function(font){
        var partIndex = 1;
        var val = font;
        dCanvas._setFontPart(partIndex, val);

        return dCanvas;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font
     */
    dCanvas._setFontPart = function(index, val){
        var currentFont = dCanvas.manager.getStyles().font;
        var DELIMITER = ' ';
        var parts = currentFont.split(DELIMITER);
        parts[index] = val;
        font = parts.join(DELIMITER);

        dCanvas.manager.setStyles({
            font: font
        });
    }

    /**
     * Represents back/forward state.
     */
    dCanvas.State = function(options){
        
        var state = {};
        state.action = null;
        state.args = [];

        for(var key in options){
            state[key] = options[key];
        }

        return state;
    }

    /**
     * Lose forwards on new.
     * Two ways to save:
     * 1. Save each separate action(Would require saving all)
     * 2. Save snapshot(Easier, so use for now)
     */
    dCanvas.handleNewState = function(action, args){
        
        //Check
        if(!dCanvas.store_states){
            return false;
        }

        //Get snapshot
        var snapshot = dCanvas.executeRawAction("getSnapshot");
        var stateAction = "applySnapshot";
        var stateArgs = [snapshot];

        var state = new dCanvas.State({action: stateAction, args: stateArgs});
        return dCanvas.addNewState(state);
    }

    dCanvas.addNewState = function(state){

        //Remove forwards
        var nextIndex = dCanvas.current_state_index + 1;
        var removed = dCanvas.states.splice(nextIndex);

        //Add
        dCanvas.states.push(state);

        //Set last
        dCanvas.current_state_index = dCanvas.states.length - 1;

        return true;
    }

    dCanvas.applyState = function(state){

        //Index(allow setting new)
        var index = null;
        for(var i=0; i<dCanvas.states.length; i++){
            if(dCanvas.states[i] === state){
                index = i;
                break;
            }
        }
        if(index === null){
            dCanvas.addNewState(state);
        }

        //Apply
        dCanvas.executeRawAction(state.action, state.args);
    }

    dCanvas.backState = function(){
        var attemptIndex = dCanvas.current_state_index - 1;
        if(attemptIndex >= 0 && dCanvas.states[attemptIndex]){
            dCanvas.applyState(dCanvas.state[attemptIndex]);
        }
    }

    dCanvas.forwardState = function(){
        var attemptIndex = dCanvas.current_state_index + 1;
        if(attemptIndex >= 0 && dCanvas.states[attemptIndex]){
            dCanvas.applyState(dCanvas.state[attemptIndex]);
        }
    }

    dCanvas.ToolSetting = function(settings){
        var tSetting = {};
        tSetting.name = "";
        tSetting.description = "";
        tSetting.image = null;
        tSetting.enabled = true;//false to disable.
        tSetting.handle = null;

        //Optional handles usually if same function needed multiple times.
        tSetting.handles = {
            //
        };

        tSetting.listeners = {
            mousedown: null,
            mouseup: null,
            mousemove: null
        };

        var key, lKey;
        for(key in settings){
            if(key === "listeners"){
                for(lKey in settings[key]){
                    tSetting.listeners[lKey] = settings[key][lKey];
                }
            }else{
                tSetting[key] = settings[key];
            }
        }

        return tSetting;
    }

    dCanvas.setupTools = function(){
        for(var key in dCanvas.tool_settings){
            dCanvas.tool_settings[key] = new dCanvas.ToolSetting(dCanvas.tool_settings[key]);
        }

        //Make sure tool settings updated.
        dCanvas.setTool(dCanvas.current_state.tool);
    }

    dCanvas.getTools = function(){
        return dCanvas.tool_settings;
    }

    /**
     * Gets tool settings from tool name.
     * Can also get tool settings from state object.
     * 
     * @param {String} name
     */
    dCanvas.getTool = function(name){
        return dCanvas.tool_settings[name];
    }
    
    /**
     * Sets current tool
     * @param {String} name
     * @return {DrawableCanvas} chainable
     */
    dCanvas.setTool = function(name){
        dCanvas.current_state.tool = name;
        dCanvas.current_state.tool_settings = dCanvas.getTool(name);

        return dCanvas;
    }

    dCanvas.getCurrentTool = function(){
        return dCanvas.current_state.tool_settings;//??Need to improve naming tool vs settings.
    }

    dCanvas.handleTool = function(toolName, listener, args){
        var tool = dCanvas.getTool(toolName);
        if(tool && tool.listeners[listener]){
            return tool.listeners[listener].apply(this, args);
        }
    }

    dCanvas.log = function(data){
        if(window.console && console.log){
            console.log(data);
        }
    }

    dCanvas.setup(settings);

    return dCanvas;
}

if(typeof window === 'object'){
    window.DrawableCanvas = DrawableCanvas;
}
if(typeof module !== 'undefined'){
    module.exports = DrawableCanvas;
}