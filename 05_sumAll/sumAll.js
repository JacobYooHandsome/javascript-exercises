const sumAll = function(start, stop) {
    let sum = 0;
    if (stop < 0 || start < 0 || typeof stop !== "number" || typeof start !== "number") {
        return "ERROR";
    }
    if (stop < start) {
        [stop, start] = [start, stop];
    }
    for (let i = start; i <= stop; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
