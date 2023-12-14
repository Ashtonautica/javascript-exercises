const sumToN = function(n) {
    return 0.5 * n * (n+1);
}

const sumAll = function(x, y) {
    if ((x < 0) || (y < 0)) return "ERROR"
    if ((typeof x !== "number") || (typeof y !== "number")) return "ERROR"

    let largest = (x > y) ? x : y;
    let smallest = (x > y)? y : x;
    return sumToN(largest) - sumToN(smallest - 1);
};

// Do not edit below this line
module.exports = sumAll;
