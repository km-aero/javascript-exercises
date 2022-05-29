const fibonacci = function(position) {
    if (position <= 0) {
        return "OOPS";
    }

    let total = [];

    for (let i = 1; i <= position; i++) {
        if (i === 1 || i === 2) {
            total.push(1);
        } else {
            sum = total[i-3] + total[i-2];
            total.push(sum);
        }
    };

    return total[(position-1)];
};

// Do not edit below this line
module.exports = fibonacci;
