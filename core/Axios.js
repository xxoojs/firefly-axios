const utils = require('../utils/index');
const Interceptor = require('./Interceptor');

function Axios(instanceConfig){
    this.defaults = instanceConfig;
    this.interceptor = {
        request: new Interceptor(),
        response: new Interceptor()
    };
}

Axios.prototype = {
    request: function(instanceConfig){
        let chain = [mockRequest, undefined];
        let promise = Promise.resolve(instanceConfig);

        utils.forEach(this.interceptor, (icInstance, propName) => {
            icInstance.forEach(_interceptor => {
                switch (propName){
                    case 'request':
                        chain.unshift(_interceptor.rejected);
                        chain.unshift(_interceptor.fulfilled);
                        break;
                    case 'response':
                        chain.push(_interceptor.fulfilled);
                        chain.push(_interceptor.rejected);
                        break;
                    default:
                        break;
                }
            });
        });
        console.log(chain);

        while(chain.length){
            promise.then(chain.shift(), chain.shift());
        }

        return promise;
    }
};

function mockRequest(){
    console.log('i am whoami!');
    console.log('i send a request!');
    console.log('waiting for goos news!');
}

module.exports = Axios;