var DemoES6 = /** @class */ (function () {
    function DemoES6() {
    }
    DemoES6.prototype.summation = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum = 0;
        if (values.length > 0) {
            values.forEach(function (v, i) {
                sum += v;
            });
        }
        return sum;
    };
    return DemoES6;
}());
var Obj = new DemoES6();
console.log("2 parameters " + Obj.summation(2, '3'));
console.log("3 parameters " + Obj.summation(2, 3, 4));
console.log("4 parameters " + Obj.summation(2, 3, 4, 5));
