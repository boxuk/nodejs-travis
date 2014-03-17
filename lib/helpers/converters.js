exports.footobar = function(str){
    if (str === 'foo') {
        return 'bar';
    }

    return false;
};

exports.numericIncrement = function(num) {
    return (num + 1);
};

exports.getKeyByName = function(obj, key) {
    if (typeof obj[key] !== 'undefined') {
        return obj[key];
    }

    return false;
};

exports.getKeyByLogicalPosition = function(obj, position) {
    position = position - 1;
    if (typeof obj[position] != 'undefined') {
        return obj[position];
    }

    return false;
};