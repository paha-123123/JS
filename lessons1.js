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


