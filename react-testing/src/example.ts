export function sum(a:number,b:number){
    if(a < 0 || b < 0){
        throw new Error("One of the number is negative");
    }
    return a + b;
}