interface Admin {
    name: string;
    privileges: string[];
};

interface User  {
    name: string;
    startDate: Date;
};

// type AdminUser = Admin & User;

// interface AdminUser extends Admin, User { }

///////////////// Type Guards////////////  (in)
// это когда TS не уверен какой тип мы используем

// type ComplexType = string | number;
// function combine (a: ComplexType, b: ComplexType) {
//     if (typeof a === "string" || typeof b === "string") {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

type AdminOrUser = Admin | User;

function showFields(element:AdminOrUser) {
    if ('startDate' in element) {
 console.log(element.startDate)
    }
    if ('privileges' in element) {
        console.log(element.privileges)
    }
    console.log(element.name)
}

// Type Guards for Classes   (instanceof)

abstract class Guy{
    constructor(public name: string) {
        
    }
}

class BadGuy extends Guy{ 
    insult() {
        console.log("insult")
    }
}

class GoodGuy extends Guy{
    advice() {
        console.log("advice")
    }
}

const goodGuy = new GoodGuy("Jenny");
const badGuy = new BadGuy("Fusun");

function gyes(user:Guy) {
    if (user instanceof GoodGuy) {
        user.advice();
    }
    if (user instanceof BadGuy) {
        user.insult();
    }
}


///////////////////  Type casting///////////////////////////

// 1)const input =<HTMLInputElement>document.getElementById('inputEmail')!;
//2) const input =document.getElementById('inputEmail') as HTMLInputElement;
// 3)
const input = document.getElementById('inputEmail');
if (input) {
    (input as HTMLInputElement).value;
    const newInput = input as HTMLInputElement;
    newInput.value
}

//  /////////////////////Index Properties///////////

// Это важно когда мы не знаем какие поля будут в объекте

interface Person{
    name: string;
    age: number;
    [x: string]: string | number;
}
// const user: Person = {
//     name: 'Fusun',
//     gender: "female",
//     country: 'Ukraine',
//     age: 1,
// }

///////Optional Chaining///////

interface Animal{
    name: string;
    additionalInfo?: {
        someInfo: string;
    }
}

const cat : Animal = {
    name: "Fusun",
}
cat?.additionalInfo?.someInfo

// //////////Nullish Coalescing/////////////// (Нулевое слияние)
// Только если в userInput явно указан null или underfined, только тогда вернеться "DEFAULT"
const userInput = null;
const store = userInput ?? "DEFAULT"

console.log(store)

// Перегрузка операторов (function overloads)
// В TS это как уточнение типа для функции.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a:string|number,b:string|number) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString( )+ b.toString()
    }
    return a + b;
}


// Generics //////

// let arr: Array<string | number>;
let arr: (string | number)[];
arr = ['string', 15];

const promise: Promise<string> = new Promise((resolve) => {
    resolve("String")
})
promise.then(() => {
    
});
    
    
(() => {
        async function promiseFoo(): Promise<string> {
            return "String 2";
    }
    promiseFoo().then((data)=>console.log(data))
})()

// //////////////Generic function-method/////////////////

// Обьединение двух объектов
// function merge <T,U>(objA: T, objB: U) {
//     return Object.assign({},objA,objB)
// }

// type Worke = {
//     name: string;
// }
// type AditionalFields = {
//     age: number;
// }

// const toMergeOne = {
//     name: "Fusun"
// };
// const toMergeTwo = {
//     age:1
// }
// const merged = merge<Worke,AditionalFields>(toMergeOne, toMergeTwo) 
// merged.name;

// ///////Extends -для ограничения типа////////////////
// Мы можем расширять generics 

// function merge <T extends object,U extends object>(objA: T, objB: U) {
//     return Object.assign({},objA,objB)
// }

const toMergeOne = {
    name: "Fusun"
};
const toMergeTwo = {
    age:1
}
const merged = merge(toMergeOne, toMergeTwo) 
merged.name;

//
interface ILength{
    length:number
}

function getLength <T extends ILength> (str:T):number {
    return str.length
}
const obj = {
    length:20,
}
getLength("string")
getLength([])
getLength(obj)