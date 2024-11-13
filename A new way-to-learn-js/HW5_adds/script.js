{
  // Функция обратного порядка: Создайте функцию reverseString(str), которая принимает строку и возвращает её в обратном порядке

  function reverseString(str) {
    // arr - исходный массив
    return str.split("").reverse().join("");
  }
  console.log(reverseString("abcde")); // 'edcba
}
{
  // Функция для уникальных значений: Напишите функцию uniqueValues(arr), которая принимает массив и возвращает новый массив с уникальными значениями

  function uniqueValues1(arr) {
    // arr - исходный массив
    return arr.filter((element, i) => i === arr.indexOf(element));
  }
  console.log(uniqueValues1([1, 1, 2, 3, 4, 5, 5, 4, 5])); // [ 1, 2, 3, 4, 5 ]

  //   Также, можно воспользоваться обьектом "set", в котором значения могут встречаться лишь раз и если очень нужно, можно переделать его в массив

  function uniqueValues2(arr) {
    return Array.from(new Set(arr));
  }
  console.log(uniqueValues2([1, 1, 2, 3, 4, 5, 5, 4, 5])); // [ 1, 2, 3, 4, 5 ]
}
{
  // Функция находит общие элементы в двух массивах: Напишите функцию intersection(arr1, arr2), которая находит и возвращает общие элементы в двух массивах

  function intersection(arr1, arr2) {
    // arr1 и arr2 - исходные массивы
    return Array.from(
      new Set(arr1.filter((element, i) => arr2.indexOf(element) !== -1))
    );
  }

  console.log(
    intersection([1, 2, 2, 3, 3, 3, 4, 5, 6], [3, 2, 1, 2, 3, 7, 8, 9, 3, 3, 3]) // [1, 2, 3]
  );
}
{
  // Функция поиска элемента в массиве: Напишите функцию contains(arr, value), которая проверяет, содержится ли значение в массиве

  function contains(arr, value) {
    // arr - проверяемый массив, value - проверяемое значение
    return arr.indexOf(value) == -1 ? "Не содержится" : "Содержится";
  }
  console.log(contains([1, 2, 2, 3, 3, 3, 4, 5, 6], 1)); // 'Содержится'
}
{
  // Функция конвертации температуры: Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта

  // (0 °C × 9/5) + 32 = 32 °F
  function celsiusToFahrenheit(celsius) {
    // celsius - значение в градусах
    return celsius * (9 / 5) + 32;
  }
  console.log(celsiusToFahrenheit(30)); // 86
}

// Напишите функцию createArr(), которая создает массив, заполняемый "руками" (например, через prompt()), пока пользователь не введет пустую строку. Функция должна вернуть созданный массив.

function createArr() {
  let result = [];
  promptInput();
  function promptInput() {
    const someWhat = prompt("Введите штота");
    if (someWhat == "") {
      return;
    } else {
      result.push(someWhat);
      promptInput();
    }
  }
  return result;
}

console.log(createArr()); // воркает
