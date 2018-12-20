function Interceptor(){
    this.handlers = [];
}

Interceptor.prototype = {
    use: function(fulfilled, rejected){
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
        });
    },
    eject: function(id){
        if(this.handlers[id]){
            this.handlers[id] = null;
        }
    },
    forEach: function(callback){
        this.handlers.forEach(callback);
    }
};

module.exports = Interceptor;