var names = [];
names.push("Rohan");
names.push("Amol");
names.push("Varsha");
names.push("Chaitali");
names.push("Anjali");
for (var i = 0; i < names.length; i++) {
    console.log("Names at " + i + " is " + names[i]);
}
console.log();
//using for .. in loop
for (var i in names) {
    console.log("Names at " + i + " is " + names[i]);
}
console.log();
//Iterator using for .. of loop
//Internally uses Symbol.iterator() of ES 6
//Typescript uses for loop for Symbol.iterator()
console.log("using ");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log("Names = " + n);
}
