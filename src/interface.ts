interface IPerson{
    readonly name: string;
    age: number;

    greet(phrase:string): void;
}

let user: IPerson;
user = {
    name: "Fusun",
    age: 1,
    
    greet(phrase:string) {
        console.log(phrase + " " + this.name)
    }
}

user.greet("Welcome , My name is ")

type IPersonType = {
    readonly name: string;
    age: number;

    greet:(phrase:string)=>void;
}

let userType: IPerson;
userType = {
    name: "Jenny",
    age: 13,
    
    greet(phrase:string) {
        console.log(phrase + " " + this.name)
    }
}

userType.greet("Welcome , My name is ")