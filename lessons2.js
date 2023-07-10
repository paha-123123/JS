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

const logins = 