/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
console.log('Задание 1');
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это 0`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`);
    }

}

/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/
console.log('Задание 2');
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/
console.log('Задание 3');
const getNewRandomArray = (len) => {
    const newRandomArray = [];
    for (let i = 0; i < len; i++) {
        const element = Math.floor(Math.random() * 10);
        newRandomArray.push(element);
    }
    return newRandomArray;
}

const randomArray = getNewRandomArray(5);
console.log('Массив случайных элементов', randomArray);

const sumElement = randomArray.reduce((el, acc) => acc + el, 0);
console.log('Сумма элементов массива', sumElement);
const minElement = Math.min(...randomArray);
console.log('Минимальный элемент массива', minElement);
const findElememt = randomArray.indexOf(3);
console.log('Число 3 найдено в массиве на позиции:', findElememt > -1 ? findElememt : 'Не найдено');

/*
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
*/

// В задании нарисовано 6 строк, а не 5, первая строка пустая, начну так-же с пустой строки
console.log('Необязательное задание');
let line = '';
for (let i = 0; i < 20; i++) {
    console.log(line);
    line += 'x';
}
console.log(line);
