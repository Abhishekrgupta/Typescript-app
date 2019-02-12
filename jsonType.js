//the JSON object aka object literal
var product = {
    ProductId: 101,
    ProductName: "laptop"
};
//Json serialization aka string parsing for JSON
console.log(JSON.stringify(product));
//getting length of all keys of JSON object
var info = Object.keys(product).length;
console.log(info);
// Read all Property names
for (var _i = 0, _a = Object.keys(product); _i < _a.length; _i++) {
    var p = _a[_i];
    console.log(product[p]);
}
var namesData = [];
namesData.push({ id: 101, name: 'a' });
namesData.push({ id: 101, name: 'b' });
namesData.push({ id: 101, name: 'c' });
