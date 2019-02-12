//the JSON object aka object literal
let product = {
    ProductId: 101,
    ProductName:"laptop"
}; 

//Json serialization aka string parsing for JSON
console.log(JSON.stringify(product));
//getting length of all keys of JSON object
let info = Object.keys(product).length;
console.log(info);

// Read all Property names
for(let p of Object.keys(product)){
    console.log(product[p]);
}

let namesData = [];
namesData.push({ id: 101, name :'a'});
namesData.push({ id: 101, name :'b'});
namesData.push({ id: 101, name :'c'});