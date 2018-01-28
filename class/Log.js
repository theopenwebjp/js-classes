const constants = {
    LOG_LEVEL: {
        'ERROR': 1,
        'WARN': 2,
        'INFO': 3,
        'DEBUG': 4
    }
};
const LOG_LEVEL = constants.LOG_LEVEL.DEBUG;

/**
 * Log handling
 * @public
 */
class Log{

    /**
     * Logging by set log level.
     * 
     * @param {String} level Log level(constants.LOG_LEVEL key)
     * @param {Function} h Log function
     * @param {Array} args Arguments list
     */
    static _log(level, h, args=[]){
        const setLevel = LOG_LEVEL;
        const setConstLevel = constants.LOG_LEVEL[setLevel];
        const curLevel = (setConstLevel !== undefined) ? setConstLevel : constants.LOG_LEVEL.DEBUG;
        
        const targetLevel = constants.LOG_LEVEL[level];

        if(curLevel >= targetLevel){
            args = Array.prototype.slice.call(args);//Arguments List => array
            args = args.map((item)=>{

                //JSON stringify => parse formats object in full format.
                if(item instanceof Error){
                    return JSON.parse(JSON.stringify(item));
                }else{
                    return item;
                }
            });
            h(...args);
        }
    }

    /**
     * catch / error event logging
     */
    static error(){
        Log._log('ERROR', console.error, arguments);
    }
    
    /**
     * Deprecations, etc.
     */
    static warn(){
        Log._log('WARN', console.warn, arguments);
    }

    /**
     * Info logging. For important logging.
     */
    static info(){
        Log._log('INFO', console.info, arguments);
    }

    /**
     * Debug logging.
     */
    static debug(){
        Log._log('DEBUG', console.info, arguments);
    }
}

module.exports = Log;