interface MyInt{
    a: number;
    s: string;

    fun():number;
}

class MyClass implements MyInt{
    a: number = 5;
    s: string = "Hello";

    fun(){
        console.log();
        return 7;
    }
}