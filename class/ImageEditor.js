function ImageEditor(settings){
    /*
    SPEC:

    Should allow:
    projects > Layered images
    multiple open images
    multiple layers
    tools
    */

    var editor = {};

    editor.defaults = {
        canvas_width: 100,
        canvas_height: 100
    };
    editor.open_files = [];
    editor.current_file_index = null;

    //Elements
    editor.elements = {
        element: null,
        title: null,
        images_list: null,
        tools: null
    };

    //UI
    editor.ui = {};
    editor.ui_settings = {

        //Tools
        pen: {
            type: "tool",
            image: "",
        },
        eraser: {
            type: "tool",
            image: "",
        },
        pixel: {
            type: "tool",
            image: "",
        },
        color_picker: {
            type: "tool",
            image: "",
        },
        text: {
            type: "tool",
            image: "",
        },
        fill: {
            type: "tool",
            image: "",
        },
        zoom: {
            type: "tool",
            image: "",
        },
        shape: {
            type: "tool",
            image: "",
        },

        //Other
        color: {
            name: "Color",
            description: "Color",
            listeners: {
                click: editor.setColor//??
            }
        },

        text_size: {
            name: "Text size",
            description: "Text size",
            listeners: {
                click: editor.setTextSize//??
            }
        },

        text_font: {
            name: "Font",
            description: "Text font",
            listeners: {
                click: editor.setTextFont//??
            }
        },
        
        file: {
            name: "File",
            description: "",
            listeners: {
                click: editor.openFile//??
            }
        },
        
        save: {
            name: "Save",
            description: "",
            listeners: {
                click: editor.save//??
            }
        },
        
        export: {
            name: "Export",
            description: "",
            listeners: {
                click: editor.exportImage//??
            }
        },
        
        import: {
            name: "Import",
            description: "",
            listeners: {
                click: editor.importImage//??
            }
        }
    };

    //Public functions
    //

    editor.new = function(options){

        //Defaults
        var width = editor.defaults.canvas_width;
        var height = editor.defaults.canvas_height;

        //Options
        if(isObject(options)){
            if(options.width !== undefined){
                width = options.width;
            }
            if(options.height !== undefined){
                height = options.height;
            }
        }

        //Create
        editor.newCanvas(width, height, data);
    };
    editor.open = function(data){};
    editor.close = function(file){};
    editor.click = function(x, y){};
    editor.middleClick = function(){};
    editor.rightClick = function(){};
    editor.wheel = function(){};

    editor.setup = function(settings){

        //Settings
        for(var key in settings){
            editor[key] = settings[key];
        }
        
        //Class
        if(window.DrawableCanvas){
            editor.DrawableCanvas = DrawableCanvas;
        }else{
            alert("Error: No DrawableCanvas");
            return false;
        }

        //Elements
        editor.setupElements();
        editor.updateUI();
    }

    editor.setupElements = function(){
        var els = editor.elements;
        els.element = document.createElement("div");
        els.title = document.createElement("h2");
        els.images_list = document.createElement("ul");
        els.tools = document.createElement("ul");

        els.element.appendChild(els.title);
        els.element.appendChild(els.images_list);
        els.element.appendChild(els.tools);

        if(editor.auto_append){
            editor.append();
        }
    }

    editor.append = function(element){
        if(!element){
            element = document.body;
        }

        element.appendChild(editor.elements.element);
    }

    editor.updateUI = function(){

        //Title
        editor.elements.title.textContent = "";//??

        //Tools
        editor.updateTools();
    }

    editor.updateTools = function(){
        var el = editor.elements.tools;
        var settings = editor.ui_settings;

        //Clear
        editor.ui = {};
        el.innerHTML = "";

        //Add each
        var fSetting;
        var uiSetting;
        var tool;
        var key;
        
        for(var key in settings){

            //fSetting
            fSetting = settings[key];
            if(fSetting.type === "tool"){
                tool = editor.getTool(key);
                if(!tool){
                    continue;
                }
                
                if(tool.name){
                    fSetting.name = tool.name;
                }
                if(tool.description){
                    fSetting.description = tool.description;
                }
            }

            //Set ui internal
            uiSetting = new editor.UISetting(fSetting);
            editor.ui[key] = uiSetting;

            //Set element
            uiSetting.createElement(el);
        }
    }

    editor.getCurentDrawableCanvas = function(){
        var iLayer = editor.getCurrentLayer();
        if(iLayer){
            return iLayer.drawable_canvas;
        }
    }
    
    editor.getCurrentTool = function(){
        var cDrawableCanvas = editor.getCurentDrawableCanvas();
        if(cDrawableCanvas){
            return cDrawableCanvas.getCurrentTool();
        }
    }

    editor.getTool = function(key){
        var cDrawableCanvas = editor.getCurentDrawableCanvas();
        if(cDrawableCanvas){
            return cDrawableCanvas.getTool(key);
        }
    }

    editor.setTool = function(key){
        var cDrawableCanvas = editor.getCurentDrawableCanvas();
        if(cDrawableCanvas){
            return cDrawableCanvas.setTool(key);
        }
    }

    editor.UISetting = function(settings){
        var uiSetting = {};
        uiSetting.name = "";
        uiSetting.description = "";
        uiSetting.image_src = "";
        uiSetting.image = "";
        uiSetting.element = null;
        uiSetting.listeners = {
            click: null
        };
        uiSetting.auto_append = true;

        //Settings
        for(var key in settings){
            uiSetting[key] = settings[key];
        }
        
        uiSetting.append = function(element){
            if(!element){
                element = document.body;
            }
            
            element.appendChild(uiSetting.element);
        }
        
        uiSetting.createElement = function(appendElement){
            uiSetting.element = document.createElement("li");
            uiSetting.element.setAttribute("title", uiSetting.description);
            for(var lKey in uiSetting.listeners){
                uiSetting.element.addEventListener(lKey, uiSetting.listeners[lKey]);
            }
            
            //Auto Append
            if(uiSetting.auto_append){
                uiSetting.append(appendElement);
            }
        }

        return uiSetting;
    }

    editor.addImageProject = function(iProject){
        editor.open_files.push(iProject);

        //??Display etc.
    }
    
    editor.getCurrentLayer = function(){
        var iProject = editor.getCurrentImageProject();
        if(iProject){
            var iLayer = iProject.getCurrentLayer();
            return iLayer;
        }
    }
    
    editor.getCurrentImageProject = function(){
        var index = editor.getCurrentImageProjectIndex();
        if(index >= 0){
            return editor.open_files[index];
        }
    }
    
    editor.getCurrentImageProjectIndex = function(){
        var index = editor.current_file_index;
        return index;
    }

    editor.getImageProjectIndex = function(iProject){
        return editor.open_files.indexOf(iProject);
    }

    editor.removeImageProject = function(iProject){
        var index = editor.getImageProjectIndex(iProject);

        //Remove
        if(index >= 0){

            //Current(Close)
            //??

            editor.open_files.splice(index, 1);
            editor.current_file_index = null;
        }
    }

    editor.exportImage = function(image){
        //??

        editor.exportObject(image);
    }

    editor.importImage = function(image){
        var iProject = new editor.ImageProject(image);
        editor.addImageProject(iProject);
    }

    editor.exportObject = function(obj){
        var str = JSON.stringify(obj);
        alert(str);
    }

    editor.ImageProject = function(settings){
        /*
        SPEC:

        Image project that can be saved at once and edited at once.
        */
        var iProject = {};
        iProject.project_name = "";
        iProject.project_description = "";
        iProject.layers = [];
        iProject.current_layer_index = -1;

        iProject.openFile = function(src){}
        iProject.closeFile = function(src){}
        iProject.close = function(){}
        iProject.save = function(){}
        iProject.delete = function(){}

        iProject.openLayer = function(layer){}
        iProject.openLayers = function(layers){}

        iProject.getCurrentLayer = function(){
            if(iProject.current_layer_index >= 0){
                return iProject.layers[iProject.current_layer_index];
            }
        }
        
        return iProject;
    }

    editor.Image = function(settings){
        /*
        SPEC: Common image.
        */

        var image = {};
        image.mime_type = "";
        image.width = 0;
        image.height = 0;

        //DrawableCanvas class
        image.drawable_canvas = null;
        
        //Data
        image.data = null;
        image.src = "";

        //Thumb data
        image.thumb_data = null;
        image.thumb_src = "";
        
        //Setup classes
        image.drawable_canvas = new DrawableCanvas();

        return image;
    }

    editor.ImageFile = function(settings){
        /*
        SPEC:

        Any image file opened
        */

        var iFile = new editor.Image(settings);

        //File info
        iFile.file = new editor.File();//File object with info

        return iFile;
    }

    editor.ImageLayer = function(settings){
        var iLayer = new editor.ImageFile(settings);
        iLayer.layer = 1;
        iLayer.layer_name = "";
        iLayer.index = 1;
        iLayer.displayed = true;

        iLayer.show = function(){

        }

        iLayer.hide = function(){

        }

        return iLayer;
    }

    editor.File = function(){
        var file = {};
        file.name = "";
        file.description = null;
        file.mime_type = "";
        file.extension = "";

        //Data
        file.data = null;

        //Date
        file.created_date = null;
        file.modified_date = null;

        //User
        file.created_user = null;
        file.modified_user = null;

        return file;
    }

    editor.setup(settings);

    return editor;
}