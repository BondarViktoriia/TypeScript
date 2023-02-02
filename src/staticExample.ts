class UseStatic{
    private static count = 0;

    constructor() {
        UseStatic.count += 1;
    }

    public static isStaticMethod() {
        console.log("I am static")
    }
    public showCount() {
        console.log(UseStatic.count)
    }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

UseStatic.isStaticMethod();