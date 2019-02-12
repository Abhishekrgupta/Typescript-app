var MathClass = /** @class */ (function () {
    function MathClass(x, y) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
    }
    MathClass.prototype.add = function () {
        this.z = this.x + this.y;
        return this.z;
    };
    MathClass.prototype.sub = function () {
        this.z = this.x - this.y;
        return this.z;
    };
    return MathClass;
}());
var mObj = new MathClass(10, 20);
console.log("Add : " + mObj.add());
console.log("Sub : " + mObj.sub());
