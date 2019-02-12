let names: [] = [];

names.push("Rohan");
names.push("Amol");
names.push("Varsha");
names.push("Chaitali");
names.push("Anjali");

for(let i=0; i< names.length ; i++){
    console.log(`Names at ${i} is ${names[i]}`);
}

console.log();

//using for .. in loop

for(let i in names){
    console.log(`Names at ${i} is ${names[i]}`);
}

console.log();


//Iterator using for .. of loop
//Internally uses Symbol.iterator() of ES 6
//Typescript uses for loop for Symbol.iterator()

console.log("using for loop")

for(let n of names){
    console.log(`Names = ${n}`);
}

