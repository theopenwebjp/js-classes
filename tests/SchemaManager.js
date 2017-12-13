var describe = require('mocha').describe;
var before = require('mocha').before;
var it = require('mocha').it;

//var assert = require('assert');
var assert = require('chai').assert;
var should = require('chai').should;
var expect = require('chai').expect;

var fs = require("fs");
eval( fs.readFileSync('./../../js-functions/utility.js', 'utf8') );
eval( fs.readFileSync('./../SchemaManager.js', 'utf8') );
eval( fs.readFileSync('./../Schema.js', 'utf8') );
var testObj = new SchemaManager(); testObj.schemaList = new Schema();
//Test schema key: Address

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var jsDom = new JSDOM('');
var document = jsDom.window.document;

var val;

describe('SchemaManager.js', function() {
  describe('#addToSchemaList()', function() {
    it('Schema should be added', function() {
      testObj.addToSchemaList({test1: function(){return {test: true};}, test2: function(){return {test: true};}});
      expect(testObj.schemaList.test1).to.exist;
      expect(testObj.schemaList.test2).to.exist;
    });
  });
  
  describe('#schema()', function() {
    it('Obtains schema with passed in data', function() {
      
      //STANDARD
      val = testObj.schema(testObj.schemaList, "Address", {
        address: "address",
        country: "country",
        state: "state",
        town: "town"
      });
                           
      expect(typeof val).to.equal("object");
      expect(val.address).to.equal("address");
      expect(val.zipCode).to.equal("");
      
      //LANGUAGE
      val = testObj.schema(testObj.schemaList, "Address", {
        address: {//simpleNotation
          japanese: "住所",
          english: "address"
        },
        country: {//notation
          notation: true,
          japanese: "国",
          english: "country"
        },
        notationGroup: {//notationGroup
          english: {
            state: "state",
            town: "town"
          },
          japanese: {
            state: "県",
            town: "町"
          }
        },
        zipCode: "zipCode"
      }, {
        language: "japanese",
        languages: ["japanese", "english"]
      });
      
      expect(typeof val).to.equal("object");
      expect(val.address).to.equal("住所");
      expect(val.country).to.equal("国");
      expect(val.state).to.equal("県");
    });
  });
  
  describe('#getSchema()', function() {
    it('Obtains schema without any custom data', function() {
      
      //Normal
      val = testObj.getSchema(testObj.schemaList, "Address");
      
      expect(typeof val).to.equal("object");
      expect(val.zipCode).to.equal("");
      
      //With context
      val = testObj.getSchema(testObj.schemaList, "PersonalInfo");
      
      expect(typeof val.birthPlace).to.equal("object");//Context to object
      expect(val.birthPlace.coords.latitude).to.equal("");//Nested
      expect(val.birthPlace.address.country).to.equal("");//Multi nested
    });
  });
  
  describe('#loopSchema()', function() {
    it('Common schema object looping.', function() {
      
      var n = false;
      var group = false;
      
      testObj.loopSchema({
        n: {notation: true, text: "ok"},
        group: {notationGroup: true, text: "ok"}
      }, {
        onNotation: function(status){n = true;},
        onNotationGroup: function(status){group = true;}
      });
      
      expect(n).to.equal(true);
      expect(group).to.equal(true);
    });
  });
  
  describe('#getSchemaWithoutNotations()', function() {
    it('Schema without any notation/notation groups', function() {
      val = testObj.getSchemaWithoutNotations({
        n: {notation: true, text: "ok"},
        group: {notationGroup: true, text: "ok"},
        ok: true
      });
      
      expect(typeof val).to.equal("object");
      expect(val.n).to.equal(undefined);
      expect(val.group).to.equal(undefined);
      expect(val.ok).to.equal(true);
    });
  });
  
  describe('#splitJsonLdByLanguage()', function() {
    it('Split schema into languages', function() {
      val = testObj.splitJsonLdByLanguage({
        n: {notation: true, japanese: "了解", english: "ok"},
        group: {notationGroup: true, japanese: {info: "情報", other: "他"}, english: {info: "info", other: "other"}},
        ok: true
      });
      
      expect(typeof val).to.equal("object");
      expect(typeof val[testObj.settings.defaults.language]).to.equal("object");
      expect(typeof val.japanese).to.equal("object");
      expect(typeof val.english).to.equal("object");
    });
  });
  
  describe('#isSimpleNotationObject()', function() {
    it('Check whether should be converted to notationObject', function() {
      val = testObj.isSimpleNotationObject({japanese: "1", english: "2"}, ["japanese", "english"]);
      
      expect(val).to.equal(true);
    });
  });
  
  describe('#outputSchema()', function() {
    it('Outputs schema to dom', function() {
      var schema = testObj.getSchema(testObj.schemaList, "Address");
      testObj.outputSchema(schema); val = document.querySelectorAll('script[type="application/ld+json"]');
      expect(val.length).to.be.above(0);
      expect(val[0].textContent).to.exist;
    });
  });
});