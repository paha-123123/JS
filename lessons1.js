// const tupe = typeof "usuefhusuef"
// console.log(tupe)
// узнать тип данных



// const x = confirm("будет ли подписка")
// console.log(x)

// const y = prompt("klsjfejio")
// console.log(y)
// уточнить в диалоговом окне что то



// let quantity = prompt("введите количкество товаров")
// quantity = Number(quantity)
// console.log(quantity)
// приведет строку к числу



// let elementWidth = '50.5px'
// elementWidth = Number.parseFloat(elementWidth)
// console.log(elementWidth)

// Выводит в консоль дробное число как в примере 50.5


// let elementWidth = '50.5px'
// elementWidth = Number.parseInt(elementWidth)
// console.log(elementWidth)
// console.log(typeof(elementWidth))
// Выводит в консоль целое число тоесть только 50 из примера



// let salary = 1300.1642
// salary = Number(salary.toFixed(1))
// console.log(salary)
// console.log(typeof (salary))

// отсеает лишние числа tofixed



// const base = 2
// const power = 5

// const result = Math.pow(base, power)


// console.log(result)

// приводит число в степень Math.pow(число,степень)




// Пример

// let x = prompt("Введите число")
// x = Number(x)
// let y = prompt("Ввведите степень")
// y = Number(y)

// const result = Math.pow(x, y)
// console.log(result)



// const max = 50
// const min = 25

// const result = Math.round(Math.random() * (max - min) + min)

// console.log(result)

// сделал рандомный выбор от 25 до 50 и округлил число







// const message = "jdk"
// console.log(message.length)

// првоерил сколько букв в тексте

// const firstName = "Pavel "
// const lastName = "Lilya"
// const fullName = firstName + ' ' + lastName
// console.log(fullName)

// const room = "715 "
// const type = "vip"


// const message = "Гость " + firstName + " " + lastName + "Заселится в номер " + room + "Класса " + type
// console.log(message)

// Конкатенация строк сшил строки в одно


// const message = `Гости ${firstName + lastName} заселятся в  ${type} номер ${room}`

// console.log(message)

// сделал все проще через шаблонные строки

  




// const brand = 'Samsung'
// const b = 'samsung'

// const normalized = brand.toLowerCase()
// const normalized = brand.toUpperCase()
// console.log(normalized)


// привел все в нижний регистр toLowerCase()
// привел все в верхний  регистр toUpperCase()



// const blackList = 'спам'
// const blackList2 = 'G'

// const string1 = "привет Павел это не спам "
// const string2 = 'sjejijsoijiojeo G'
// const string3 = 'Ghbdt G спам'

// const result = string1.includes(blackList,blackList2)
// console.log(result)

// ПРОВЕРИЛ НА СОВПАДЕНИЯ СЛОВ


// лОГИЧЕСКИЙ ОПЕРАТОР И &&
// Запинается на лжи
// возвращает первую ложь или если нет лжи то посл значение

// console.log(5 && 6 && 7 && 8 && 'hello')

// вернет "hello " так как нет лжи

// console.log(5 && 8 && 0 && 'hello')

// Вернет 0 так как это false



// Логичксиай оператор || ИЛИ
// запинается на правде
// возвращает первую правду либо последенее значение

// console.log(0 || null || false || 5 || undefined)

// вернет 5 так это первая правда

// console.log(0 || null || false || undefined)

// вернет undefined так как правды нет





// Решение задач


// 1 Напиши скрипт вхождения числа в отрезок обозначенный x1 x2

// const x1 = 10
// const x2 = 30
// const number = 50
// const a = number < x1
// console.log(a)
// const b = number > x2
// console.log(b)
// const c = number < x1 && number > x2
// console.log(c)
// const d = number < x1 || number > x2
//  console.log(d)



// напиши скрипт который проверяет возможность открыть чат с пользователем
// для этого он должен быть
// 1 другом
// онлайн
// без режима не беспокоить

// const isOnline = true
// const isFriend = true
// const isDnd = false

// const canOpenChat = isOnline && isFriend && !isDnd
// console.log(canOpenChat)


// смогу открыть чат если все условия выполнены


// Напиши скрипт проверки подписки при доступе к кконтенту
// есть два типа подписки бесплатаня и вип
// получить доступ могут только пользователи про или вип

// const sub = 'pro'
// const canAccesContent = sub === 'pro' || sub === 'vip'

// console.log(canAccesContent)



// оператор ветвления

// if () {
// // тело
// }


// Ветвление и цыклы








// const stars = 4
// let price

// else_if

// if (stars === 1) {
//     price = 20
// } else if (stars === 2) {
//     price = 30
// } else if (stars === 3) {
//     price = 50
// } else{
//     console.log("Такого количества звезд нет")
// }

// Сравнил через else_if количкество звезд и цены



// Switch

// const stars = 3
// let price

// switch (stars) {
//     case 1:
//         price = 20
//         break
//     case 2:
//         price = 30
//         break
//     case 3:
//         price = 50
        
//         break
//     default: console.log('такого количества звезд нет')


// }

// console.log(price)


// Сравнил через свитч количество звезд и цены





// Напиши скрипт выбора стоимости отеля по кл. звезд
// 1,2 - 20 3,4 - 30 5 - 120
//



// const stars = 3
// let price

