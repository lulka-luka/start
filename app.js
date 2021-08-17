'use strict';

let tc = +prompt("введите темературу в градусах по Цельсию");
let tf = (9 / 5) * tc + 32;
alert(tf);



let name = 'Василий';
let admin = name;
alert(admin);

/* к числу 10 прибавляем число 10 (получаем 20) и прибавляем текст "10",
т.к. к числу прибавляется текст проиходит конкатенация и получаем "2010", 
получившееся значение присваиваем в result */
let result1 = 10 + 10 + "10";
//выводим в консоль результат 2010
console.log(result1);


/*не явное приведение типов, получаем в результате конкатенации текст "101010",
получившееся значение присваиваем в result2 */
let result2 = 10 + "10" + 10;
//выводим в консоль результат 101010
console.log(result2);


/*применение унарного плюса; т.к. перед текстом "10" стоит знак + получим приведение этого текста
к числу, в результате получим результат сложения 10+10+10,
получившееся значение 30 присваиваем в result3 */
let result3 = 10 + 10 + +"10";
//выводим в консоль результат 30
console.log(result3);



/*унарный минус перед "" дает значение -0,
в рузультате деления на -0 получим -Infinity,
получившееся значение присваиваем в result4 */
let result4 = 10 / -"";
//выводим в консоль результат
console.log(result4);


/*применение унарного плюса перед текстом подразумевало получение числового типа, 
но в числах применяется . для обозначения дробных чисел,
в результате этой ошибки получим значение NaN,

в результате деления на NaN получаем NaN
получившееся значение присваиваем в result5 */
let result5 = 10 / +"2,5";
//выводим в консоль результат
console.log(result5);