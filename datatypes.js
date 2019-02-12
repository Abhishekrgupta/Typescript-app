// 1.Expilcit datatypes
var num1 = 200;
//2. Implicit datatype based on initial assignment
var num2 = 200;
function performOperation(val) {
    if (typeof (val) === "number") {
        console.log("Square: " + (val * val));
    }
    if (typeof (val) === "string") {
        console.log("UpperCase: " + val.toUpperCase());
    }
    else {
        console.log("Type not found of: " + val);
    }
}
performOperation(10);
performOperation("Abhi");
performOperation(false);
function unionTypeOperation(val) {
    if (typeof (val) === "number") {
        console.log("Square: " + (val * val));
    }
    if (typeof (val) === "string") {
        console.log("UpperCase: " + val.toUpperCase());
    }
}
unionTypeOperation(10);
unionTypeOperation("Abhi");
