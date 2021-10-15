console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudents {
    name: string
    surname: string
    groupNumber: number
    progress: number[]
    averageMark: number
}

class Student implements IStudents {
    averageMark: number

    constructor(public name: string, public surname: string, public groupNumber: number, public progress: number[]) {
        this.name = name;
        this.surname = surname;
        this.groupNumber = groupNumber;
        this.progress = progress;
        this.averageMark = this.progress.reduce((sum, mark) => Math.round(sum + mark)) / this.progress.length;
    }

    private static sortStudents(s1: IStudents, s2: IStudents) {
        if (s1.averageMark > s2.averageMark) {
            return 1;
        } else if (s1.averageMark < s2.averageMark) {
            return -1;
        } else {
            return 0;
        }
    }

    static sort(arr: Array<IStudents>) {
        const temp = [...arr];
        return temp.sort(this.sortStudents);
    }

    private static isAllMarksEqual(marks: number[], searchMark: number) {
        return marks.every(m => m === searchMark);
    }

    private static filterStudents(arr: Array<IStudents>) {
        // const temp = [...arr];
        return arr.filter(s => this.isAllMarksEqual(s.progress, 4) || this.isAllMarksEqual(s.progress, 5));
    }

    static printGoodStudents(arr: Array<IStudents>) {
        this.filterStudents(arr).forEach(s => {
            console.log(`Student - ${s.surname}, Group - ${s.groupNumber}, AverageMark - ${s.averageMark}`)
        })
    }
}

let students = []
students.push(new Student('Evgen', 'Sheuchuk', 1, [4, 4, 4, 4, 4]))
students.push(new Student('Eva', 'Shuckach', 2, [2, 4, 4, 3, 3]))
students.push(new Student('Anna', 'Bobus', 3, [5, 4, 3, 4, 5]))
students.push(new Student('Svetlana', 'Voranchuk', 4, [5, 5, 5, 5, 5]))

console.log(students);
console.log(Student.sort(students));
Student.printGoodStudents(students);

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

interface IExpression {
    a: number
    b: number
}

class Expression implements IExpression {

    constructor(public a: number, public b: number) {
    }

}

let expression = new Expression(15, 25)

let expr = expression

//@ts-ignore
expression.delete = function () {
    //@ts-ignore
    return expression = null
}

console.log(expression)

//@ts-ignore
console.log(expression.delete())
console.log(expression)
console.log(expr)

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

interface IDataTime {
    hours: number
    minutes: number
    seconds: number
}

class Time implements IDataTime {

    constructor(public hours: number = 0, public minutes: number = 0, public seconds: number = 0) {
    }

    changeHour(value: number) {
        return this.hours = value
    }

    changeMinutes(value: number) {
        return this.minutes = value
    }

    changeSeconds(value: number) {
        return this.seconds = value
    }

    get time()   {

        let hours = this.hours > 9 ? this.hours : `0${this.hours}`;
        const minutes = this.minutes > 9 ? this.minutes : `0${this.minutes}`;
        const seconds = this.seconds > 9 ? this.seconds : `0${this.seconds}`;

        const tryCatchFn = (value: string) => {
            try {
                throw new Error(`Недопустимое значение ${value}, максимальное значение 59`)
            } catch (e) {
                console.error(e)
                return 1
            }
        }

         switch(true) {
            case (hours > 59): {
                tryCatchFn('в часах: '+ hours)
                break
            }
            case (minutes > 59): {
                tryCatchFn('в минутах: '+ minutes)
                break
            }
            case (seconds > 59): {
                tryCatchFn('в секундах: '+ seconds)
                break
            }
             default: return `getTime: ${hours}:${minutes}:${seconds}`
        }
    }
}

const localTime = new Time(10, 0, 55)

console.log(localTime.time)
console.log(localTime.hours)
console.log(localTime.minutes)
console.log(localTime.seconds)
console.log(localTime.changeHour(10))
console.log(localTime.changeMinutes(20))
console.log(localTime.changeSeconds(30))
console.log(localTime.time)


// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};