const Utils = {
    calculateNumber(type, a, b) {
        // Round the first number to the nearest integer
        const roundedA = Math.round(a);
        // Round the second number to the nearest integer
        const roundedB = Math.round(b);
        switch(type) {
            case "SUM":
                return roundedA + roundedB;
            case "SUBTRACT":
                return roundedA - roundedB;
            case "DIVIDE":
                if (roundedB === 0) {
                    return "Error";
                }
                return roundedA / roundedB;
            default:
                throw new Error(`Invalid type: ${type}`);
        }
    }
};

module.exports = Utils;