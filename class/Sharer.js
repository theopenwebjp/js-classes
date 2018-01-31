/**
 * Data sharing handling.
 * @param {*} settings 
 */
function Sharer(settings){
    var sharer = {};
    sharer.sharer_settings = {
        
        //Visual
        barcode: null,
        ar_code: null,
        url_recognizer: null,
        data_recognizer: null,
        
        //Audio
        audio_data: null,
        
        //Wireless
        nfc: null,
        bluetooth: null,
        wifi: null,
        
        //Account
        facebook: null,
        skype: null,
        line: null,
        
        //Other
        infrared: null
    };
    sharer.share_methods = {};
    
    sharer.setup = function(settings){
        
        //Settings
        //
        
        sharer.setupShareMethods();
    }
    
    sharer.setupShareMethods = function(){
        for(var key in sharer.sharer_settings){
            share.setupShareMethod(key, sharer.sharer_settings[key]);
        }
    }
    
    sharer.setupShareMethod = function(key, data){
        sharer.share_methods[key] = new sharer.ShareMethod(data);
    }
    
    sharer.getShareMethod = function(key){
        var methods = sharer.getShareMethods();
        return methods[key];
    }
    
    sharer.getShareMethods = function(){
        var methods = sharer.share_methods;
        return methods;
    }

    sharer.getTypes = function(){
        var types = {
            visual: {},
            audio: {},
            wireless: {},
            account: {},
            other: {}
        };
        
        return types;
    }
    
    sharer.setShareElement = function(el){
        el.addEventListener(sharer.handleShareClick);
    }
    
    sharer.handleShareClick = function(ev){
        sharer.showGroupedData();
    }
    
    sharer.getNewWindow = function(){
        var windowEl = document.createElement("div");
        
        //Style
        var style = windowEl.style;
        style.position = "fixed";
        style.zIndex = "99999";
        style.width = "100%";
        style.height = "100%";
        style.top = 0;
        style.left = 0;
        style.padding = "10px";
        style.backgroundColor = "lightGray";
        style.color = "black";
        
        return windowEl;
    }
    
    sharer.getNewButton = function(){
        var buttonEl = document.createElement("div");
        
        //Style
        var style = buttonEl.style;
        style.border = "1px solid gray";
        style.borderRadius = "3px";
        style.margin = "10px";
        style.padding = "5px";
        style.float = "left";
        style.clear = "both";
        style.backgroundPosition = "center";
        style.backgroundRepeat = "no-repeat";
        style.backgroundSize = "contain";
        
        return buttonEl;
    }
    
    sharer.showWindow = function(el){
        el.display = "block";
        el.visibility = "visibile";
        if(!el.parentElement){
            var pEl = document.body;
            pEl.appendChild(el);
        }
    }
    
    sharer.hideWindow = function(el){
        el.display = "none";
        el.visibility = "hidden";
        if(el.parentElement){
            var pEl = el.parentElement;
            pEl.removeChild(el);
        }
    }
    
    sharer.showGroupedData = function(){
        var gData = sharer.getGroupedData();
        var item;
        var windowEl = sharer.getNewWindow();
        var buttonEl;
        
        for(var key in gData){
            item = gData[key];
            buttonEl = sharer.getNewButton();
            
            //Name
            buttonEl.textContent = item.name;
            
            //Description
            buttonEl.setAttribute("title", item.description);
            
            //Image icon
            if(item.image_src){
                buttonEl.style.backgroundImage = "url('" + item.image_src + "')";
            }
            
            //Listener
            if(item.handle){
                buttonEl.addEventListener("click", item.handle);
            }
            
            windowEl.appendChild(buttonEl);
        }
        
        sharer.showWindow(windowEl);
    }
    
    sharer.getGroupedData = function(){
        var types = sharer.getTypes();
        var gData = {};
        var item;
        
        for(var key in types){
            item = new sharer.GroupedDataItem();
            item.name = key;
            gData[key] = item;
        }
        
        return gData;
    }
    
    sharer.GroupedDataItem = function(){
        var gDataItem = {};
        gDataItem.name = "";
        gDataItem.description = "";
        gDataItem.image_src = "";
        gDataItem.image = null;
        gDataItem.handle = null;
        
        return gDataItem;
    }
    
    sharer.getShareMethodsByType = function(type){
        var methods = sharer.getShareMethodsByAttr("type", type);
        return methods;
    }
    
    sharer.getShareMethodsByAttr = function(attr, value){
        var methods = sharer.getShareMethods();
        var fMethods = {};
        for(var key in methods){
            if(methods[key][attr] === value){
                fMethods[key] = methods[key];
            }
        }
        
        return fMethods;
    }
    
    sharer.ShareMethod = function(settings){
        var sMethod = {};
        sMethod.type = "visual";
        
        //Settings
        //
        
        sMethod.share = function(){}
        
        return sMethod;
    }
    
    sharer.setup(settings);
    
    return sharer;
}