const repeatString = function(string, tries) {
    if (tries < 0) {
        return "ERROR"
    } else if (tries === 0 || string == "") {
        return ""
    }

    let finalString = "";
    
    for (let i = 0; i < tries; i++) {
        finalString += string;
    }
    
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
