class House{
   
    private teenants: string[] = [];

    constructor( public readonly type: string,protected street: string) {
    
    }

   public showAddress(this:House):void {
        console.log("Adress" + this.street );
    }
    public addTenant(name:string) {
        this.teenants.push(name);
    }
    public showTenants() {
      console.log(this.teenants)
    }
    public showType(this: House): void{
        console.log("Type" + this.type)
    }
}

class StoneHouse extends House{
    private chargeOfTheHouse: string;
    constructor(street:string,general:string) {
        super("stone", street);
        this.chargeOfTheHouse = general
    }
       public showAddress():void {
        console.log("Adress" + this.street );
    }
        public showTenants() {
            console.log("General: " + this.chargeOfTheHouse);
            super.showTenants();
    }
}
const stoneHouse = new StoneHouse("Tarkovskogo str", "Fus");

stoneHouse.addTenant("Jenny");
stoneHouse.addTenant("Mia")

stoneHouse.showTenants();
// 
