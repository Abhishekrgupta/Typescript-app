class Product{
    constructor(public prodId: number, public ProdName: string){

    }
}

class ProductLogic {

    product: Product;
    products: Array<Product>;

    constructor(){
        this.product = new Product(0, "");
        this.products= new Array<Product>();
        this.products.push( new Product(102, "DEF"));
        this.products.push( new Product(103, "fnvDEF"));
    
    }

    getProduct(): Array<Product>{
        return this.products;
    }

    saveProduct(p: Product):  Array<Product>{
        console.log(p);
        this.products.push(p);
        return this.products;
    }

}

class ProductOperation extends ProductLogic{
    constructor(){
        super();
    }

    getProductById(id: number): Product{
        let outP:Product={ prodId : 0,ProdName:"No such product"};
            this.products.forEach((v,i) =>{
                if(id == v.prodId){  
                    outP = v;
                }
            });
            return outP;
    }

    getProductByCategory(cat: string) :Array<Product>{
        let outputArr :Product[] = [];
        this.products.forEach((v,i) =>{
            if(cat == v.ProdName){
                outputArr.push(v);
            }
        });
            return outputArr;
    }
}

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