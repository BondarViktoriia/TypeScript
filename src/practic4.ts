
// abstract class NewHouse{
//     protected door = false;
//     private tenants: Person[] = [];
//     constructor(protected key:Key) {
//     }
//     abstract openDoor(key: Key): boolean;
//     comeIn(person: Person): void{
//         if (!this.door) {
//             throw new Error("Door is close");
//         }
//         this.tenants.push(person);
//         console.log("Persone in house")
//     }
// }

// class Key{
//   private signature: number;
//     constructor() {
//         this.signature = Math.random()
//     }
//     getSignature(): number{
//         return this.signature;
//     }
// }

// class Person{
//     constructor(private key: Key) {}
//     getKey(): Key{
//         return this.key;
//     }
// }

// class MyNewHouse extends NewHouse{
//     openDoor(key: Key): boolean {
//         if (key.getSignature() !== this.key.getSignature()) {
//             throw new Error("Wrong key")
//         }
//         return this.door = true;
//     }
// }
// const key = new Key();

// const home = new MyNewHouse(key);
// const neightborn = new Person(key);

// home.openDoor(neightborn.getKey());
// home.comeIn(neightborn)


