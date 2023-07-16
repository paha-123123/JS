// Перебираю массив поэлементно через цыкл фор

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// что бы обратится использу.ься квадратные скобки [индекс]


// цыкл For of

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const rybins = ['Pavel', 'Marat', 'Lilya']

// for (const rybin of rybins) {
//     console.log(rybin)
// }

// пребрал масисив с помощью for of


// Найдем имя члена семьи в масиве

// const rybins = ['Pavel', 'Marat', 'Lilya']
// const famyliName = 'Marat'
// let message
// for (const rybin of rybins) {
//     if (rybin === famyliName) {
//         message = 'Такое имя есть'
//         break
//     }
    
        
//         console.log(message)
// }


// const clients = ['Gfdfk', 'jseijfijeo', 'jkesnfnj']
// console.log(clients.length - 1)


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клиент с таким именем есть в базе данных!";
//         break;
//     } else {
//     message = 'ТАкого имени нет'}
// console.log(message)
// }

// const clients = ['pavel', 'lilya']
// console.log(clients)
// clients[0] = 'Marat'
// console.log(clients)
// Заменил в массиве элемент
// clients[2] = 'Alla'
// console.log(clients)
// Добавил новый элемент в массив

// const redult = clients.includes('Alla')
// console.log(redult)
// проверил есть в массиве элемент .includes

// const resdult2 = clients.indexOf('pavel')
// console.log(resdult2)


// const result = clients.join()
// console.log(result)
// Соеденил массив в строку .join


// const result2 = clients.push('Sasha', 'Ruzana')
// console.log(result2)
// console.log(clients)
// Добавил два элемента в конец массива .push

// const result3 = clients.pop()
// console.log(clients)
// Удалил последний элемент массива

// const result4 = clients.slice()
// console.log(clients)
// Вернул копию массива .slice

// const result5 = clients.splice(0, null, 'Ruzana')
// console.log(clients)
// Добавил элемент  вначло не удаляя старые .splice

// const result6 = clients(1, num, 'Valya', 'Misha')
// console.log(clients)
// Зменил эелемент .splice

// const result7 = clients.splice(1, 2)
// console.log(clients)




// const pawa = [1, 2, 3, 4, 5, 6]
// const lilya = [7, 8, 9, 10, 11, 12]
// const family = pawa.concat(lilya)
// console.log(family)
// обьеденил два массива в один .concat




// ДЛя получения индекса последнего элемента
// длина -1 .length -1



// const a = [1, 2, 3]
// const b = a
// const c = b
// console.log(a)
// console.log(b)
// console.log(c)

// a[0] = 500
// console.log(a)
// console.log(b)
// console.log(c)

// const a1 = a.push(400)
// console.log(a)
// console.log(b)
// console.log(c)

// Передача по ссылке массив отдельный элемент к которому ведут все переменные,заменяет во всех переменных
// на 500 так как массив отедльный элемент ссылка



// const friends = [1, 2, 3, 4]
// for (const friend of friends) {
// console.log(friend)
// }

// Перебрал массив и вывел все его данные for of

// const friends2 = [1, 2, 3, 4]
// for (let i = 0; i <= friends2.length - 1; i += 1) {
//     // console.log(friends2[i])
//     friends[i] += "-20"
// }
// console.log(friends)
// Перебрал обычным for используется для получения индекса элмента если индекс не надо тогда for of



// Посчитать обущю сумму покупок

// const carts = [134, 145, 144, 544]
// let total = 0



// for (let i = 0; i < carts.length; i += 1){
//     console.log(carts[i])
//     total += carts[i]
// }
// console.log(total)

// Перебрал цыклом for

// for (const cart of carts) {
//     console.log(cart)
// total += cart
// }
// console.log(total)

// Перебрал цыклом for of





// Напиши скрипт котрый посчитает сумму всех четных чисел в массиве

// 1 создать переменную тотал
// const numbers = [2, 4, 6, 40 ,200, 36, 43]
// let total = 0
// 2 перебрать в цыкле
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i])
//     if (numbers[i] % 2 === 0) {
//         console.log('четное',numbers[i])
//     total += numbers[i]}
// }
// console.log(total)

// добавить в переменую тотал


// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log('четное',number)
//     total += number}
// }
// console.log(total)




// напиши скрипт поиска логина если логин есть выведи сообщение 'логин найден ' если логи нет 'такого логина не найдено'

// const logins = ['maNgo', 'kiwi', 'poliscut']
// const loginToFind = 'maNgo'
// let message

// for (let login of logins) {
//     if (loginToFind === login) {
//         message = 'найден'
//         break
//     }
 
//     message = 'не найден'
// }

// console.log(message)

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i]
//      if (loginToFind === login) {
//         message = 'найден'
//         break
//     }
// message = 'не найден'
// }

// console.log(message)

// Сделал все через обычный For




// const result = logins.includes(loginToFind) ? 'найден' : 'не найден'

// console.log(result)

// Тоже самое использовал тернарник





