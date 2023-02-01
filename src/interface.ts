interface IPerson{
    readonly name: string;
    age: number;

    greet(phrase:string): void;
}

interface IPilot{
    flyMessage(): void;
}

class Pilot implements IPerson, IPilot{
    constructor(public name: string, public age: number) {
        this.checkAge();
    }

    private checkAge() {
        if (this.age < 28) {
           throw new Error("pilot to young")
       } 
    }
   public greet(phrase: string):void {
        console.log(phrase + " "+ this.name)
    }
    public flyMessage(): void {
        console.log("Have a nice flight!")
    }
}


abstract class Plane{
    protected pilot?: IPilot;

    public sitInPlane(pilot:IPilot) {
        this.pilot = pilot;
    }

    public abstract startEngine(): boolean;
}

class Airbus extends Plane{
    public startEngine() {
        if (!this.pilot) {
            throw new Error("No pilot in cabin")
        }
        console.log("Engine srart");
        this.pilot.flyMessage();
        return true
    }
}


const pilot = new Pilot("Jack", 35);
const airbus = new Airbus();
pilot.greet("hello i'm a pilot");
airbus.sitInPlane(pilot);
airbus.startEngine();








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