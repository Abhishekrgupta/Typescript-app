let myname: Array<string>;
myname = new Array<string>();

myname.push("Rohan");
myname.push("Amol");
myname.push("amol");
myname.push("varsha");
myname.push("Chaitali");
myname.push("Anjali");
myname.push("Bnjali");

/* String operation
myname.sort(function(a, b){
    return a.length - b.length;
  });

console.log(myname);

let filteredArray = myname.filter((val: string, idx: number)=>{
    if(val[0]==val[0].toUpperCase()){
        return val;
    }
})
console.log(filteredArray);
*/



/////////////////////

type ProductTuple = [number, {}];

let ProductRecord: ProductTuple;

ProductRecord = [0, {}];
ProductRecord.push([1, { ProductId: 101, ProductName: "laptop", catName: "hardware", manName: "Dell", baseprice: 300 }]);
ProductRecord.push([2, { ProductId: 102, ProductName: "NPAV", catName: "software", manName: "NPAV", baseprice: 100 }]);
ProductRecord.push([3, { ProductId: 103, ProductName: "disk", catName: "hardware", manName: "Dell", baseprice: 400 }]);
ProductRecord.push([5, { ProductId: 104, ProductName: "powerbank", catName: "hardware", manName: "MI", baseprice: 200 }]);
ProductRecord.push([4, { ProductId: 105, ProductName: "nodee", catName: "software", manName: "node", baseprice: 0 }]);
ProductRecord.push([6, { ProductId: 106, ProductName: "mongo", catName: "software", manName: "mongo", baseprice: 0 }]);

//console.log(ProductRecord);
// for(var i=2;i<ProductRecord.length;i++){
//     console.log(ProductRecord[i][1]["ProductName"]);
// }
/*
for (let p of ProductRecord){
    console.log(p[0]+" "+p[1]);
}
*/

///sort tuple 
/*
let sortedJSObj = [];
for (let p of ProductRecord) {
    if (p[0] != undefined) {
        sortedJSObj.push(p[1]);
    }
}
console.log(sortedJSObj[3]["ProductName"]);
console.log(sortedJSObj.sort(function (obj1, obj2) {

    if (obj1["ProductName"].toLowerCase() > obj2["ProductName"].toLowerCase()) {
        return 1;
    }
    else if (obj1["ProductName"].toLowerCase() < obj2["ProductName"].toLowerCase()) {
        return -1;
    }
    return 0;
}));

*/


///function search
// var criteria = [{ 'Product ID': '101', 'Product Name': 'laptop', 'Category Name': 'hardware', 'Manufacturer Name': 'MI' }];

var criteria = [{ 'Manufacturer Name': 'MI'}];
function searchCustom(inp: {}, tempProductRecord: ProductTuple) {
    if (inp == 'Product ID') {
        for (let p of tempProductRecord) {
            if (p[0] != undefined) {
                if (p[1]["ProductId"] == criteria[0]["Product ID"]) {
                    console.log(p[1]);
                }
            }
        }
    }

    if (inp == 'Product Name') {
        for (let p of tempProductRecord) {
            if (p[0] != undefined) {
                if (p[1]["ProductName"] == criteria[0]["Product Name"]) {
                    console.log(p[1]);
                }
            }
        }
    }

    if (inp == 'Category Name') {
        for (let p of tempProductRecord) {
            if (p[0] != undefined) {
                if (p[1]["catName"] == criteria[0]["Category Name"]) {
                    console.log(p[1]);
                }
            }
        }
    }

    if (inp == 'Manufacturer Name') {
        for (let p of tempProductRecord) {
            if (p[0] != undefined) {
                if (p[1]["manName"] == criteria[0]["Manufacturer Name"]) {
                    console.log(p[1]);
                }
            }
        }
    }
}
// console.log(criteria[0]["Product ID"])
for (let cr of Object.keys(criteria[0])) {
    console.log(criteria[0]);
    searchCustom(cr, ProductRecord);
}

