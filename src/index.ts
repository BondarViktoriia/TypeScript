// Задайте правильные ts типы, для классических js;
let age: number;
age = 50;
let nameUser: string;
nameUser = 'Max';
let toggle :boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;

let callback: (a: number) => number;
callback = (a) => { return 100 + a };

// Задавайте тип для переменной в которую можно сохранить любое значение.
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some:unknown;
some = 'Text';

let str: string;
if (some === "string") {
    str = some;
}

// 1)Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
let person: [string, number];
person = ['Max', 21];

// 2)Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Toggle{ "LOADING", "READY" }


// 3)Сделайте переменную, которая может принимать или строку или число.
let union: string | number;
union = 'Hello';
union = 5;

// 4)Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let active: "enable" | "disable"
active = 'disable';
active = 'enable';

// 5)Укажите типы для следующих функций
 function showMessage(message:string):void {
  console.log(message);
}

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

// Создайте свой тип данных на основе имеющихся данных.
type PageType = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
       createAt: string;
       updateAt: string;
  }
}

const page1:PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2:PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}