// if (stars === 1 || stars === 2) {
//     price = 20
// } else if (stars === 2 ||stars === 3) {
//     price = 30
// } else if (stars === 4 || stars === 5) {
//     price = 50
// } else{
//     console.log("Такого количества звезд нет")
// }

// console.log(price)

// Обьединил два значения по одной цене else_if



// const stars = 4
// let price

// switch (stars) {
//     case 1:
//     case 2: price = 20
//         break
//     case 3:
//     case 4:
//         price = 50
//         break
//     case 5:
//         price = 120
//         break
//     default:console.log('Такого количества звезд нет')
// }

// console.log(price)


// Обьединил два значения по одной цене switch




// Напиши скрипт выбора опции доставки товара
// опции хранится в переменной option 1 - самовывоз 2 -курьер 3- почта
// в переменную message записать сообщения в зависимости от опции


// const option = 4
// let message

// switch (option) {
//     case 1:
//         message = 'Вы сможете забрать свой товар завтра в 12 - 00'
//         break
//     case 2:
//         message = 'Курьер доставит ваш товар завтра в 9 -00'
//         break
//     case 3:
//         message = 'Посылка будет отправлена сегодня'
//         break
//     default:
//         message = 'ТАкой опции нет,вам первозвонит менджер'
// }
// console.log(message)


// Цыкл For

// for (let i = 300; i < 500; i += 3) {
// console.log(i)}



// Напиши скрипт который подсчитывает сумму зарплат работников
// Количество работников хранится в переменной employees
// Зараплата работников это случайное число от 500 до 5000
// записать сумму totalSallary и вывести в консоль


// Написать переменную employees
// const minSalary = 500
// const maxSalary = 5000
// const employees = 3
// let totalSalary = 0

// for (let i = 1; i <= employees; i += 1) {
// const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
//     console.log(`Зп работник ${i} = ${salary}`)
//     totalSalary += salary
// }
// console.log(totalSalary)

//1. Перебрал работников
// 2.Сгенерил случайную зп
// 3.Приплюсовал к TotalSalary
// Вывел в окнсоль общу сумму зп



// Напиши скрпит которыцй подсчитывает сумму всех четных чисел
// которые аходят в диапазон переменных от мин до мах

// const min = 3
// const max = 13
// let total = 0

// // Перебираем через фор

// for (let i = min; i < max; i += 1) {

//     // Перберраем все четные числа
    // if (i % 2 === 0) {
    //     console.log('четное', i)
    //         total += i

    // }
    // Делится на два без остатка то число четное

    // записываем в тотатл
// console.log(i)
// }

// console.log(total)




// Напиши скрипт обработки покупки в магазине

// Баланас пользователя хранится в еременной balance
// Сумма покупки хранится в переменной payment


// Перед проверкой вывести сообщение
// общая стоимость закаpа [число] кредитов .Проверяем кл досутпных срежств на счету

// Если сумма покупки превыщает балнас вычесть из покупки сумму покупки
// вывести сообщение 'На счету осталось [число] кредитов'
// Если сумма покупки превышает баланс вывести сообщение 'На счету недосттаточно средств ддля проведения операции'
// В конце вывести сообщение операция завершена



// let balance = 10000
// const payment = 5000
// let mesage = `общая стоимость закаpа ${payment} кредитов .Проверяем кл досутпных срежств на счету`

// console.log(mesage)

// if (balance >= payment) {
//      balance -= payment
//     mesage = `На счету осталось ${balance} кредитов`
// } else {
// mesage = 'На счету недосттаточно средств ддля проведения операции' }

// console.log(mesage)
// console.log('В конце вывести сообщение операция завершена')



// Напиши скрипт подсчета сумы покупки со скидкой в зависимотси от потраченой суммы за все время (пратнерская програма)
// Общая сумма потраченная за все время хранится в переменной  totslSpent
// сумма текущего платежа хранится в переменгой payment
// Скидка хранится в переменной disount

// Если потрачено от 100 до 1000 - скидка 2 %
// Если потрачено от 1000 до 5000 - скидка 5 %
// если потрачено больше 5000 - скидка 10 %
// если потрачено меньше -  не партнер

// в резельаье вывести сообщение `Оформеление заказа  ${payment}` со скидкой ${discount}


// 1 вары

// let totalSpent = 2000
// let payment = 56000
// let discount = 0
// let mesage

// if (totalSpent > 100 && totalSpent < 1000) {
//     mesage = 'Вы являетесь бронзовым партром '
//     discount = 0.02
//     console.log(mesage)
// }
// else if (totalSpent > 1000 && totalSpent < 5000) {
//      mesage = 'Вы являетесь серебряным партром '
//     discount = 0.05
//     console.log(mesage)
// }
// else if (totalSpent > 5000) {
//      mesage = 'Вы являетесь золотым партром '
//     discount = 0.1

//     console.log(mesage)
// }
 
// else if (totalSpent < 100) {
//     console.log('Вы не являетесь партнером')
// }
// payment = payment - payment * discount
// totalSpent += payment

// console.log(`Оформеление заказа  ${payment} со скидкой ${discount * 100}%`)
// console.log(totalSpent)




// Находим кнопку с верстки в JS

  
   
const btnLink = document.querySelector('button')

console.log(btnAdd)