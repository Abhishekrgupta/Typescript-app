//simple tuple 
//contains first value as string and second as number
var val;
//rules for tuples
//value types must be followed
// tuple must be initialized
val = ["a", 101];
console.log(val[0] + " and " + val[1]);
var prodRecord; // Defining the reference type of TupeData
// Initialize TupleData reference type
prodRecord = [0, { ProductId: 101, name: "laptop" }];
prodRecord.push([2, { ProductId: 102, name: "desktop" }]);
prodRecord.push([3, { ProductId: 103, name: "router" }]);
prodRecord.push([4, { ProductId: 104, name: "CD" }]);
for (var _i = 0, prodRecord_1 = prodRecord; _i < prodRecord_1.length; _i++) {
    var p = prodRecord_1[_i];
    console.log(p);
}
