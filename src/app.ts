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
