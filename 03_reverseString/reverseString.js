const reverseString = function(string) {
    let output = "";
    let charArray = string.split("");
    while (charArray.length > 0) {
        output += charArray.pop();
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
