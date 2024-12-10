{
  // 1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.
  let exsArray = [];

  function citiesExp(userInput) {
    !userInput
      ? exsArray.push(prompt("Введите новый город"))
      : userInput.split(", ").forEach((element) => {
          exsArray.push(element.toLowerCase());
        });
    return exsArray.sort();
  }

  citiesExp("А, В, Г, б, д"); // [ 'а', 'б', 'в', 'г', 'д' ]
  // citiesExp(); // Работает
  console.log(exsArray);
}
{
  // 2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.
  let array = [
    ["Иван", "Катя", "Ольга", "Максим"],
    ["Минск", "Брест", "Гродно", "Могилев"],
  ];
  let distanceArr = [0, 351, 276, 197]; // Вообще, хотелось бы сделать это условие не через массив, а используя объекты, находя нужные значения по ключам, так что можно будет позже вернуться к этой задаче с новыми знаниями

  // Честно говоря, еще когда я делал это задание в первый раз не совсем понял, зачем перегружать это всё вложенными циклами, но как говорится, забавное тз - результат хз
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array[i].length; j++) {
      console.log(`${array[i][j]} из ${array[i + 1][j]}`);
    }
  }

  function distanceBetween(firstPerson, secondPerson) {
    return `Расстояние между ${firstPerson} и ${secondPerson} равно ${
      distanceArr[array[0].indexOf(firstPerson)] + distanceArr[array[0].indexOf(secondPerson)]
    }`;
  }
  console.log(distanceBetween("Ольга", "Катя")); // Расстояние между Ольга и Катя равно 627
}
{
  // 3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).
  function amountDaysBetween(firstDate, secondDate) {
    let milSecBetween = Math.abs(new Date(firstDate) - new Date(secondDate));
    switch (true) {
      case milSecBetween < 259200000: // количество мсек в 3 днях
        return "Дата уже близко";
      case milSecBetween > 259200000 && milSecBetween <= 604800000:
        return "Eще есть время";
      case milSecBetween > 604800000: // количество мсек в 7 днях
        return "Далековато еще";
    }
  }
  console.log(amountDaysBetween("2022-02-20", "2025-09-16")); // Кто понял отсылку + в чай
}
{
  // 4. Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).
  function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    console.log(fahrenheit);
    switch (true) {
      case fahrenheit > 5 && fahrenheit <= 10:
        return "сегодня прохладнее, чем обычно";
      case fahrenheit > 0 && fahrenheit <= 5:
        return "одевайтесь теплее";
      case fahrenheit > -5 && fahrenheit <= 0:
        return "сегодня очень холодно";
      case fahrenheit < -5:
        return "оставайтесь дома";
      default:
        return "а чё сюда писать то";
    }
  }
  console.log(celsiusToFahrenheit(5));
}
{
  // 5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.
  function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(randomElement([10, 11, 12, 13, 14]));
}
{
  // 6. Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига.

  function encrypter(latinString, sdvig) {
    return latinString
      .split("")
      .map((index) => {
        return String.fromCharCode(index.charCodeAt() + sdvig);
      })
      .join("");
  }

  function decrypter(encryptedString, sdvig) {
    return encryptedString
      .split("")
      .map((index) => {
        return String.fromCharCode(index.charCodeAt() - sdvig);
      })
      .join("");
  }

  let encryptedString = encrypter("table", 2);
  let decryptedString = decrypter(encryptedString, 2);
  console.log(encryptedString); // vcdng
  console.log(decryptedString); // table
}
{
  // 7. Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.
  function getRandomPassword(passLength) {
    let rangeArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "_-,.&*^$#@+=!"];
    let passwordArr = [];
    let getRandomInt = (max) => Math.floor(Math.random() * max); // Возвращает случайное число от 0 до max
    let getSymbType = () => getRandomInt(rangeArray.length); // Возвращает случайный индекс элемента массива rangeArray, значение которого является пуллом типа символа
    let getSymb = (symbType) => getRandomInt(rangeArray[symbType].length); // Возвращает случайный индекс строки, взятый из элемента массива rangeArray
    let intersection = (arr1, arr2) => arr1.filter((element, i) => arr2.indexOf(element) !== -1); //  Возвращает совпадение между двумя массивами

    fillPasswordArr(passLength);

    function fillPasswordArr(passLength) {
      while (passwordArr.length !== passLength) {
        const randSymbType = getSymbType();
        const randSymb = getSymb(randSymbType);
        passwordArr.push(rangeArray[randSymbType][randSymb]);
      }
    }
    if (
      intersection(rangeArray[1].split(""), passwordArr).length >= 1 &&
      intersection(rangeArray[2].split(""), passwordArr).length >= 1 &&
      intersection(rangeArray[3].split(""), passwordArr).length >= 1
    ) {
      let password = passwordArr.join(""); // Мне сказали привыкать выносить в отдельную переменную результат функции, зачем, правда, не сказали, но я уже привык
      return password;
    } else {
      return getRandomPassword(passLength); // Рекурсия в return, разве это не военное преступление?
    }
  }
  console.log(getRandomPassword(3));
}
{
  // 8. Создайте функцию, которая создает произвольный HTML-элемент в <body> в виде круга/овала/квадрата/прямоугольника. Функция должна принимать параметры: width, height, radius, color; создавать запись "<div style="width: 200px; height: 100px, border-radius: 5px; background-color: red;"></div>". Данное значение добавляйте через document.write. Подумайте о том, как сделать случайную генерацию фигур по вызову функции без параметров.
  function createElement(width, height, radius, color) {
    let getRandomInt = (max) => Math.floor(Math.random() * max);
    let getColor = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    !arguments.length ? createRandomElement() : createParamElement(width, height, radius, color);

    function createRandomElement(figure) {
      document.write(
        `<div style="width: ${(width = getRandomInt(500))}px; height: ${(height = getRandomInt(2)
          ? getRandomInt(500)
          : width)}px; border-radius: ${(radius = getRandomInt(2)
          ? getRandomInt(1000)
          : 0)}px; background-color: ${(color = getColor())};"></div>`
      );
    }
    function createParamElement(width, height, radius, color) {
      document.write(
        `<div style="width: ${width}px; height: ${height}px; border-radius: ${radius}px; background-color: ${color};"></div>`
      );
    }
  }
  createElement(100, 100, 100, "red"); // Работает
  createElement(); // Работает
}
{
  // [18+] Создайте функцию-цензор, которая проверяет текст на наличие нецензурных слов и заменяет их на "#".
  let anyText = `"В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка."`;
  let badWords = ["нахрен", "черт", "бляха"];

  function rosCumNadzor(anyText, uncensoredWordsArr) {
    uncensoredWordsArr.forEach((element) => {
      let re = new RegExp(element, "g");
      anyText = anyText.replace(re, "#");
    });
    return anyText;
  }

  console.log(rosCumNadzor(anyText, badWords));
}
