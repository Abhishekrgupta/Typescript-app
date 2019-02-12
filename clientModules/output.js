var StringOperations = /** @class */ (function () {
    function StringOperations() {
    }
    StringOperations.prototype.getLength = function (str) {
        return str.length;
    };
    StringOperations.prototype.changeCase = function (str, format) {
        if (format == 'U') {
            return str.toUpperCase();
        }
        if (format == 'L') {
            return str.toLowerCase();
        }
        return str;
    };
    return StringOperations;
}());
var strOp = new StringOperations();
var str = "skdfkjds";
console.log("Length of " + strOp.getLength(str) + " ");
console.log("Uppercase of " + strOp.changeCase(str, 'U'));
console.log("Lowercase of " + strOp.changeCase(str, 'L'));
