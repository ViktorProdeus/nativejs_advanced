console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Function / Class, Loops, IF/Else, Switch, Try/catch, Anonimus code

// var, function - functional
// let, const - block

// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     b: 500, // undefined => 500
//     a: 10,
//     c: 1000,
// }
//
//
// let a = 10;
// function f() {
//
// }
// var b = 500;
// const c = 1000;


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 500, // 10 => 500
// }
//
// let a = 10;
//
// function f() {
//     let functionFScope = {
//         outerScope: globalScope,
//         b: 500,
//     }
//     console.log(a);
//     let b = 500;
//     a = b;
// }
//
// f();
// console.log(a);


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 500, // 10 => 500
//     c: 'Function',
// }
//
// let a = 10;
//
// function f() {
//     let functionFScope = {
//         outerScope: globalScope,
//         h: 'Function',
//         b: 500,
//     }
//     console.log(a);
//     let b = 500;
//     function h() {
//         let functionHScope = {
//             outerScope: functionFScope,
//         }
//         console.log(b);
//         a = b;
//     }
//     return h;
// }
//
// let c = f();
// console.log(a);
//
// c();
// console.log(a);


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 10,
//     c: 'Function',
// }
//
// let a = 10;
//
// function f() {
//     let functionFScope = {
//         outerScope: globalScope,
//         h: 'Function',
//         a: 500, // 66 => 500
//         b: 500,
//     }
//     let a = 66;
//     console.log(a);
//     let b = 500;
//     function h() {
//         let functionHScope = {
//             outerScope: functionFScope,
//         }
//         console.log(b);
//         a += b + 50;
//     }
//     return h;
// }
//
// let c = f();
// console.log(a);
//
// c();
// c();
// c();
// console.log(a);


// Recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(n: number) {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }

// function sumTo(n: number): number {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }
//
// console.log(sumTo(3));

// function sumTo(n: number, acc: number): number {
//     if (n === 1) return n + acc;
//     return sumTo(n - 1, acc + n);
// }
//
// console.log(sumTo(3, 0));


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(n: number) {
//     let sumScope = {
//         outerScope: global,
//         n: 3,
//     }
//     return function (n2: number) {
//         let anonimScope = {
//             outerScope: sumScope,
//             n2: 6,
//         }
//         return n + n2;
//     }
// }
//
// console.log('3 + 6', sum(3)(6));


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let makeCounterScope = {
//         outerScope: global,
//         count: 4, // 0 => 1 => 2 => 3 => 4
//     }
//     let makeCounterScope2 = {
//         outerScope: global,
//         count: 1, //  0 => 1
//     }
//     let count = 0;
//     return function () {
//         let anonimFunctionScope = {
//             outerScope: makeCounterScope,
//         }
//         let anonimFunctionScope2 = {
//             outerScope: makeCounterScope2,
//         }
//         return ++count;
//     }
// }
//
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// const counter2 = makeCounter();
// console.log(counter2());
// console.log(counter());


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(num: number) {
    if (num <= 0) return 0;
    if (num === 1) return (n: number) => n;

    let acc: number[] = [];

    function helper(...args: number[]) {
        acc = [...acc, ...args];
        if (acc.length >= num) {
            acc.length = num;
            return acc.reduce((acc, number) => acc + number);
        } else {
            return helper;
        }
    }

    return helper;
}

//@ts-ignore
console.log(superSum(3)(2, 5, 3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3, 9));

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//@ts-ignore
// function sumTo(n: number) {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }

// function sumTo(n: number) {
//     return n * (n + 1) / 2;
// }

function sumTo(n: number) { // 1)
    let sum = 0
    let i = 0;

    while (i <= n) {
        sum += i;
        i++;
    }
    return sum
}

console.log(sumTo(1)) // = 1
console.log(sumTo(2)) // = 2 + 1 = 3
console.log(sumTo(3)) // = 3 + 2 + 1 = 6
console.log(sumTo(4)) // = 4 + 3 + 2 + 1 = 10

console.log(sumTo(100)) // = 100 + 99 + ... + 2 + 1 = 5050


//@ts-ignore
function fib(n: number) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2);
}

//@ts-ignore
console.log('fib', fib(6))
//@ts-ignore
// console.log('fib', fib( 4))


//@ts-ignore
function factorial(n: number) {
    if (n === 1) return n
    return n * factorial(n - 1);
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(3))
console.log(factorial(2))
console.log(factorial(1))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.


const flatten = (array: any[]) => {
    let flattEnd: number[] = [];

    const flat = (array: number[]) => {
        array.forEach((el: number) => (Array.isArray(el)) ? flat(el) : flattEnd.push(el));
    };

    flat(array);

    return flattEnd;
}

const arr1 = [[1, 23, 4, 5], [43, 2], 5, 6, 7, 8];
const arr2 = [1, [23, [4, 5, 43, 2], 5, 6], 7, 8];

const flatArr1 = flatten(arr1)
const flatArr2 = flatten(arr2)

console.log(flatArr1)
console.log(flatArr2)

// just a plug
export default () => {
};

