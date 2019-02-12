var myname;
myname = new Array();
myname.push("Rohan");
myname.push("Amol");
myname.push("amol");
myname.push("varsha");
myname.push("Chaitali");
myname.push("Anjali");
myname.push("Bnjali");
var ProductRecord;
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
var criteria = [{ 'Manufacturer Name': 'MI' }];
function searchCustom(inp, tempProductRecord) {
    if (inp == 'Product ID') {
        for (var _i = 0, tempProductRecord_1 = tempProductRecord; _i < tempProductRecord_1.length; _i++) {
            var p = tempProductRecord_1[_i];
            if (p[0] != undefined) {
                if (p[1]["ProductId"] == criteria[0]["Product ID"]) {
                    console.log(p[1]);
                }
            }
        }
    }
    if (inp == 'Product Name') {
        for (var _a = 0, tempProductRecord_2 = tempProductRecord; _a < tempProductRecord_2.length; _a++) {
            var p = tempProductRecord_2[_a];
            if (p[0] != undefined) {
                if (p[1]["ProductName"] == criteria[0]["Product Name"]) {
                    console.log(p[1]);
                }
            }
        }
    }
    if (inp == 'Category Name') {
        for (var _b = 0, tempProductRecord_3 = tempProductRecord; _b < tempProductRecord_3.length; _b++) {
            var p = tempProductRecord_3[_b];
            if (p[0] != undefined) {
                if (p[1]["catName"] == criteria[0]["Category Name"]) {
                    console.log(p[1]);
                }
            }
        }
    }
    if (inp == 'Manufacturer Name') {
        for (var _c = 0, tempProductRecord_4 = tempProductRecord; _c < tempProductRecord_4.length; _c++) {
            var p = tempProductRecord_4[_c];
            if (p[0] != undefined) {
                if (p[1]["manName"] == criteria[0]["Manufacturer Name"]) {
                    console.log(p[1]);
                }
            }
        }
    }
}
// console.log(criteria[0]["Product ID"])
for (var _i = 0, _a = Object.keys(criteria[0]); _i < _a.length; _i++) {
    var cr = _a[_i];
    console.log(criteria[0]);
    searchCustom(cr, ProductRecord);
}
