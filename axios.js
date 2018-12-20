const utils = require('./utils/index');
const Axios = require('./core/Axios');
const defaults = require('./setting/defaults');

function createInstance(){
    const proto = Axios.prototype;
    let context = new Axios(defaults);
    let instance = proto.request.bind(context);
    
    utils.extend(instance, proto, context);

    utils.extend(instance, context);

    return instance;
}

let axios = createInstance();

module.exports = axios;