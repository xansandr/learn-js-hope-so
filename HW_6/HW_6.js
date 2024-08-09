// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.
{
  function task1(str) {
    return str.replace(/@/g, "!");
  }
  {
    let strtask1 = "aaa@bbb@ccc";
    //   console.log(task1(strtask1));
  }
}
// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.
{
  function task2(str) {
    return str.split("-").reverse().join("/");
  }
  {
    let date = "2025-12-31";
    // console.log(task2(date));
  }
}
// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).
{
  function task3(str) {
    let arr = [];
    arr.push(
      `${str.substr(2, 14)} | ${str.substring(2, str.length - 1)} | ${str.slice(
        2,
        -1
      )}`
    );
    return arr;
  }
  {
    let str = "Я учу javascript!";
    // console.log(task3(str));
  }
}
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
//  no reduce()? 🥺
{
  function task4(arr) {
    for (i = 0; i < arr.length; i++) {
      arr[i] = Math.pow(arr[i], 3);
    }
    return arr;
  }
  {
    let arr = [4, 2, 5, 19, 13, 0, 10];
    //   console.log(task4(arr));
  }
}
// Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
{
  function task5(a, b) {
    let c = a - b;
    return Math.abs(c);
  }
  {
    // case 1
    let a = 3,
      b = 5;
    // console.log(task5(a, b));
  }
  {
    // case 2
    let a = 6,
      b = 1;
    //   console.log(task5(a, b));
  }
}
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
{
  function task6(date) {
    function z(a) {
      if (a < 10) {
        return (a = "0" + a.toString());
      } else return a;
    }

    let hhmmss = [],
      ddmmyy = [];

    hhmmss.push(z(date.getHours()));
    hhmmss.push(z(date.getMinutes()));
    hhmmss.push(z(date.getSeconds()));
    ddmmyy.push(z(date.getDay()));
    ddmmyy.push(z(date.getMonth()));
    ddmmyy.push(z(date.getFullYear()));

    return `${hhmmss.join(":")} ${ddmmyy.join(".")}`;
  }
  {
    let date = new Date();
    //   console.log(task6(date));
  }
}
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
{
  function task7(str) {
    return str.match(/ab+a/g);
  }
  {
    let string = "aa aba abba abbba abca abea";
    // console.log(task7(string));
  }
}
//     Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.
{
  function task8(number) {
    return /^(\+|\A)([0-9]{1,4})([\(|\s][0-9]{1,4}[\)|\s]?)([0-9]{7,8})/.test(
      number
    );
    //1: где ^(\+|\A) - проверяет, есть ли "+" в начале строки
    //2: ([0-9]{1-4}) - проверка кода страны (большее что нашёл - 4 значение в символа)
    //3: ([\(|\s][0-9]{1,4}[\)|\s]?) - проверяет, стоит ли в начале и в конце кода города или сети знак "(" или " " и ")" или " " соответственно.
    //4: ([0-9]{7,8}) - проверяет длинну самого номера, в диапазоне от 7 до 8;

    // Вообще, очень, кхм, отвратительно составлены условия. Ни что такое международный формат, ни диапазон кодов страны, ни кейс для кодов городов/сети не сказано, поэтому пришлось гуглить вышеперечисленные части и составлять своё понимание задания, как говорится, "Без внятного ТЗ - результат ХЗ"
  }
  {
    let n1 = "+375(29)1117679",
      n2 = "+7(29)1117679",
      n3 = "375(29299)1117679",
      n4 = "+375291117679",
      n5 = "+375 29 1117679",
      n6 = "375(29)1117679";
    // console.log(task8(n1));
    // console.log(task8(n2));
    // console.log(task8(n3));
    // console.log(task8(n4));
    // console.log(task8(n5));
    // console.log(task8(n6));
  }
}
{
  function task9(mail) {
    let firRegex = /^[a-zA-Z0-9_.\-]*[@]?[a-zA-Z0-9_.\-]*$/,
      secRegex = /^[a-zA-Z]+[a-zA-Z0-9]{2,}[@]?[a-zA-Z_.\-]*$/,
      thiRegex = /[@]([a-zA-Z0-9_-]{2,})+([.][a-zA-Z0-9_-]{2,11}?)+$/,
      firCondition = firRegex.test(mail),
      secCondition = secRegex.test(mail),
      thiCondition = thiRegex.test(mail);

    if (firCondition && secCondition && thiCondition) {
      return true;
    } else return false;
  }
  {
    let tests = {
      email_1: "name@gmail.com", // true
      email_2: "na me@gmail.com", // false
      email_3: "name@gma@il.com", // false
      email_4: "name@gmail..com", // false
      email_5: "na@gmail.com", // false
      email_6: "sergey@yandex.ru", // true
      email_7: "sergey1987@yandex.ru", // true
      email_8: "sergey.1987@yan.dex.ru", // false
      email_9: "sergey1987@communism-delo-pravoye.da.ru", // true
      email_10: "sergey1987@ru.communism-delo-pravoye", // false
      email_11: "sergey1987@yande.x.ru", // false
      email_12: "sergey1987@yan.dex.ru", // true
    };
    for (key in tests) {
      // console.log(task9(tests[key]));
    }
  }
}
// Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.
{
  {
    function task10(url) {
      let array = [];
      let domainRegex =
        /([https:\/\?]*[\w\.]+)([\w\/.-]*)([\/?])?([\w\/.,:+=\-%&]*)([\w\/#.=&-]*)/;
      let parseUrl = url.match(domainRegex);
      // console.log(parseUrl); // Нужна для наглядности, чтобы понять, правильно ли регулярка пережевала строку
      array = parseUrl.filter(function (elem, i) {
        if (
          elem !== "?" &&
          elem !== "" &&
          elem !== undefined &&
          i !== 0 &&  // Да, магические костыли, ну и что?
          i !== 2     // Я бестолочь, мне можно  🥺
        ) {
          array.push(elem);
          return array;
        }
      });
      return array;
    }
  }
  {
    let url1 =
        "http://chart.apis.google.com/chart?chs=500x500&chma=0,0,100,100&cht=p&chco=FF0000%2CFFFF00%7CFF8000%2C00FF00%7C00FF00%2C0000FF&chd=t%3A122%2C42%2C17%2C10%2C8%2C7%2C7%2C7%2C7%2C6%2C6%2C6%2C6%2C5%2C5&chl=122%7C42%7C17%7C10%7C8%7C7%7C7%7C7%7C7%7C6%7C6%7C6%7C6%7C5%7C5&chdl=android%7Cjava%7Cstack-trace%7Cbroadcastreceiver%7Candroid-ndk%7Cuser-agent%7Candroid-webview%7Cwebview%7Cbackground%7Cmultithreading%7Candroid-source%7Csms%7Cadb%7Csollections%7Cactivity",
      url2 = "https://www.google.com/search?sca_esv=f4efe242ec4104b1&sxsrf=ADLYWILts9c4wdbwS9A7fGL4suv-yIpP9Q:1723192576744&q=%D0%BC%D0%B5%D0%BC+%D0%BF%D1%80%D0%BE+%D0%BC%D0%B0%D1%88%D1%83+%D0%BD%D0%B8%D0%B3%D0%B3%D0%B5%D1%80&udm=2&fbs=AEQNm0AdhsFXPYFVRvieGr8MIIuGGXTNj7vbsd1tZuI658_hfCTfEBTLh6VWBq8UW4trP8NlThj0iWdf9vwFc3A9G__LBPyIhwp1SM6T_KHl8KpsikLMahvuRBFP44mGCh6u4FXNHL68ZqRZlMGTD_qqpAF6gvKVlpkjRx45sEqI1hOC9VFQbfYTjA-fTtj3E2pC4yx3f9GzrNQpxJZS6StoViRI4QJIOxtm4Tdj_8ToXSIiyNcDzBQ&sa=X&ved=2ahUKEwi3garLwOeHAxWlhf0HHZ1xB8MQtKgLegQICRAB&biw=970&bih=1274&dpr=1#vhid=iey1bYw9x912YM&vssid=mosaic",
      url3 =
        "https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3";

    console.log(task10(url1));
    console.log(task10(url2));
    console.log(task10(url3));
  }
}
