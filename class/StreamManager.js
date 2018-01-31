/**
 * Stream functions.
 * Should change so is StreamHelper and is static.
 */
function StreamManager(){
  var sManager = {};
  sManager.streams = [];//Storing   //??Should not be stored here, instead create object for storing and handling from here. 
  
  sManager.StreamError = function(){
    return {
      isError: true,
      error: ""
    }
  }
  
  sManager.StreamObject = function(){//Connection between stream, video and url due to revoking and updating.
    return {
      stream: null,
      object_url: null,
      video: null
    };
  }
  
  sManager.setup = function(){
    navigator.getUserMedia = (
      navigator.getUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.webkitGetUserMedia
    );
  }
  
  sManager.webcamToElement = function(constraints, element, callback){
    //Quick method to get webcam and show in element
    
    sManager.getUserMedia(function(data){
      
      if(!data || data.isError){
        if(callback){callback(data);}
        return false;
      }else{
        var stream = data;
      }
      
      var streamObj = sManager.handleCameraStream(stream);
      
      if(!element){element = document.body;}
      element.appendChild(streamObj.video);
      
      if(callback){callback(streamObj);}
      
    }, constraints);
  }
  
  sManager.getUserMediaWithWorkingConstraints = function(constraints, onSuccess, onError){
    /*
    Falls back to simpler constraints on fail.
    Safe => Not safe
    1. {video: true, audio: false} OR {video: false, audio: true}
    2. {video: true, audio: true}
    3. {video: {...}, audio: {...}
    */
    
    var onErrorHandle = function(err){
      var isError = false;
      
      if(typeof constraints.video === "object"){constraints.video = true;}//1 video most important
      else if(typeof constraints.audio === "object"){constraints.audio = true;}//2
      else if(constraints.video === true && constraints.audio === true){constraints.audio = false;}//3 no audio sometimes causes errors
      else{
        isError = true;
      }
      
      if(isError){
        onError(err);
      }
      
      else{
        navigator.getUserMedia(constraints, onSuccess, onErrorHandle);
      }
    };
    
    navigator.getUserMedia(constraints, onSuccess, onErrorHandle);
  }
  
  sManager.getUserMedia = function(callback, constraints){
    //Be careful of argument order change: navigator.getUserMedia(constraints, onSuccess, onError)
    //Order changed due to constraints being optional
    
    if(!constraints){
      constraints = {
        video: true,
        audio: true
      };
    }

    var onSuccess = function(stream){
      callback(stream);
    }

    var onError = function(err){
      log(err);
      
      var error = sManager.StreamError();
      error.error = err;
      
      callback(error);
    }

    return navigator.getUserMedia(constraints, onSuccess, onError);
  }
  
  sManager.handleCameraStream = function(stream, object){
    if(!stream){return false;}
    
    var o = object;
    if(!o){o = sManager.StreamObject();}
    
    //Set
    o.stream = stream;

    //URL
    o.object_url = window.URL.createObjectURL(o.stream);

    //Video
    o.video = document.createElement("video");
    o.video.autoplay = true;
    o.video.src = o.object_url;
    
    return o;
  }

  sManager.stopCameraStreamObject = function(o){

    //Stop Stream
    sManager.stopCameraStream(o.stream);

    //Destroy video
    if(o.video){
      o.video.src = "";
      if(o.video.parentElement){
        o.video.parentElement.removeChild(o.video);
      }
    }

    //Revoke URL
    if(o.object_url){
        window.URL.revokeObjectURL(o.object_url);
    }

    //Nullify
    o.stream = null;
    o.video = null;
    o.object_url = null;
  }

  sManager.stopCameraStream = function(stream){
    if(stream){
        return false;
    }

    //Stop tracks
    var tracks = sManager.getStreamTracks(stream);
    for(var i=0; i<tracks.length; i++){
        if(tracks[i].stop){
            tracks[i].stop();
        }
    }
  }

  sManager.getStreamTracks = function(stream){
    if(stream.getTracks){
        return stream.getTracks();
    }else{
        return [];
    }
  }  
  
  sManager.addStream = function(stream){
      sManager.streams.push(stream);
  }

  sManager.removeStream = function(stream){
      var index = sManager.getStreamIndex(stream);
      if(index >= 0){
          sManager.streams.splice(index, 1);
      }
  }

  sManager.getStreamIndex = function(stream){
      return sManager.streams.indexOf(stream);
  }

  sManager.streamToCanvasRenderer = function(stream, updateRate){
      //Abstract here

      var settings = {
          renderable: stream,
          rate: updateRate
      };

      var cRender = new (new CanvasManager()).CanvasRenderer(settings);
      return cRender;
  }

  sManager.getTracks = function(stream){
      return stream.getTracks();
  }

  sManager.getTracksByType = function(stream, type){
      return sManager.getTracksByAttribute(stream, "kind", type);
  }

  sManager.getTracksByStatus = function(stream, status){
      /*
      SPEC: 

      Enabled/Disabled:
      enabled = true
      muted = false
      */

      var tracks = sManager.getTracks(stream);
      var fTracks = [];
      var track;

      for(var i=0; i<tracks.length; i++){
          track = tracks[i];

          //Enabled
          if(track.enabled !== undefined && track.enabled !== status){
              continue;
          }

          //ReadyState
          if(
              track.readyState !== undefined && 
              (
                  (track.readyState === "live" && !status) ||
                  (track.readyState === "ended" && status)
              )
          ){
              continue;
          }

          //Muted
          if(track.muted !== undefined && track.muted !== !status){
              continue;
          }
      }

      return fTracks;
  }

  sManager.getTracksByAttribute = function(stream, attr, value){
      var tracks = sManager.getTracks(stream);
      var fTracks = [];
      var track;

      for(var i=0; i<tracks.length; i++){
          track = tracks[i];
          if(track[attr] === value){
              fTracks.push(track);
          }
      }

      return fTracks;
  }

  sManager.TrackManager = function(){
      var tManager = {};
      tManager.tracks = [];//Storing

      tManager.addTrack = function(track){
          tManager.tracks.push(track);
      }

      tManager.removeTrack = function(track){
          var index = tManager.getStreamIndex(track);
          if(index >= 0){
              tManager.tracks.splice(index, 1);
          }
      }

      tManager.getTrackIndex = function(track){
          return tManager.tracks.indexOf(track);
      }

      tManager.trackToStream = function(track){
          //SPEC: Creates stream with tracks added

          var stream = new MediaStream();
          stream.addTrack(track);

          return stream;
      }

      tManager.startRecordingTrack = function(track, dataHandle){
          //Should be abstract

          var stream = tManager.trackToStream(track);

          //Record stream
          return sManager.startRecordingStream(stream, dataHandle);
      }

      return tManager;
  }

  sManager.startRecordingStream = function(stream, dataHandle, options){
      //Should be abstract

      var recorder = window.MediaRecorder(stream, options);
      recorder.ondataavailable = dataHandle;
      recorder.start();
      return recorder;
  }

  sManager.stopRecordingStream = function(recorder){
      recorder.stop();
  }
  
  sManager.setup();

  return sManager;
}