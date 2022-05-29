const palindromes = function (string) {
    let finalString = "";
    string = string.replace(/[^a-zA-Z]/g, "").toLowerCase();

    for (let i = (string.length - 1); i >= 0; i--) {
        finalString += string.charAt(i);
    };

    finalString = finalString.replace(/[^a-zA-Z]/g, "").toLowerCase();

    return string === finalString;
};

// Do not edit below this line
module.exports = palindromes;
