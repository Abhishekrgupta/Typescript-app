"use strict";
exports.__esModule = true;
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
exports.StringOperations = StringOperations;
