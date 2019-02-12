var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(prodId, ProdName) {
        this.prodId = prodId;
        this.ProdName = ProdName;
    }
    return Product;
}());
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
        this.product = new Product(0, "");
        this.products = new Array();
        this.products.push(new Product(102, "DEF"));
        this.products.push(new Product(103, "fnvDEF"));
    }
    ProductLogic.prototype.getProduct = function () {
        return this.products;
    };
    ProductLogic.prototype.saveProduct = function (p) {
        console.log(p);
        this.products.push(p);
        return this.products;
    };
    return ProductLogic;
}());
var ProductOperation = /** @class */ (function (_super) {
    __extends(ProductOperation, _super);
    function ProductOperation() {
        return _super.call(this) || this;
    }
    ProductOperation.prototype.getProductById = function (id) {
        var outP = { prodId: 0, ProdName: "No such prosuct" };
        this.products.forEach(function (v, i) {
            if (id == v.prodId) {
                outP = v;
            }
        });
        return outP;
    };
    ProductOperation.prototype.getProductByCategory = function (cat) {
        var outputArr = [];
        this.products.forEach(function (v, i) {
            if (cat == v.ProdName) {
                outputArr.push(v);
            }
        });
        return outputArr;
    };
    return ProductOperation;
}(ProductLogic));
/*
console.log(JSON.stringify(prdOperation.getProduct()));
let prd = new Product(103,"P3");
console.log();
console.log(JSON.stringify(prdOperation.saveProduct(prd)));
console.log(JSON.stringify(prdOperation.getProductById(102)));


class Presenter{
    generateTable(): string{
        let Products = [
            {prodId : 104,ProdName:"Laptop"},
            {prodId : 105,ProdName:"Mouse"}
        ];
    

    let table="<table><tr><td>ProdId</td><td>Product Name</td>";
    for(let p of Products){
        table += `<tr><td>${p.prodId}</td><td>${p.ProdName}</td></tr>`;
    }
    table += "</table>";
    return table;
}

}
*/ 
var prdOperation = new ProductOperation();
function storeProduct(id, prodName) {
    prdOperation.saveProduct(new Product(id, prodName));
}
function searchProduct(id) {
    var searchResult = prdOperation.getProductById(id);
    console.log(searchResult.prodId);
    var table = "<table><tr><td>ProdId</td><td>Product Name</td>";
    table += "<tr><td>" + searchResult.prodId + "</td><td>" + searchResult.ProdName + "</td></tr>";
    table += "</table>";
    return table;
}
function displayTableData() {
    var table = "<table><tr><td>ProdId</td><td>Product Name</td>";
    for (var _i = 0, _a = prdOperation.products; _i < _a.length; _i++) {
        var p = _a[_i];
        table += "<tr><td>" + p.prodId + "</td><td>" + p.ProdName + "</td></tr>";
    }
    table += "</table>";
    return table;
}
