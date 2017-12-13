function DrawableCanvas(settings){

    /*
    SPEC:

    Abstract drawable class for drawing.
    */

    var dCanvas = {};
    dCanvas.format = "canvas";//svg, dom
    dCanvas.width = 100;
    dCanvas.height = 100;
    dCanvas.background_color = null;//Empty = transparent

    //Flags
    dCanvas.store_states = true;
    dCanvas.allow_interaction = true;
    dCanvas.auto_append = true;

    //State
    dCanvas.states = [];
    dCanvas.current_state_index = null;

    //Imports
    dCanvas.Drawer = Drawer;

    //Action state
    dCanvas.current_state = {
        tool: "pen",
        last_coords: {
            x: 0,
            y: 0
        },
        mouse_down: false
    };

    //Tool for ease of use(Represent listener action)
    dCanvas.tool_settings = {
        pen: {
            name: "Pen",
            description: "Pen",
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    dCanvas.executeAction("drawCircle", [lastCoords.x, lastCoords.y, dCanvas.m().styles.line_width/2]);
                },
                mousemove: function(ev, state, lastCoords){
                    if(state.mouse_down){
                        dCanvas.executeAction("drawLine", [lastCoords.x, lastCoords.y, state.last_coords.x, state.last_coords.y]);
                    }
                }
            }
        },

        eraser: {
            name: "Eraser",
            description: "Eraser",
            listeners: {
                //??
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
                    //Select data
                    //??data.color
                },
                mousemove: function(ev, state, lastCoords){
                    var data = dCanvas.executeAction("getPixelData", [state.last_coords.x, state.last_coords.y]);
                    //Show data
                    //??data.color

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
            description: "",
            listeners: {
                mousedown: function(ev, state, lastCoords){
                    dCanvas.executeAction("fillColorRange", state.last_coords.x, state.last_coords.y);//??
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
        for(var key in settings){
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

    dCanvas.getCanvas = function(){
        //SPEC: Abstract element used for drawing/events

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

    dCanvas.executeAction = function(action, args){
        //Direct action handling

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

    dCanvas.executeTool = function(toolName, listener, args){
        //Abstract drawing through here

        dCanvas.log("executeTool:");
        dCanvas.log(toolName);
        dCanvas.log(listener);
        dCanvas.log(args);

        var manager = dCanvas.manager;
        var returnData = null;

        //Tool
        if(toolName && dCanvas.getTool(toolName)){

            //Execute
            var mArgs = [toolName, listener, args];
            returnData = dCanvas.handleTool.apply(this, mArgs);

            //State
            dCanvas.handleNewState("handleTool", args);
        }

        return returnData;
    }

    dCanvas.setColor = function(){
        //??
    }

    dCanvas.setTextSize = function(){
        //??
    }

    dCanvas.setTextFont = function(){
        //??
    }

    dCanvas.State = function(options){
        /*
        SPEC:

        Represents back/forward state.
        */

        var state = {};
        state.action = null;
        state.args = [];

        for(var key in options){
            state[key] = options[key];
        }

        return state;
    }

    dCanvas.handleNewState = function(action, args){
        /*
        SPEC:

        Lose forwards on new.
        2 ways to save:
        1. Save each separate action(Would require saving all)
        2. Save snapshot(Easier, so use for now)
        */

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
        tSetting.image_src = "";
        tSetting.image = null;
        tSetting.handle = null;

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
    }

    dCanvas.getTools = function(){
        return dCanvas.tool_settings;
    }

    dCanvas.getTool = function(name){
        return dCanvas.tool_settings[name];
    }
    
    dCanvas.getCurrentTool = function(){
        var toolName = dCanvas.current_state.tool;
        return dCanvas.getTool(toolName);
    }
    
    dCanvas.setTool = function(name){
        dCanvas.current_state.tool = name;
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