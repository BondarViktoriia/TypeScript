// type AddFunc = (n1: number, n2: number) => number;

// const foo: AddFunc = (n1: number, n2: number) => {
//     return n1+n2
// }

// Теже самое мы можем сделать через интерфейс

interface AddFunc {
   ( n1:number,n2:number): number;
}

const func: AddFunc = ( n1:number,n2:number) => {
    return n1 + n2;
}