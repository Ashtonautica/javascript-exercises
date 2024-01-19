const palindromes = function (text) {
    let formattedText = text
        .replace(/[!,. ]/g, "")
        .toLowerCase();
    console.log(formattedText);
    return formattedText === formattedText.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
