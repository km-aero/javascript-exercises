const removeFromArray = function(array, ...deleteValue) {
    for (let i = 0; i < deleteValue.length; i++) {
        let deleteValueIndex = array.indexOf(deleteValue[i]);

        if (deleteValueIndex > -1) {
            array.splice(deleteValueIndex, 1);
        };
    };

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
