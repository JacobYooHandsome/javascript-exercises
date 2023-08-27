const repeatString = function(str, times) {
    if (times < 0) {
        return "ERROR";
    }
    let statement = "";
    for (let i = 0; i < times; i++) {
        statement += str;
    }
    return statement;
};

// Do not edit below this line
module.exports = repeatString;
