Math.round = function (number) {
    var wholeNumber = JSON.stringify(number).split(".")[0];
    var firstDecimal;

    if (JSON.stringify(number).split(".").length > 1) {
        firstDecimal = JSON.stringify(number).split(".")[1].split("")[0];
    }

    if (number === 0 || JSON.stringify(number).split(".").length === 1) {
        return parseInt(wholeNumber);
    }

    if (firstDecimal < 5) {
        return parseInt(wholeNumber)
    }

    return parseInt(wholeNumber) + 1
};

Math.ceil = function(number) {
    var wholeNumber = JSON.stringify(number).split(".")[0];
    if(JSON.stringify(number).split(".").length > 1){
    return parseInt(wholeNumber) + 1
    }
    return parseInt(wholeNumber)
};

Math.floor = function(number) {
    var wholeNumber = JSON.stringify(number).split(".")[0];
    return parseInt(wholeNumber) 
};