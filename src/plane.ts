
abstract class Plane{
    protected pilotInCabin = false;

    public sitInPlane() {
        this.pilotInCabin = true;
    }

    public abstract startEngine(): string;
}

class Airbus extends Plane{
    public startEngine() {
        return "YYYYY"
    }
}

class Boing extends Plane{
    public startEngine() {
        return "wwwww"
    }
}

const airbus320 = new Airbus();
const boing737 = new Boing();

airbus320.sitInPlane();
boing737.sitInPlane();

console.log(airbus320.startEngine());
console.log(boing737.startEngine());

