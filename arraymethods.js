var mynames;
mynames = new Array();
mynames.push("Rohan");
mynames.push("Amol");
mynames.push("Varsha");
mynames.push("Chaitali");
mynames.push("Anjali");
//simple array iteration 
// mynames.forEach(printValue);
// function printValue(val:string, idx: number){
//     console.log(`data ${idx} is ${val}`);
// }
// //anonymous call back function
// console.log('anonymous function');
// mynames.forEach(function(val:string, idx: number){
//     console.log(`data ${idx} is ${val}`);
// });
// //ES6 Arrow function
// console.log('call back function');
// mynames.forEach((val:string, idx: number) => {
//     console.log(`data ${idx} is ${val}`);
// });
//Array methods 
// filter, reduce, map
mynames.map(function (v, i) {
    console.log("data at " + i + " is " + v);
});
console.log('filter');
var newArray = new Array();
newArray = mynames.filter(function (val, idx) {
    return val.length > 3;
});
console.log(newArray);
newArray.forEach(function (val, idx) {
    console.log(val);
});
