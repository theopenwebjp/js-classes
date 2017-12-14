/**
 * Class for canvas drawing.
 * No UI should be handled here.
 * Allows for drawing with any implementation desired(Canvas, SVG, etc.)
 * 
 * @param {Object} settings 
 */
function Drawer(settings){

    var drawer = {};
    drawer.format = null;

    drawer.handleStartup = function(settings){

        //Settings
        for(var key in settings){
            drawer[key] = settings[key];
        }

        //Abstract here
        if(drawer.format === "svg"){
            drawer.manager = new drawer.SVGManager();
        }else if(drawer.format === "dom"){
            drawer.manager = new drawer.DOMManager();
        }else{
            drawer.manager = new drawer.CanvasDrawer();
        }
        
        //Allows for direct manager returning
        return drawer.manager;
    }
    
    drawer.convertDrawer = function(data, fromFormat, toFormat){
        /*
        SPEC:
        
        Implement if desired.
        SVG/Canvas conversions useful for non-js exporting/importing.
        */
        
        //Same
        if(fromFormat === toFormat){
            return data;
        }
        
        //
    }

    drawer.CommonDrawer = function(settings){
        var manager = {};
        manager.element = null;
        manager.fill = false;

        //Resettable styles
        manager.default_styles = {                        
            fill_style: "#000",
            font: "10px sans-serif",
            text_align: "start",
            text_base_line: "alphabetics",
            direction: "inherit",
            line_width: 1,
            line_cap: "butt",
            line_join: "miter",
            mite_limit: 10,
            line_dash_offset: 0,
            shadow_blur: 0,
            shadow_color: "fully-transparent black",
            shadow_offset_x: 0,
            shadow_offset_y: 0,
            global_alpha: 1,//Opaque
            global_composite_operation: false,
            image_smoothing_enabled: false
        };
        
        manager.styles = {
            //
        };

        manager.setup = function(){
            manager.setupStyles();
        }

        manager.setupStyles = function(){
            
            //Reset
            manager.resetStyles();
        }

        manager.executeAction = function(action, args, options){
            /*
            SPEC:

            Allows for string based action.
            Allows for action with options.
            Allows for one action style setting.
            */

            console.log("executeAction:");
            console.log(action);
            console.log(args);

            //Defaults
            var styles = null;

            //Options
            if(options){
                if(options.styles){
                    styles = options.styles;   
                }
            }

            //Set styles
            if(styles){
                manager.setStyles(styles);
            }

            //Action
            manager[action].apply(this, args);

            //Reset styles
            if(styles){
                manager.resetStyles();
            }
        }

        manager.setStyles = function(styles, format){
            /*
            SPEC:
            
            Set as setting.
            format: hyphen/camel_case
            */
            
            var keyFormat = "hyphen";
            if(format){
                keyFormat = format;
            }
            
            //Set
            var fKey;
            for(var key in styles){
                if(keyFormat === "camel_case"){//uncamelize
                    fKey = manager.unCamelize(key);
                }else{
                    fKey = key;
                }
                
                //Set
                if(manager.styles[fKey] !== undefined){
                    manager.styles[fKey] = styles[key];
                }
            }
            
            //Apply
            manager.applyStyles(manager.styles);
        }

        manager.resetStyles = function(){
            manager.setStyles(manager.default_styles);
        }
        
        manager.applyStyles = function(styles){
            //Sets to canvas context if required
            //
        }
        
        manager.camelize = function(text){
            var returnText = "";
            var del = "-";
            var words = text.split(del);
            var w;
            
            for(var i=0; i<words.length; i++){
                w = words[i];
                if(i !== 0){
                    returnText+= (w[0].toUpperCase() + w.substr(1));
                }else{
                    returnText+= w;
                }
            }
            
            return returnText;
        }
        
        manager.unCamelize = function(text){
            var returnText = "";
            var del = "";
            var char;
            
            for(var i=0; i<text.length; i++){
                char = text[i];
                
                //Camel upper
                if(
                    char === char.toUpperCase() &&
                    char !== char.toLowerCase()
                ){
                    returnText+= (del + char);
                }
                
                //Lower
                else{
                    returnText+= char;
                }
            }
            
            return returnText;
        }

        manager.getSnapshot = function(){
            //Full image
            //
        }

        manager.applySnapshot = function(){
            //Full Image
            //
        }

        manager.drawText = function(str, x, y, maxWidth){
            //
        }

        manager.clearCanvas = function(){
            //
        }

        manager.drawImage = function(img, x, y, width, height){
            //
        }

        manager.drawPixel = function(x, y){
            //
        }

        manager.drawRectangle = function(x, y, width, height){
            //
        }

        manager.drawCircle = function(x, y, radius){
            //
        }

        manager.drawArc = function(x, y, radius, startAngle, endAngle, antiClockwise){
            //
        }

        manager.drawLine = function(x1, x2, y1, y2){
            //
        }
        
        manager.getPixelData = function(x, y){
            //
        }
        
        manager.convertByteToHex = function(byte){
            var BASE = 16;
            var HEX_BYTE_LENGTH = 2;

            //Get hex
            var hex = (byte).toString(BASE);

            //Pad hex
            var pad = "0";
            while(hex.length < HEX_BYTE_LENGTH){
                hex = pad + hex;
            }

            return hex;
        }
        
        manager.PixelData = function(options){
            var pData = {};
            pData.x = null;
            pData.y = null;
            pData.color = null;
            
            for(var key in options){
                pData[key] = options[key];
            }
            
            return pData
        }

        return manager;
    }

    drawer.CanvasDrawer = function(settings){
        /*
        SPEC:
        
        IE9+
        */
        var manager = new drawer.CommonDrawer(settings);
        manager.canvas = document.createElement("canvas");
        manager.element = manager.canvas;
        manager.context = manager.canvas.getContext("2d");
        manager.CIRCLE_ANGLE = 2 * Math.PI;

        manager.applyStyles = function(styles){
            var fKey;
            for(var styleKey in styles){
                fKey = manager.camelize(styleKey);//Camelize
                
                //Add
                if(manager.context[fKey] !== undefined){
                    manager.context[fKey] = styles[styleKey];
                }
            }
        }
        
        manager.getSnapshot = function(){
            var nCanvas = document.createElement("canvas");
            nCanvas.width = manager.canvas.width;
            nCanvas.height = manager.canvas.height;
            manager.drawImage(manager.canvas, 0, 0, nCanvas.width, nCanvas.height);

            return manager;
        }

        manager.applySnapshot = function(img){
            var width = manager.canvas.width;
            var height = manager.canvas.height;

            manager.drawImage(img, 0, 0, width, height);

            return manager;
        }

        manager.drawText = function(str, x, y, maxWidth){
            manager.context.strokeText(str, x, y, maxWidth);

            return manager;
        }

        manager.clearCanvas = function(){
            var width = manager.canvas.width;
            var height = manager.canvas.height;

            manager.context.clearRect(0, 0, width, height);

            return manager;
        }

        manager.drawImage = function(img, x, y, width, height){
            /*
            SPEC:

            void ctx.drawImage(image, dx, dy);
            void ctx.drawImage(image, dx, dy, dWidth, dHeight);
            void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            */

            manager.context.drawImage(img, x, y, width, height);

            return manager;
        }

        manager.drawPixel = function(x, y){
            manager.context.rect(x, y, 1, 1);
            manager.context.stroke();

            return manager;
        }

        manager.drawRectangle = function(x, y, width, height){
            manager.context.rect(x, y, width, height);
            manager.context.stroke();

            return manager;
        }

        manager.drawCircle = function(x, y, radius){
            manager.drawArc(x, y, radius, 0, manager.CIRCLE_ANGLE);

            return manager;
        }

        manager.drawArc = function(x, y, radius, startAngle, endAngle, antiClockwise){
            manager.context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
            manager.context.stroke();

            return manager;
        }

        manager.drawLine = function(x1, y1, x2, y2){
            manager.context.beginPath();
            manager.context.moveTo(x1, y1);
            manager.context.lineTo(x2, y2);
            manager.context.stroke();
            manager.context.closePath();

            return manager;
        }
        
        manager.getPixelData = function(x, y){
            var width = 1;
            var height = 1;
            
            var d = manager.context.getImageData(x, y, width, height);
            
            //Each color
            var h = manager.convertByteToHex;
            
            var hex = "#";
            hex+= h(d[0]);
            hex+= h(d[1]);
            hex+= h(d[2]);
            hex+= h(d[3]);
            
            var pixelData = new manager.PixelData({
                x: x,
                y: y,
                color: hex
            });
            
            return pixelData;
        }

        return manager;
    }

    drawer.SVGManager = function(){
        /*
        SPEC:
        
        IE 9+
        Android 3+
        */
        
        var manager = new drawer.CommonDrawer();

        return manager;
    }

    drawer.DOMManager = function(){
        var manager = new drawer.CommonDrawer();

        return manager;
    }

    return drawer.handleStartup(settings);
}

if(typeof module !== 'undefined'){
    module.exports = Drawer;
}