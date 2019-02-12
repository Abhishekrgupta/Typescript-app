class DemoES6{
    summation(...values: number[]):  number {
        let sum: number = 0;
        if(values.length > 0){
            values.forEach((v, i) => {
                sum += v; 
            });
        }  
        return sum;
    }

    /*OverLoading and Overloading gives issue in ts 
    // add(x: number): number{

    //     return 0;
        
    // }

    // add(x: number , y: String): number{

    //     return 0;
        
    // }*/
}

let Obj = new DemoES6();
console.log(`2 parameters ${Obj.summation(2,3)}`);
console.log(`3 parameters ${Obj.summation(2,3,4)}`);
console.log(`4 parameters ${Obj.summation(2,3,4,5)}`);