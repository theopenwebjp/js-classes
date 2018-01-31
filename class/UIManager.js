/**
 * UI handling class.
 * Needs fixing??
 * @param {*} settings 
 */
function UIManager(settings){
    var manager = {};
    manager.default_api = "jquery_ui";
    manager.widget_settings = {
        //
    };
    
    manager.setup = function(settings){
        
        //Settings
        //
    }
    
    //Functions
    manager.prompt = function(){
        var data = arguments[0];
        var defaultValue = arguments[1];
        var result = window.prompt(data, defaultValue);
        
        return result;
    }
    
    manager.alert = function(){
        var data = arguments[0];
        window.alert(data);
    }
    
    manager.confirm = function(){
        var data = arguments[0];
        var result = window.confirm(data);
        
        return result;
    }
    
    manager.executeWidget = function(widgetKey, args, settings){
        var w = manager.widgets;
        return new w[widgetKey].apply
    }
    
    //Widgets
    manager.widgets = {
        Accordion: function(){

        },

        Button: function(){
            
        },

        DatePicker: function(){

        },
        
        Menu: function(){

        },
        
        ProgressBar: function(){
            
        },
        
        SelectMenu: function(){
            
        },
        
        Slider: function(){
            
        },
        
        Spinner: function(){
            
        },
        
        Tabs: function(){
            
        },
        
        Tooltip: function(){
            
        }
    };
    
    manager.setup(settings);
    
    return manager;
}