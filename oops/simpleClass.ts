class MathClass{
    // private x: number =0;
    // private y: number =0;
    private z: number =0;

    constructor(public x: number, public y: number){}

    add(): number {
        this.z = this.x + this.y;
        return this.z;
    }

    sub(): number {
        this.z = this.x - this.y;
        return this.z;
    }

}


let mObj = new MathClass(10,20);
console.log(`Add : ${mObj.add()}`);
console.log(`Sub : ${mObj.sub()}`);