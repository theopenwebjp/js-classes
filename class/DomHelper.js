const {Utility} = require('js-functions');

var DomHelper = function(){
  var manager = {};
  
  manager.createClass = function(type, options){
    var obj = manager[type]();
    for(var key in options){
      obj[key] = Utility.copyVariable(options[key]);
    }
    
    return obj;
  }
  
  manager.DomElementSettings = function(){
    var settings = {
      tag: "",
      children: [],//Allows nested
      attributes: {},
      textContent: "",
      innerHTML: "",
      events: {}
    };
    
    return settings;
  }
  
  manager.ChildrenSettings = function(){
    //Settings for lists
    var settings = {
      replacements: {},//key: function(item, key){return replacement;}
      format: manager.DomElementSettings(),
      items: []
    };
    
    return settings;
  }
  
  /*public*/
  manager.createElements = function(settingsArr, defaults){
    var elements = settingsArr.map(function(settings){
      if(defaults){settings = combineObjects([settingsArr, defaults]);}
      
      return manager.createElement(settings);
    });
    return elements;
  }
  
  /*public*/
  manager.createElement = function(settings){
    settings = manager.createClass("DomElementSettings", settings);
    var el = document.createElement(settings.tag);
    manager.setAttributes(el, settings.attributes);
    manager._setEvents(el, settings.events);
    
    //Nesting
    if(settings.children.length > 0){
      manager._setChildren(el, settings.children);
    }else if(settings.innerHTML !== ""){
      el.innerHTML = settings.innerHTML;
    }else{
      el.textContent = settings.textContent;
    }
    
    return el;
  }
  
  /*public*/
  manager.setChildrenSettings = function(settings, childrenSettings){
    //Helper for applying array of items to element settings.
    childrenSettings = manager.createClass("ChildrenSettings", childrenSettings);
    settings.children = manager._handleChildrenReplacements(childrenSettings);
    return settings.children;
  }
  
  /*public*/
  manager.createTable = function(rows){
    var table = document.createElement("table");
    var cols;
    var tr, td;
    var i, j;
    
    for(i=0; i<rows.length; i++){
      tr = document.createElement("tr");
      cols = rows[i];
      
      for(j=0; j<cols.length; j++){
        td = document.createElement("td");
        td.innerHTML = cols[j];
        
        tr.appendChild(td);
      }
      
      table.appendChild(tr);
    }
    
    return table;
  }
  
  /*public*/
  manager.createElementList = function(nameValues){
    var list = nameValues.map(function(nameValue){
      var elementSettings = nameValue.value;
      
      //Element
      var el = manager.createElement(elementSettings);
      
      return {
        name: nameValue.name,
        value: el
      };
    });
    
    return manager.createCommonList(list);
  }
  
  /*public*/
  manager.createKeyValueList = function(obj){
    //key: val => int: {name, value}
    var list = [];
    
    for(var key in obj){
      list.push({
        name: key,
        value: obj[key]
      });
    }
    
    return manager.createCommonList(list);
  }
  
  /*public*/
  manager.createList = function(arr){
    var ul = document.createElement("ul");
    var li;
    
    for(var i=0; i<arr.length; i++){
      li = document.createElement("li");
      
      //DOM
      if(typeof arr[i] === "object" && arr[i].nodeType){
        li.appendChild(arr[i]);
      }else{
        li.innerHTML = String(arr[i]);
      }
      
      ul.appendChild(li);
    }
    
    return ul;
  }
  
  /*public*/
  manager.createHeadedArrayElement = function(handle, headerText, arr){
    /*
    HEADER
    name: value
    ...
    
    <div>
      <h3>header</h3>
      ARRAY ELEMENT
    </div>
    */
    
    if(!handle){handle = function(arr){return arr;};}
    
    var div = document.createElement("div");
    
    var header = document.createElement("h3");
    header.textContent = headerText;
    header.style.textAlign = "center";
    div.appendChild(header);
    
    var arrElement = handle(arr);
    div.appendChild(arrElement);
    
    return div;
  }
  
  /*public*/
  manager.createHeadedTable = function(header, arr){
    return manager.createHeadedArrayElement(manager.createTable, header, arr);
  }
  
  /*public*/
  manager.createHeadedList = function(header, arr){
    return manager.createHeadedArrayElement(manager.createList, header, arr);
  }
  
  /*public*/
  manager.createHeadedKeyValueList = function(header, obj){
    return manager.createHeadedArrayElement(manager.createKeyValueList, header, obj);
  }
  
  /*public*/
  manager.setupMenuList = function(parentEl, settings){
    /*
    <ul>
      <li><a>HEADER</a></li>
      <ul>...</ul>
    </ul>
    */
    
    var items = settings.items;
    
    var li, a, item;
    
    //Wrapper
    var ul;
    if(settings.element){
      ul = settings.element;
      ul.innerHTML = "";
    }else{
      ul = document.createElement("ul");
    }
    
    //On hover
    if(settings.isChild){
      parentEl.addEventListener("mouseover", function(){
        ul.style.display = "block";
      });
      parentEl.addEventListener("mouseout", function(){
        ul.style.display = "none";
      });
    }
    
    //Options
    if(settings.hide){
      ul.style.display = "none";
    }
    
    //Header
    if(settings.header){
      var headerEl = document.createElement("a");
      if(settings.header.text){
        headerEl.textContent = settings.header.text;
      }
      if(settings.header.id){
        headerEl.setAttribute("id", settings.header.id);
      }
      parentEl.appendChild(headerEl);
    }
    
    //Items
    for(var i=0; i<items.length; i++){
      item = items[i];
      /*
      type
      click
      text
      id
      */
      
      li = document.createElement("li");
      a = document.createElement("a");
      
      //Text
      if(item.text){
        a.textContent = item.text;
      }
      
      //Id
      if(item.id){
        li.setAttribute("id", item.id);
        a.setAttribute("id", item.id + "_a");
      }
      
      //Class
      if(item.class){
        li.setAttribute("class", item.class);
      }
      
      //Event
      if(item.type === "file"){
        setClickFileHandler(a, item.click);
      }else{
        a.addEventListener("click", item.click);
      }
      
      //Orientation
      if(settings.orientation === "vertical"){
        li.style.display = "block";
        li.style.clear = "both";
      }else{
        li.style.display = "block";
        li.style.float = "left";
      }
      
      if(!item.empty){
        li.appendChild(a);
      }
      
      ul.appendChild(li);
    }
    
    if(!settings.element){
      parentEl.appendChild(ul);
    }
    
    return ul;
  }
  
  /*public*/
  manager.createBreadcrumbList = function(links, separator){
    if(!separator){separator = " > ";}
    
    var list = document.createElement("span"); var link, span, a;
    for(var i=0; i<links.length; i++){
      link = links[i];
      
      //Separator
      if(i > 0){
        span = document.createElement("span");
        span.textContent = separator;
        list.appendChild(span);
      }
      
      span = document.createElement("span");
      
      //Simple link
      if(typeof link === "string"){
        link = {
          text: link,
          url: ""
        };
      }
      
      if(link.url){
        a = document.createElement("a");
        a.setAttribute("href", link.url);
        a.textContent = link.text;
        span.appendChild(a);
      }else{
        span.textContent = link.text;
      }
      
      list.appendChild(span);
    }
    
    return list;
  }
  
  /*public*/
  manager.groupify = function(nameValues){
    var wrapper = document.createElement("div");
    var el;
    
    for(var i=0; i<nameValues.length; i++){
      el = manager.createHeadedArrayElement(null, nameValues.name, nameValues.value);
      wrapper.appendChild(el);
    }
    
    return wrapper;
  }
  
  /*public*/
  manager.clearForm = function(form){
    console.log("clearForm", form);
    var elements = form.elements;
    form.reset();

    var type;
    /*
    Input:
    https://html.spec.whatwg.org/multipage/input.html#the-input-element
    table id=attr-input-type-keywords
    
    Select:
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/type
    https://html.spec.whatwg.org/multipage/form-elements.html#dom-select-type
    
    Textarea:
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement
    https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
    */
    for(var i=0; i<elements.length; i++) {

    type = elements[i].type.toLowerCase();

      switch(type) {

        case "text":
        case "password":
        case "textarea":
        case "hidden":
          
          elements[i].value = "";
          elements[i].defaultValue = "";
          break;

        case "radio":
        case "checkbox":
          if(elements[i].checked){
            elements[i].checked = false;
          }
          break;

        case "select-one":
        case "select-multi":
            elements[i].selectedIndex = -1;
          break;

        default:
          break;
      }
    }
  }
  
  manager._setEvents = function(el, events){
    var event;
    for(var key in events){
      event = events[key];
      
      //String = DOM attribute based event
      if(typeof event === "string"){
        el.setAttribute("on" + key, event);
      }else{
        el.addEventListener(key, event);
      }
    }
  }
  
  manager._setChildren = function(el, settingsArr){
    var children = [];
    for(var i=0; i<settingsArr.length; i++){
      children.push (manager.createElement(settingsArr[i]));
    }
    
    manager.appendChildren(el, children);
    
    return el;
  }
  
  manager._handleChildrenReplacements = function(childrenSettings){
    var items = childrenSettings.items;
    var children = [];
    
    var i;
    for(i=0; i<items.length; i++){
      item = items[i];
      children.push( manager._handleChildReplacements(item, childrenSettings.format, childrenSettings.replacements) );
    }
    
    return children;
  }
  
  manager._handleChildReplacements = function(item, format, replacements){
    var childSettings;
    var item;
    var i, key;
    
    childSettings = manager.createClass("DomElementSettings", format);//New child setting.
    childSettings.children = [];//Initialize because overwritten by format replacements.
    
    //Replaceable: tag, attribute values, textContent, innerHTML
    manager._applyObjectReplacement(childSettings, item, "tag", replacements);
    manager._applyObjectReplacement(childSettings, item, "textContent", replacements);
    manager._applyObjectReplacement(childSettings, item, "innerHTML", replacements);

    for(key in childSettings.attributes){
      manager._applyObjectReplacement(childSettings.attributes, item, key, replacements);
    }

    if(format.children){
      var cVal;
      for(i=0; i<format.children.length; i++){
        cVal = manager._handleChildReplacements(item, format.children[i], replacements);
        childSettings.children.push( cVal );
      }
    }
    
    return childSettings;
  }
  
  manager._applyObjectReplacement = function(obj, item, elementPropKey, replacements){
    for(var key in replacements){
      if(obj[elementPropKey] === key){
        obj[elementPropKey] = replacements[key](item, key);
      }
    }
  }
  
  manager.appendChildren = function(el, children){
    for(var i=0; i<children.length; i++){
      el.appendChild(children[i]);
    }
  }
  
  manager.setAttributes = function(el, attributes){
    for(var key in attributes){
      el.setAttribute(key, attributes[key]);
    }
  }
  
  manager.NameValue = function(){
    return {
      name: "",
      value: ""
    };
  }
  
  manager.createCommonList = function(arr){
    /*
    DOM list with name value pairs.
    Common in Android settings pages.
    */
    var list = [];
    var cur, curVal, item, span;
    
    for(var i=0; i<arr.length; i++){
      cur = arr[i];
      curVal = cur.value;
      
      item = document.createElement("span");
      
      span = document.createElement("span");
      span.textContent = cur.name + ": ";
      item.appendChild(span);
      
      span = document.createElement("span");
      if(typeof curVal === "object" && curVal.nodeType){
        span.appendChild(curVal);
      }else{
        span.textContent = curVal;
      }
      item.appendChild(span);
      
      list.push(item);
    }
    
    return manager.createList(list);
  }
  
  manager.FormOptions = function(){
    return {
      method: "POST",
      action: "",//url OR function
      controls: {
        reset: true,
        submit: true
      }
    };
  }
  
  manager.formify = function(el, options){
    
    //Options
    var fOptions = manager.FormOptions();
    if(options){
      for(var key in options){
        fOptions[key] = options[key];
      }
    }
    options = fOptions;
    
    var div, input, button;
    
    //Wrap
    var form = document.createElement("form");
    form.appendChild(el);
    
    //Method
    form.setAttribute("method", options.method);
    
    //Action
    if(options.action){
      if(typeof options.action === "function"){
        form.addEventListener("submit", function(ev){
          options.action(ev);
          
          ev.preventDefault();
          return false;
        });
      }else{
        form.setAttribute("action", options.action);
      }
    }
    
    //Controls
    if(options.controls){
      div = document.createElement("div");
      
      //Reset
      if(options.controls.reset){
        input = document.createElement("input");
        input.setAttribute("type", "reset");
        input.setAttribute("value", "Reset");
        input.addEventListener("click", function(ev){
          manager.clearForm(form);
          
          ev.preventDefault();
          return false;
        });
        div.appendChild(input);
      }

      //Submit
      if(options.controls.submit){
        input = document.createElement("input");
        input.setAttribute("type", "submit");
        input.setAttribute("value", "Submit");
        div.appendChild(input);
      }
      
      form.appendChild(div);
    }window.f = form;
    
    return form;
    
  }
  
  manager.getElementScreenDimensions = function(el){
    return el.getBoundingClientRect();
  }
  
  manager.getElementPageDimensions = function(el){
    var rect = copyObjectData(el.getBoundingClientRect());
    rect.top = rect.top + pageYOffset;
    rect.left = rect.left + pageXOffset;
    rect.bottom = rect.top + rect.height;
    rect.right = rect.left + rect.width;
    
    return rect;
  }
  
  manager.setStylePosition = function(el, position){console.log(el,position);
    var allowed = ["top", "right", "bottom", "left"];
    return manager.setStyleMeasurements(el, position, allowed);
  }
  
  manager.setStyleDimensions = function(el, obj){
    var allowed = ["top", "right", "bottom", "left", "width", "height"];
    return manager.setStyleMeasurements(el, dimensions, allowed);
  }
  
  manager.setStyleMeasurements = function(el, obj, allowed, unit){
    if(!unit){unit = "px";}
    var s = el.style;
    for(var key in obj){
      if(obj[key] === null){continue;}
      
      if(!allowed || allowed.indexOf(key) >= 0){
        s[key] = obj[key] + unit;
      }
    }
  }
  
  manager.applyMarginsToDimensions = function(margins, dimensions){
    var allowedMargins = ["top", "left"];
    for(var key in margins){
      if(allowedMargins.indexOf(key) >= 0 && exists(margins[key])){
        dimensions+= margins[key];
      }
    }
  }
  
  manager.displayElementAtScreenDimensions = function(el, dimensions, isContinuous){
    
    //Must be added to DOM
    if(!el.parentElement){
      document.body.appendChild(el);
    }
    
    var position = "fixed";
    
    //Dimensions
    el.style.position = position;
    manager.setStylePosition(el, dimensions);
    
    //Continuous
    var handle = function(){ 
      if(!el.parentElement){window.removeEventListener("scroll", handle);}else{
        manager.displayElementAtScreenDimensions(el, dimensions);
      }
    }
    window.addEventListener('scroll', handle, true);
    
    return el;
  }
  
  manager.displayElementAtPageDimensions = function(el, dimensions){
    
    //Must be added to DOM body
    if(el.parentElement !== document.body){
      if(el.parentElement){el.parentElement.removeChild(el);}
      
      document.body.appendChild(el);
    }
    
    var position = "absolute";
    
    //Dimensions
    el.style.position = position;
    manager.setStylePosition(el, dimensions);
    
    return el;
  }
  
  manager.showAboveElement = function(shownElement, targetElement, options){
    if(!options){
      options = {//Margins
        top: null,
        left: null
      };
    }
    
    //Shown element required css
    shownElement.style.position = "fixed";
    
    //Dimensions
    var dimensions = manager.getElementPageDimensions(targetElement);console.log(dimensions);
    manager.applyMarginsToDimensions(options, dimensions);console.log(dimensions);
    
    //Display
    return manager.displayElementAtPageDimensions(shownElement, dimensions);
  }
  
  manager.watchDocumentSizeChanges = function(element, handle){
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    document.addEventListener('DOMSubtreeModified', function() {
      if(element.offsetHeight != height || element.offsetWidth != width) {
        handle(element);
      }
    });
  }
  
  manager.startWatchingHtmlElementListenerChanges = function(eventName, handle){
    var p = HTMLElement.prototype;
    
    if(!p.__listenerChangeHandles){
      p.__listenerChangeHandles = {};
      
      p.__handleEvent = function(type, args){
        var prefix = "__";
        var listenerKey = ((type === "add") ? "addEventListener" : "removeEventListener");
        var oldListenerKey = prefix + listenerKey;
        var eventName = args[0];

        var handles = p.__listenerChangeHandles[eventName];
        for(var i=0; i<handles.length; i++){
          p[oldListenerKey].apply(this, args);
        }
      }

      p.__addEventListener = p.addEventListener;
      p.addEventListener = function(eventName, handler, bubbling){
        var type = "add";
        return p.__handleEvent.apply(this, [type, arguments]);
      }

      p.__removeEventListener = p.removeEventListener;
      p.removeEventListener = function(eventName, handler, bubbling){
        var type = "remove";
        return p.__handleEvent.apply(this, [type, arguments]);
      }
    }
    
    if(!p.__listenerChangeHandles[eventName]){p.__listenerChangeHandles[eventName] = [];}
    
    p.__listenerChangeHandles[eventName].push(handle);
  }
  
  manager.stopWatchingHtmlElementListenerChanges = function(eventName, handle){
    var p = HTMLElement.prototype;
    
    if(!p.__listenerChangeHandles){return false;}
    if(!p.__listenerChangeHandles[eventName]){return false;}
    
    var index = p.__listenerChangeHandles[eventName].indexOf(handle);
    if(index >= 0){
      p.__listenerChangeHandles[eventName].splice(index, 1);
    }
    
    //Delete event array on all gone
    if(p.__listenerChangeHandles[eventName].length === 0){
      delete p.__listenerChangeHandles[eventName];
    }
    
    //Delete objects on all gone
    if(Object.keys(p.__listenerChangeHandles).length === 0){
      
      delete p.__listenerChangeHandles;
      
      p.addEventListener = p.__addEventListener;
      delete p.__addEventListener;

      p.removeEventListener = p.__removeEventListener;
      delete p.__removeEventListener;
    }
    
    return true;
  }
  
  manager.getAvailableElementEvents = function(el){
    //Don't use on anywhere because is easy to add "on".
    var arr = [];
    
    for(var key in el){
      if(key.substr(0, 2) === "on"){
        arr.push(key.substr(2));
      }
    }
    
    return arr;
  }
  
  manager.htmlifyEvents = function(el, events){
    /*
    There seems to be many plugins that duplicate an element or only take an HTML string.
    If events are placed beforehand then they are lost.
    */
    
    if(!events){
      events = manager.getAvailableElementEvents(el);
    }
    
    for(var i=0; i<events.length; i++){
      manager.htmlifyEvent(el, events[i]);
    }
  }
  
  manager.htmlifyEvent = function(el, eventName){
    var key = "__htmlified_event_" + (Math.random() * 10000000);
    
    var event = new CustomEvent(eventName);
    window[key] = function(){
      log("Sent event: " + eventName);
      el.dispatchEvent(event);
    }
    
    el.setAttribute("on" + eventName, "window[\"" + key + "\"]()");
  }
  
  manager.getParents = function(el){
    var parents = [];//From closest to furthest
    var nextParent = el.parentElement;
    while(nextParent){
      parents.push(nextParent);
      
      nextParent = nextParent.parentElement;
    }
    
    return parents;
  }
  
  manager.getClosestParent = function(el, selector){
    var parent = null;
    var parents = manager.getParents(el);
    for(var i=0; i<parents.length; i++){
      if(parents[i].matches(selector)){
        parent = parents[i];
        break;
      }
    }
    
    return parent;
  }

  manager.removeTabIndexes = function(){
    var elements = manager.getAllElements();
    for(var i=0; i<elements.length; i++){
      elements[i].tabIndex = -1;
    }
  }
  
  manager.setTabIndexes = function(elements){
    //Sets in order
    for(var i=0; i<elements.length; i++){
      elements[i].tabIndex = i;
    }
  }
  
  manager.getHtmlImport = function(selector){
    var links = document.querySelectorAll('link[rel="import"]');
    var element, link;
    for(var i=0; i<links.length; i++){
      link = links[i];
      element = link.import.querySelector(selector);
      if(element){
        var clone = document.importNode(element.content, true);
        return clone;
      }
    }
    
    //FAILED
    return null;
  }
  
  manager.e = function(id){
    return document.getElementById(id);
  }
  
  manager.getElementsByIds = function(ids){
    var elements = [];
    var element;
    
    for(var i=0; i<ids.length; i++){
      element = e(ids[i]);
      if(element){elements.push(element);}
    }
    
    return elements;
  }
  
  manager.getDOMList = function(arr){
    var listEl = document.createElement("ul");
    var itemEl;
    var item;
  
    for(var i=0; i<arr.length; i++){
        item = arr[i];
  
        itemEl = document.createElement("li");
        itemEl.textContent = item;
        listEl.appendChild(itemEl);
    }
  
    return listEl;
  }
  
  manager.getDOMImage = function(src){
      var image = new Image();
      image.src = src;
      return image;
  }
  
  manager.getDOMInputsList = function(inputs){
      var listEl = document.createElement("table");
      var inputRow;
      for(var i=0; i<inputs.length; i++){
          inputRow = manager.getDOMInputRow(inputs[i]);
          listEl.appendChild(inputRow);
      }
  
      return listEl;
  }
  
  manager.getDOMInputRow = function(input){
      /*
      Input: {
          name: "",
          value: ""
      }
      */
  
      var rowEl = document.createElement("tr");
  
      //Name
      var nameEl = document.createElement("th");
      nameEl.textContent = input.name;
      rowEl.appendChild(nameEl);
  
      //Input Cell
      var inputCell = document.createElement("td");
      rowEl.appendChild(inputCell);
  
      //Input
      var inputEl = document.createElement("input");
      inputEl.value = input.value;
      inputCell.appendChild(inputEl);
  
      return rowEl;
  }
  
  manager.setClickFileHandler = function(el, onFileHandle){
  
    //Create input
    var fileEl = document.createElement("input");
    fileEl.style.position = "absolute";
    fileEl.style.visibility = "hidden";
    fileEl.setAttribute("type", "file");
    fileEl.addEventListener("change", onFileHandle);
  
    //Append before el(to avoid overrite/otherwise add as child)
    if(el.parentElement){
      el.parentElement.insertBefore(fileEl, el);
    }else{
      el.appendChild(fileEl);
    }
  
    //Apply on click
    el.addEventListener("click", function(ev){
      log(ev);
      if(ev.target !== el){return false;}
      ev.preventDefault();
      fileEl.click();
    }, true);
  }
  
  manager.getElementPositionData = function(elementPosition){
    /*
    Goal:
    Use position to get DOM data.
    Would be used where position remains same but data can vary.
    */
    
    var p = elementPosition;
    var el = p.element;
    var defaultData = null;
    var i, key;
    
    if(!el){return defaultData;}
    
    if(p.type === "tag"){
      return el.tagName;
    }
    
    if(p.type === "textContent"){
      return el.textContent;
    }
    
    if(p.type === "attributeKey" || p.type === "attributeValue"){
      var attributes = maanger.getElementAttributes(el);
      
      i = 0;
      for(key in attributes){
        
        if(p.type === "attributeKey" && elementPosition.attributeIndex === i){
          return key;
        }
        
        if(p.type === "attributeValue" && elementPosition.attributeIndex === i){
          return attributes[key];
        }
      }
    }
    
    return defaultData;
  }
  
  manager.searchDom = function(searchStr, type, el){
    /*
    Goal:
    Search for any format of data at once in DOM.
    Should only get direct parent of text nodes OR direct element.
    Should get position as best as possible so can replace if needed.
    
    ElementPosition: {
      element: Element,
      type: matched type,
      attributeIndex: integer index from 0,
      stringIndex: character index type area.
      stringLength: length of match.
    }
    
    */
    if(!el){el = document;}
    if(!type){
      type = {
        tag: false,
        textContent: true,
        attributeKey: false,
        attributeValue: false,
        
        handle: null//function(el){return result;}//If non-falsy, adds.
      };
    }
    
    var children = mananger.getAllChildren(el);
    var results = [];
    
    var curEl;
    var i, attributeIndex, key;
    var attributes;
    var elementPosition;
    
    for(i=0; i<children.length; i++){
      curEl = children[i];
      elementPosition = {
        element: curEl,
        type: null,
        attributeIndex: 0,
        stringIndex: 0,
        stringLength: searchStr.length
      };
      
      if(type.tag){
        if(curEl.tagName === searchStr){
          elementPosition.type = "tag";
          results.push(elementPosition);
          continue;
        }
      }
      
      if(type.textContent){
        if(curEl.children.length === 0 && curEl.textContent === searchStr){
          elementPosition.type = "textContent";
          results.push(elementPosition);
          continue;
        }
      }
      
      if(type.attributeKey || type.attributeValue){
        attributes = maanger.getElementAttributes(curEl);
        attributeIndex = 0;
        
        for(key in attributes){
          if(type.attributeKey){
            if(key === searchStr){
              elementPosition.attributeIndex = attributeIndex;
              elementPosition.type = "attributeKey";
              results.push(elementPosition);
              continue;
            }
          }
          
          if(type.attributeValue){
            if(attributes[key] === searchStr){
              elementPosition.attributeIndex = attributeIndex;
              elementPosition.type = "attributeValue";
              results.push(elementPosition);
              continue;
            }
          }
          
          attributeIndex++;
        }
      }
      
      if(type.handle){
        elementPosition = type.handle(curEl);
        if(elementPosition){
          results.push(elementPosition);
          continue;
        }
      }
    }
    
    return results;
  }
  
  manager.arrayInputter = function(objectInfoArray){
    var arr = objectInfoArray;
    var input;
    var objectInfo;
    var li;
  
    var ul = document.createElement("ul");
  
    for(var i=0; i<arr.length; i++){
      objectInfo = arr[i];
  
      li = document.createElement("li");
  
      input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", objectInfo.key);
      input.value = objectInfo.value;
  
      li.appendChild(input);
  
      ul.appendChild(li);
    }
  
    return ul;
  }
  
  manager.nestedInputter = function(obj){
    /*
  
    Data:
    key: value
  
    Layout:
    <ul>
      <li><span>[NAME]</span><span>[INPUT/recursive]</span>
      ...
    </ul>
    */
  
    var ul = document.createElement("ul");
    var li, span, input;
  
    for(var key in obj){
      li = document.createElement("li");
  
      //name
      span = document.createElement("span");
      span.textContent = key;
      li.appendChild(span);
  
      //Value
      span = document.createElement("span");
  
      //recursive
      if(isObject(obj[key])){
        span.appendChild( manager.nestedInputter(obj[key]) );
      }
  
      //input
      else{
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.value = obj[key];
  
        span.appendChild(input);
      }
  
      ul.appendChild(li);
    }
  
    return ul;
  }
  
  manager.textNodesUnder = function(el){
    var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT, null, false);
    while(n=walk.nextNode()) a.push(n);
    return a;
  }
  
  manager.getElementsBySelectors = function(selectors, baseElement){
    //Selector:
    //https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors
    var elements = [];
    
    if(!baseElement){
      baseElement = document;
    }
    
    for(var i=0; i<selectors.length; i++){
      elements = elements.concat( Array.prototype.slice.call( baseElement.querySelectorAll(selectors[i]) ) );
    }
    
    return elements;
  }
  
  manager.getAllElements = function(){
    return document.body.getElementsByTagName("*");
  }
  
  manager.getAllChildren = function(el){
    return el.getElementsByTagName("*");
  }
  
  manager.getElementsWithAttribute = function(attr){
    var elements = manager.getAllElements();
    var filtered = [];
    for(var i=0; i<elements.length; i++){
      if(elements[i].hasAttribute(attr)){
        filtered.push(elements[i]);
      }
    }
  
    return filtered; 
  }
  
  manager.getElementAttributes = function(el){
    var attr = {};
    var nodeMap = el.attributes;
    for(var i=0; i<nodeMap.length; i++){
      attr[nodeMap[i].nodeName] = nodeMap[i].nodeValue;
    }
    
    return attr;
  }
  
  manager.getAttributeSelector = function(attr, value){
    var selector = "";
    selector+= '[' + attr;
    if(Utility.exists(value)){
      selector+= '=' + value;
    }
    selector+= ']';
    
    return selector;
  }
  
  manager.getElementsByAttribute = function(attr, value){
    return document.querySelectorAll(manager.getAttributeSelector(attr, value));
  }
  
  manager.getNestedAttributeListFromElement = function(el, attr){
    if(!el){el = document;}
    
    var elements = manager.getElementsBySelectors([ manager.getAttributeSelector(attr) ], el);
    var list = elements.map(function(val){
      return val.getAttribute(attr);
    });
    
    return list;
  }
  
  manager.setElementAsEditable = function(el, handle, bool){
    //Sets as editable but not necessary in edit mode.
    el.contentEditable = bool;
    el.addEventListener("change", handle);
  }
  
  manager.setEditMode = function(attr, bool){
    var elements = manager.getElementsWithAttribute(attr);
    var element;
  
    for(var i=0; i<elements.length; i++){
      element = elements[i];
  
      //Set
      element.contentEditable = bool;
    }
  }
  
  manager.centerFixElement = function(el){
    var s = el.style;
    s.zIndex = Infinity;
    s.position = "fixed";
    s.top = "50%";
    s.left = "50%";
    s.transform = "(-50% -50%)";
  }
  
  manager.convertTableHtmlToArray = function(html){
    var element = document.createElement("div");//Wrapper
    element.innerHTML = html;
    var table = element.getElementsByTagName("table")[0];
    var arr = manager.convertTableElementToArray(table);
  
    return arr;
  }
  
  manager.convertTableElementToArray = function(table){
    var rows = table.getElementsByTagName("tr");
    return manager.convertTableRowElementsToArray(rows);
  }
  
  manager.convertTableRowElementsToArray = function(rows){
    var arr = [];
  
    var cells;
    var i, j;
  
    for(i=0; i<rows.length; i++){
      //Expects children with text
  
      arr[i] = [];
  
      cells = rows[i].children;
      for(j=0; j<cells.length; j++){
        arr[i][j] = cells[j].innerHTML;
      }
    }
  
    return arr;
  }
  
  manager.convertArrToTableElement = function(arr){
    var i, j;
  
    var table = document.createElement("table");
    var tr, td;
  
    for(i=0; i<arr.length; i++){
      tr = document.createElement("tr");
      for(j=0; j<arr[i].length; j++){
        td = document.createElement("td");
        td.innerHTML = arr[i][j];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  
    return table;
  }

  /**
   * Makes setting element info chainable
   * @return {Object} chainer with functions represeting properties/functions of element all returning chainer
   */
  manager.elementChainer = function(el){
    const chainer = {
      element: el,
      addEventListener: (event, handle, other)=>{
        el.addEventListener(event, handle, other);
        return chainer;
      },
      appendChild: (child)=>{
        el.appendChild(child);
        return chainer;
      },
      innerHTML: (html)=>{
        el.innerHTML = html;
        return chainer;
      },
      removeAttribute: (name)=>{
        el.removeAttribute(name);
        return chainer;
      },
      removeChild: (child)=>{
        el.removeChild(child);
        return chainer;
      },
      removeEventListener: (event, handle)=>{
        el.removeEventListener(event, handle);
        return chainer;
      },
      replaceChild: (newChild, oldChild)=>{
        el.replaceChild(newChild, oldChild);
        return chainer;
      },
      setAttribute: (name, val)=>{
        el.setAttribute(name, val);
        return chainer;
      },
      style: (key, val)=>{
        el.style[key] = val;
        return chainer;
      },
      textContent: (str)=>{
        el.textContent = str;
        return chainer;
      },
      title: (str)=>{
        el.title = str;
        return chainer;
      }
    };

    return chainer;
  }

  return manager;
}

if(typeof module !== 'undefined'){
  module.exports = DomHelper;
}