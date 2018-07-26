const I18n = require('./TextManager');

if(typeof window === 'object'){
    window.TextManager = I18n;
}
if(typeof module !== 'undefined'){
    module.exports = I18n;
}