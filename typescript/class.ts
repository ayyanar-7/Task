// class MyClass{
//     a!: number;
//     b: number = 2;
//     readonly c: number = 3;
//     constructor(){
//         // this.a = 1;
//         this.c = 20;
//     }
// }

// var o = new MyClass();
// // console.log(o.a);
// // console.log(o.b);
// // console.log(o.c);

// o.a = 5;
// o.b = 10;
// console.log(o.a, o.b, o.c);

class Test{
    private _val:string = "25";
    get val(): string{
        console.log(this._val);
        return this._val;    
    }
    set val(a: string | number){
        console.log(a);
        this._val = String(a);
    }
}
let o = new Test();
o.val = 50;

// o.val = "50";

















