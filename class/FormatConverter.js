var FormatConverter = function(formats, settings){
  /*
  Abstract class for converting anything.
  */
  var converter = {};
  
  converter.settings = {
    maxDepth: 5
  };
  converter.formats = [];
  
  converter.Format = function(){
    return {
      id: "",
      name: "",
      extension: "",
      mimeType: {
        main: "",
        sub: ""
      },
      converters: []
    };
  }
  
  converter.Converter = function(){
    return {
      targetId: "",
      handle: function(data){
        return new Promise(function(resolve, reject){
          //convert here
          resolve(data);
        });;
      }
    }
  }
  
  converter.setup = function(formats, settings){
    if(formats){
      converter.formats = formats;
    }
    
    if(settings){
      converter.settings = settings;
    }
  }
  
  converter.getFormat = function(id){
    //Default lookup method
    return converter.getFormatByAttribute("id", id);
  }
  
  converter.getFormatByAttribute = function(attr, val){
    var f = converter.formats;
    for(var i=0; i<f.length; i++){
      if(f[i][attr] === val){
        return f[i];
      }
    }
    
    return null;
  }
  
  converter.getFormatIds = function(){
    return converter.getFormatAttributes("id");
  }
  
  converter.getFormatAttributes = function(attr){
    var attributes = [];
    
    var f = converter.formats;
    for(var i=0; i<f.length; i++){
      attributes.push(f[i][attr]);
    }
    
    return attributes;
  }
  
  converter.convert = function(data, fromId, toId, callback){
    var path = converter.getBestConversionPath(fromId, toId);
    //??id path to converters path
    var promises = [];
    for(var i=0; i<path.length; i++){
      promises.push(converter.executeConverter(path[i]));
    }
    
    Promise.all(promises).then(function(convertedData){
      callback(convertedData);
    }).catch(err){
      console.error(err);
    }
  }
  
  converter.executeConverter = function(converter){
    return converter.handle();
  }
  
  converter.getBestConversionPath = function(fromId, toId){
    var paths = converter.getConversionPaths(fromId, toId);
    var chosenPath = null;
    for(var i=0; i<paths.length; i++){
      if(chosenPath === null || paths[i].length < chosenPath.length){
        chosenPath = paths[i];
      }
    }
    
    return chosenPath;
  }
  
  converter.getConversionIdConnections = function(){
    var connections = [];
    
    var f = converter.formats;
    var i, j;
    for(i=0; i<f.length; i++){
      for(j=0; j<f[i].converters.length; j++){
        connections.push( [f[i].id, f[i].converters[j].id] );
      }
    }
    
    return connections;
  }
  
  converter.getConversionPaths = function(fromId, toId){
    /*
    1. Never go back to same node
    2. Max depth needed in case many paths likely.
    */
    
    var connections = converter.getConversionIdConnections();
    var paths = converter.getPaths(fromId, toId, connections, maxDepth);
    
    return paths;
  }
  
  converter.getPaths = function(fromNode, toNode, connections, maxDepth){
    /*
    fromNode AND toNode ARE ABSTRACT NODES. ONLY EQUALITY CHECK IMPORTANT.
    connections: [[nodeA, nodeB], ...]
    */
    
    //Create objects
    var objList = [];
    loopObject(connections, function(obj, key, val){
      if(objList.indexOf(val) < 0){objList.push(val);}
    });
    
    //??
  }
  
  converter.setup(formats, settings);
  
  return converter;
}