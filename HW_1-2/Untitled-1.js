let word = ("b" + "a" + +"a" + "a").toLowerCase();
console.log(word);

// {
//   let price = 100,
//     discount = 0.2;
//   console.log(`task1: ${price - discount * 100}`);
// }
// {
//   let str =
//       "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь",
//     count = 0;
//   for (i = 0; i <= str.length - 1; i++) {
//     if (str[i] == "п") {
//       count++;
//     }
//   }
//   console.log(`task2: ${count}`);
// }
// {
//   let arr = [51, 56, 84, 69, 75];
//   let min = Number.MIN_VALUE;
//   for (i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   console.log(`task3: ${arr.length}`);
// }
// {
//   let arr = [
//       ["Иван", "Катя", "Ольга", "Максим"],
//       ["Минск", "Брест", "Гродно", "Могилев"],
//     ],
//     newArr = [];
//   for (i = 0; i < arr[0].length; i++) {
//     newArr.push(`${arr[0][i]} из ${arr[1][i]}`);
//   }
//   console.log(`task4: ${newArr}`);
// }
// {
//   let temperature = 22;
//   if (temperature < 0) {
//     temperature = 1;
//   } else if (temperature > 30) {
//     temperature = 2;
//   } else {
//     temperature = 3;
//   }
//   switch (temperature) {
//     case 1:
//       console.log("task5: Холодно");
//       break;
//     case 2:
//       console.log("task5: Жарко");
//       break;
//     case 3:
//       console.log("task5: Нормальная температура");
//       break;
//   }
// }
// {
//   // Не хочу засорять промптами, поэтому пусть лежит тут
//   let userInteger = 5,
//     fact = 1;
//   for (i = 1; i <= userInteger; i++) {
//     fact *= i;
//   }
//   console.log(`task6: ${fact}`);
// }
// {
//   let towns = "Морызь,Минск,Лепель,Гомель",
//     townsArr = towns.split(","),
//     moretownsArr = ["Витебск", "Солигорск", "Логойск"];
//   for (i = 0; i < moretownsArr.length; i++) {
//     townsArr.push(moretownsArr[i]);
//   }
//   console.log(`task6: ${townsArr}`);
// }
// {
//   let age = 17;
//   if (age > 18 && age < 65) {
//     console.log(`task7: Вы трудоспособны!`);
//   } else {
//     console.log(`task7: Вы нетрудоспособны!`);
//   }
// }
// {
//   let mArray = [
//       "Январь",
//       "Февраль",
//       "Март",
//       "Апрель",
//       "Май",
//       "Июнь",
//       "Июль",
//       "Август",
//       "Сентябрь",
//       "Октябрь",
//       "Ноябрь",
//       "Декабрь",
//     ],
//     numeredmArray = [],
//     i = 0;
//   while (i < mArray.length) {
//     numeredmArray.push(`${i + 1}. ${mArray[i]}`);
//     i++;
//   }
//   console.log(`task8: ${numeredmArray}`);
// }
// {
//   let arr = [1, 3, 4, 5, 6, 7, 8, 9];
//   // где num - искомое число
//   function searchIndex(num) {
//     if (arr.indexOf(num) !== -1) {
//       console.log(
//         `task9: Индекс искомой цифры в массиве равен: ${arr.indexOf(3)}`
//       );
//     } else {
//       console.log(`task9: Искомая цифра в массиве не найдена`);
//     }
//   }
//   searchIndex(3); // Допустим, программа ищет цифру "3"
//   // если хотим увидеть else, укажите значение "2"
// }
