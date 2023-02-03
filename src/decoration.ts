// function Logger(logString:string) {
//    return function (constructor:Function) {
//     console.log(logString);
//     console.log(constructor)
// }
// }

// function AddProperty() {
//     return function (constructor: Function) {
//        console.log("add property")
//        constructor.prototype.modify = true;
// }
// }

// @Logger("logging-controller")
// @AddProperty()

// class Controller{
//     public id = 1;
//     public modify?: boolean;
// }

// const controller = new Controller();
// console.log("Is modify?",controller.modify)

// ////////////////////////////////////////////////////////////////////////////////

// interface IDecoration {
//   parent: string;
//   template: string;
// }

// function ControllerDecoration (config: IDecoration) {
//   return function<T extends {new(...args: any[]): {content: string}}>(originalConstructor: T) {

//     return class extends originalConstructor {
//       private element: HTMLElement;
//       private parent: HTMLElement;
//       constructor (...arg: any[]) {
//         super(...arg);
//         this.parent = document.getElementById(config.parent)!;
//         this.element = document.createElement(config.template);

//         this.element.innerHTML = this.content;

//         this.parent.appendChild(this.element);
//       }
//     }
//   };
// }

// @ControllerDecoration({
//   parent: 'app',
//   template: 'H1',
// })
// class Controller {
//   public content = 'My controller';
// }

// const controller = new Controller();

// Декораторы методов

// function ShowParams(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("target", target);
//   console.log("name", name);
//   console.log("descriptor", descriptor);
// }

// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const method = descriptor.value as Function;

//   return {
//     configurable: true,
//       enumerable: false,
//       get() {
//           return method.bind(this);
//     }
//   };
// }

// class Notifier {
//   public content = "Message in Class";
//     @ShowParams
//       @AutoBind
//   showMessage() {
//     console.log(this.content);
//   }
// }

// const notifier = new Notifier();

// const messageShow = notifier.showMessage;
// notifier.showMessage();
// messageShow();

function AddTax(taxParsent :number) {
    return function (_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value as Function;

  return {
    configurable: true,
      enumerable: false,
      get() {
          return (...args:any[]) => {
              const result = method.apply(this, args);
              return result + (result/100 * taxParsent)
          };
    }
  };
}
}

class Payment{
    @AddTax(20)
    pay(money: number) {
        return money;
    }
}

const payment = new Payment();
console.log(payment.pay(100));


//////////////////////////////Декораторы параметров ////////////////////////////////////

function CheckEmail(target:any,nameMethod:string,position:number) {
    if (!target[nameMethod].validation) {
    target[nameMethod].validation = {}
    }
    Object.assign(target[nameMethod].validation, {
        [position]: (value:string) => {
            if (value.includes('@')) {
                return value;
            }
            throw new Error("Not vald email")
    }} )
}

function Validation(_:any,_2:string,descriptor:PropertyDescriptor):PropertyDescriptor {
    const method = descriptor.value ;

    return {
        configurable: true,
        enumerable: false,
        get() {
            return (...args:any[]) => {
                if (method.validation) {
                    args.forEach((item,index) => {
                        if (method.validation[index]) {
                            args[index] = method.validation[index](item)
                        }
                    })
                }
                return method.apply(this,args)
            }
        }
    }
}

class PersonUser{
    @Validation
    setEmail(@CheckEmail email:string) {
        console.log("email",email)
    }
}

const personUser = new PersonUser();

personUser.setEmail("fusun@gmail.com")


// //////////////////////Декораторы свойств ///////////////////////////////////
interface ValidationConfig {
    [prop: string]: {
        [validationProp: string]: string[];
    }
}

const regidteredValidations: ValidationConfig = {};

function Required(target:any,propName:string) {
    regidteredValidations[target.constructor.name] = {
        ...regidteredValidations[target.constructor.name],
        [propName]:['required'],
}
}

function PositiveNumber(target:any,propName:string) {
    regidteredValidations[target.constructor.name] = {
        ...regidteredValidations[target.constructor.name],
        [propName]:['positive'],
}
}
function validation(obj:any) {
    const objectValidation = regidteredValidations[obj.constructor.name];

    if (!objectValidation) {
        return true;
    }
    let isValid = true;

 for (const prop in objectValidation) {
     for (const validProp of objectValidation[prop]){
         switch (validProp) {
             case "required":
                 isValid = isValid && !obj[prop];
                 break;
             case "positive":
                 isValid = isValid && obj[prop] > 0
                 break;
        }
    }
    }
    return isValid;
}

class Employee{
    @Required
    public name: string;
    @PositiveNumber
    public age: number;

    constructor(n:string,a:number) {
        this.name = n;
        this.age = a;
    }
}

const employee = new Employee("Fus", 1)

if (!validation(employee)) {
    console.log("Not valid")
} else {
    console.log("Valid")
}