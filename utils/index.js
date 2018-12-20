const toString = Object.prototype.toString;

function forEach(obj, callback){
    if (isUndefined(obj) || isNull(obj)){
        return;
    }
    if (!isObject(obj)){
        obj = [obj];
    }
    if (isArray(obj)){
        obj.forEach(callback);
    }else{
        for(let prop in obj){
            if(obj.hasOwnProperty(prop)){
                callback && callback(obj[prop], prop, obj);
            }
        }
    }
}

function extend(source, target, context){
    for(let prop in target){
        if (context && isFunction(target[prop])){
            source[prop] = target[prop].bind(context);
        }else{
            source[prop] = target[prop]
        }
    }
}

function isArray(val){
    return toString.call(val) === '[object Array]';
}

function isUndefined(val){
    return val === undefined;
}

function isFunction(val) {
    return typeof val === 'function';
}

function isNull(val){
    return val === null;
}

function isObject(val){
    return typeof val === 'object';
}

module.exports = {
    forEach,
    extend,
    isArray,
    isUndefined,
    isFunction,
    isNull,
    isObject
}