// Напиши скрипт поиска самого маленького числа в масисве
// при условии если числа не повторяются


// const numbers = [51, 999, 34, 444, 59]
// let minNumber = numbers[0]

// for (let number of numbers){
//     // console.log(number)
    
//     if (minNumber < number) {
//    minNumber = number}
// }

// console.log(minNumber)

// перебрал и выявил самое маленькое чсило в массиве



// for (let number of numbers) {
//     console.log(number)

//     if (number > minNumber) {
//     minNumber = number}

// }
// console.log(minNumber)

// Выявил самое большое число в масисве



// напиши скрипт который обьеденяет все элементы массива в одностроковое
// значение
// элементов может быть произвольное количество
// пусть элементы массива будут разделены запятой
// сначала через For
// Потом  join

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
// let result = ''

// for (const friend of friends) {
 
//     result += friend + ','
  
// }
// result = result.slice(0, result.length -1)


// result = friends.join(',')

// const pawa = result.split()
// В кавычках передается чем будут разделены
// Метод join

// console.log(result)
// console.log(pawa)



// Напиши скрипт который заменяет регистр кажого символа в строке на противорположный
// Например если JavaScript то на выходе должно получистя jAVAsCRIPT


// const string = 'JaQmsciRRRRaScript'

// const letters = string.split('')
// let newLetter = ''


// console.log(letters)



// for (const letter of letters) {
    
//     if (letter === letter.toLowerCase()) {
//         // console.log('эта буква в нижнем регистре', letter)
//         newLetter += letter.toUpperCase()
//     } else  {
//     newLetter += letter.toLowerCase()
//     }

// } console.log(newLetter)

// Выполнил олд скул
// let newLetter = ''

// for (const letter of letters) {
// newLetter += letter === letter.toLocaleLowerCase() ? letter.toLocaleUpperCase() : letter.toLowerCase()
// }

// console.log(newLetter)

// Тоже самое только проще через тернарник


// Делаем slug в URL из названия статьи (например dev.to)
// заголовок статьи состоит только из букв и пробелов

// Нормализируем строку
// Разбивыаем по словам
// Сшиваем в строку с раздилителем


// const title = 'Top 10 benefits of React framework'
// const normalized = title.toLowerCase()
// console.log(normalized)

// const words = normalized.split(' ')
// console.log(words)

// const slug = words.join('-')
// console.log(slug)


// const slug1 = title.toLowerCase().split(' ').join('-')

// console.log(slug1)

// Сделал все проще вызвал поочередно все методы на одной переменной Декларативный код





// Напиши скрипт который считает сумму всех чисел массива

// const array1 = [1, 2, 3, 4]
// const array2 = [5, 6, 7, 8]
// let total = 0

// const array3 = array1.concat(array2)

// for (const arr of array3) {
//     console.log(arr)
//     total += arr
// }
// console.log(total)




// метод splice

// Работаем с колекцией карточек trello
// Удаляем добавляем заменяем

// const cards = ['Карточка-1','Карточка-2','Карточка-3','Карточка-4']

//     console.table(cards)
    // Удаление по индексу indexOf()

// const cardRemove = 'Карточка-3'
// const index = cards.indexOf(cardRemove)
// console.log(index)

// const remove = cards.splice(index, 2)
// console.log(cards)


// Замена

// const chench = cards.splice(2, 1, 'Rfeifsjjo')
// console.log(cards)


// Добавление

// const newCard = cards.splice(2, null, 'Dflbr','sdoijoiej')
// console.log(cards)





// Функции


// const add = function (x, y) {
//     const result = x + y
    
//   return result

// }

// add(73,14)


// const fn = function (value) {

//   if (value < 50) {
//     return "меньше чем 50"
//   }
//   return ' Больше чем 50'

// }

// console.log(fn(400))


// напиши функцию calculateTotalprice
// которая принимает массив цен
// const cart = [54, 22, 54, 26, 73, 98]
// const cart2 = [77,89,90,87,76]


// const calculateTotalprice = function (items) {
 
//     let total = 0
//   for (const item of items ) {

//  total += item  }
// return total
// }


// console.log(calculateTotalprice(cart))
// console.log(calculateTotalprice(cart2))



// Напиши функцию logItems(items) для перебора и логирования массива

// const logItems = function (items) {
//   for (const item of items) {
//  console.log(item)
//   }

// }


// logItems(['mango','kiwi','pawa'])

// logItems([15, 39, 33])




// Напиши функцию findLogin(allLogins , login) для поиска логина
// если логина нет вывести соббщения 'Пользователь [логин] не найден'
// // если логин есть вывести соббщения 'Пользователь [логин]  найден'


const logins = ['pawa', 'lilya', 'marat']



const findLogin = function (allLogins, login) {
  const message = logins.includes(login) ? `Пользователь ${login}  найден` : `Пользователь ${login} не найден`
  return message

}

console.log(findLogin(logins, 'pawa'))

console.log(findLogin(logins, 'misha'))
console.log(findLogin(logins, 'kolya'))
console.log(findLogin(logins,'marat'))