//simple tuple 
//contains first value as string and second as number
let  val : [string, number];
//rules for tuples
//value types must be followed
// tuple must be initialized

val = ["a", 101];

console.log(`${val[0]} and ${val[1]}`);

//define a tuple using "type" for complex data 
type TupleData= [number, {}];
let prodRecord: TupleData; // Defining the reference type of TupeData
// Initialize TupleData reference type
prodRecord = [0, {ProductId: 101, name: "laptop"}];
prodRecord.push([2, {ProductId: 102, name: "desktop"}]);
prodRecord.push([3, {ProductId: 103, name: "router"}]);
prodRecord.push([4, {ProductId: 104, name: "CD"}]);


for (let p of prodRecord){
    console.log(p);
}