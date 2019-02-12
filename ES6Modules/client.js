"use strict";
exports.__esModule = true;
var logic_1 = require("./logic");
var strOp = new logic_1.StringOperations();
var str = "skdfkjds";
console.log("Length of " + strOp.getLength(str) + " ");
console.log("Uppercase of " + strOp.changeCase(str, 'U'));
console.log("Lowercase of " + strOp.changeCase(str, 'L'));
