let prdOperation = new ProductOperation();
function storeProduct(id:number,prodName:string){
prdOperation.saveProduct(new Product(id,prodName));
}

function searchProduct(id:any){
    let searchResult = prdOperation.getProductById(id);
    console.log(searchResult.prodId);
    let table="<table><tr><td>ProdId</td><td>Product Name</td>";
        table += `<tr><td>${searchResult.prodId}</td><td>${searchResult.ProdName}</td></tr>`;
    table += "</table>";
    return table;
    
}

function displayTableData():string{
    let table="<table><tr><td>ProdId</td><td>Product Name</td>";
    for(let p of prdOperation.products){
        table += `<tr><td>${p.prodId}</td><td>${p.ProdName}</td></tr>`;
    }
    table += "</table>";
    return table;
}