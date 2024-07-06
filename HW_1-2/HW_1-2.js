//  HW1
console.log("HW1");
//////////////////////

/////// TASK 2 ///////

//////////////////////

{
  let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + "3",
    a4 = "5" - 3,
    a5 = 75 + "кг",
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = ((9 - 12) * 7) / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

  console.log(
    `task 2:
    ${a1 + " - " + typeof a1}
    ${a3 + " - " + typeof a3}
    ${a2 + " - " + typeof a2}
    ${a4 + " - " + typeof a4}
    ${a5 + " - " + typeof a5}
    ${a6 + " - " + typeof a6}
    ${a7 + " - " + typeof a7}
    ${a8 + " - " + typeof a8}
    ${a9 + " - " + typeof a9} 
    ${a10 + " - " + typeof a10}
    ${a11 + " - " + typeof a11}
    ${a12 + " - " + typeof a12}
    ${a13 + " - " + typeof a13}
    ${a14 + " - " + typeof a14}
    ${a15 + " - " + typeof a15}
    ${a16 + " - " + typeof a16}
    ${a17 + " - " + typeof a17}
    ${a18 + " - " + typeof a18}
  `
  );
}

//////////////////////

/////// TASK 4 ///////

//////////////////////

{
  let a7 = 100 / 25;
  let HCilindra = 10;
  let VCilindra = Math.PI * HCilindra ** 2 * a7;

  console.log("task 4:", VCilindra);
}

//////////////////////

/////// TASK 5 ///////

//////////////////////

{
  let r = 5;
  let SKruga = 2 * Math.PI * r;

  console.log("task 5:", SKruga);
}

//////////////////////

/////// TASK 6 ///////

//////////////////////

{
  let a = 5,
    b = 7,
    h = 10;

  let STrap = ((a + b) * h) / 2;

  console.log("task 6:", STrap);
}

//////////////////////

/////// TASK 7 ///////

//////////////////////

let S = 2,
  p = 0.1,
  years = 5;

let Pereplata = S * p * years;

console.log("task 7:", Pereplata);

//////////////////////

/////// TASK 8 ///////

//////////////////////

{
  let a = 8,
    b = 3;

  let firx = (a - 90) / (b - 6);
  let secx = 23780 / (3 + a + b);

  console.log("task 8:", firx, secx);
}

// HW 2
console.log("HW2");
// чучуть функций для 7 и 8 задания

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (n = Math.floor(Math.random() * (max - min + 1) + min));
}

//////////////////////

/////// TASK 1 ///////

//////////////////////

{
  let name = prompt("Имя"),
    age = prompt("Возраст"),
    phone = prompt("Номер телефона"),
    email = prompt("Электронная почта"),
    company = prompt("Компания"),
    city = prompt("Город проживания");

  console.log(
    `task 1:\n\nМеня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone} ,${email}.`
  );
}

//////////////////////

/////// TASK 5 ///////

//////////////////////

{
  let a = 10,
    b = 2;

  let summ = a + b,
    razn = a - b,
    umn = a * b,
    del = a / b;

  if (summ > 1) {
    kvadrat = summ ** 2;
  } else {
    kvadrat = "Условие не выполнено";
  }

  console.log(
    `task 5:\n\nСумма:${summ}\nРазность:${razn}\nУмножение:${umn}\nДеление:${del}\nКвадрат числа:${kvadrat}`
  );

  //////////////////////

  /////// TASK 6 ///////

  //////////////////////

  {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
      console.log(`task 6: Верно`);
    } else {
      console.log(`task 6: Неверно`);
    }
  }
}

//////////////////////

/////// TASK 7 ///////

//////////////////////

{
  getRandomInt(0, 59);

  if (n >= 0 && n <= 14) {
    console.log(`task 7: Число ${n} попадает в первую четверть`);
  } else if (n >= 15 && n <= 29) {
    console.log(`task 7: Число ${n} попадает во вторую четверть`);
  } else if (n >= 30 && n <= 44) {
    console.log(`task 7: Число ${n} попадает в третью четверть`);
  } else if (n >= 45 && n <= 59) {
    console.log(`task 7: Число ${n} попадает в четвёртую четверть`);
  }
}

//////////////////////

/////// TASK 8 ///////

//////////////////////

{
  getRandomInt(1, 31);

  if (n >= 1 && n <= 10) {
    console.log(`task 8: Число ${n} попадает в первую декаду`);
  } else if (n >= 11 && n <= 20) {
    console.log(`task 8: Число ${n} попадает во вторую декаду`);
  } else if (n >= 21 && n <= 31) {
    console.log(`task 8: Число ${n} попадает в третью декаду`);
  }
}

//////////////////////

/////// TASK 9 ///////

//////////////////////

// В своё время благодаря этому заданию я понял, что "дробное" число и число с "плавающей точкой" - не одно и то же.

{
  let day = prompt("Введите любое количество дней");

  let year = day / 365,
    month = day / 31,
    week = day / 7,
    hour = day * 24,
    minute = hour * 60,
    second = minute * 60,
    year_Full = Math.floor(year),
    month_Full = Math.floor(month),
    week_Full = Math.floor(week),
    hour_Full = Math.floor(hour),
    minute_Full = Math.floor(minute),
    second_Full = Math.floor(second);

  if (year_Full >= 1) {
    console.log(`${year_Full} г.`);
  } else if (year_Full <= 1) {
    console.log(`task 9: \n\n${day} Это:\n\nМеньше года`);
  }
  if (month_Full >= 1) {
    console.log(`${month_Full} м.`);
  } else if (month_Full <= 1) {
    console.log(`Меньше месяца`);
  }
  if (week_Full >= 1) {
    console.log(`${week_Full} нед.`);
  } else if (week_Full <= 1) {
    console.log(`Меньше недели`);
  }
  if (hour_Full >= 1) {
    console.log(`${hour_Full} ч.`);
  } else if (hour_Full <= 1) {
    console.log(`Меньше часа`);
  }
  if (minute_Full >= 1) {
    console.log(`${minute_Full} мин.`);
  } else if (minute_Full <= 1) {
    console.log(`Меньше минуты`);
  }
  if (second_Full >= 1) {
    console.log(`${second_Full} сек.`);
  } else if (second_Full <= 1) {
    console.log(`Меньше секунды`);
  }

  //////////////////////

  /////// TASK 10 //////

  //////////////////////

  let january = 31 * 1,
    february = 31 * 2,
    march = 31 * 3,
    april = 31 * 4,
    may = 31 * 5,
    june = 31 * 6,
    july = 31 * 7,
    august = 31 * 8,
    september = 31 * 9,
    october = 31 * 10,
    november = 31 * 11,
    december = 31 * 12;

  if (day <= january) {
    month = "Январь";
  } else if (day <= february && day > february - 31) {
    month = "Февраль";
  }
  if (day <= march && day > march - 31) {
    month = "Март";
  } else if (day <= april && day > april - 31) {
    month = "Апрель";
  }
  if (day <= may && day > may - 31) {
    month = "Май";
  } else if (day <= june && day > june - 31) {
    month = "Июнь";
  }
  if (day <= july && day > july - 31) {
    month = "Июль";
  } else if (day <= august && day > august - 31) {
    month = "Август";
  }
  if (day <= september && day > september - 31) {
    month = "Сентябрь";
  } else if (day <= october && day > october - 31) {
    month = "Октябрь";
  }
  if (day <= november && day > november - 31) {
    month = "Ноябрь";
  } else if (day <= december && day > december - 31) {
    month = "Декабрь";
  }
  let time_of_the_year;

  switch (month) {
    case "Март":
    case "Апрель":
    case "Май":
      time_of_the_year = "Весна";
      break;
    case "Июнь":
    case "Июль":
    case "Август":
      time_of_the_year = "Лето";
      break;
    case "Сентябрь":
    case "Октябрь":
    case "Ноябрь":
      time_of_the_year = "Осень";
      break;
    case "Декабрь":
    case "Январь":
    case "Февраль":
      time_of_the_year = "Зима";
      break;
    default:
      break;
  }
  console.log(
    `День в году: ${day}. Время года: ${time_of_the_year}, ${month}.`
  );
}

// Дополнительные задания:
console.log("Дополнительные задания");

//////////////////////

////// Задача 1 //////

//////////////////////

console.log("Задача 1:");

{
  let firNum = prompt("Введите первое однозначное число"),
    secNum = prompt("Введите второе однозначное число"),
    userAnswer = prompt("Чему равно произведение ваших чисел?");

  let realAnswer = firNum * secNum;

  if (userAnswer == realAnswer) {
    // Не стал засорять алертами итак перегруженное задание, вывел в консоль
    console.log(`${firNum}*${secNum}=${userAnswer}\n\nВаш ответ верен.`);
  } else {
    console.log(`${firNum}*${secNum}≠${userAnswer}\n\nВаш ответ неверен.`);
  }
}

//////////////////////

////// Задача 2 //////

//////////////////////

// Не задача, а моё почтение. А как её подругому решать то?

{
  getRandomInt(0, 59);

  let minute = n;
  console.log(minute);
  switch (minute) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      console.log(`Задача 2: Число ${minute} попало в первую четверть часа`);
      break;
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
      console.log(`Задача 2: ${minute} попало во вторую четверть часа`);
      break;
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
      console.log(`Задача 2: ${minute} попало в третью четверть часа`);
      break;
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
      console.log(`Задача 2: ${minute} попало в четвертую четверть часа`);
      break;
  }
}

//////////////////////

////// Задача 3 //////

//////////////////////

{
  let str = "abcde";
  if (str[0] === "a") {
    console.log("Задача 3: Да");
  } else {
    console.log("Задача 3: Нет");
  }
}

//////////////////////

////// Задача 4 //////

//////////////////////

{
  let str = "523456";
  if (str[0] === "1" || str[0] === "2" || str[0] === "3") {
    console.log("Задача 4: Да");
  } else {
    console.log("Задача 4: Нет");
  }
}

//////////////////////

////// Задача 5 //////

//////////////////////

{
  let str = "123",
    arrStr = str.split("");

  let firDecision = +str[0] + +str[1] + +str[2],
    secDecision = 0;

  // Ну это всё что я смог придумать в качестве второго способа
  for (i = 0; arrStr.length > i; i++) {
    secDecision += +arrStr[i];
  }
  console.log("Задача 5: " + firDecision, secDecision);
}

//////////////////////

////// Задача 6 //////

//////////////////////

{
  let a6 = 10;
  if (a6 == 0 || a6 == 2) {
    a6 = a6 + 7;
  } else {
    a6 = a6 / 10;
  }
  console.log(`Задача 6: Новое значение переменной равно ${a6}`);
}

//////////////////////

////// Задача 7 //////

//////////////////////

console.log("Задача 7:");

{
  let Stive = 21;
  if (Stive < 12) {
    console.log("Steve is a child");
  } else if (Stive >= 12 && Stive < 18) {
    console.log("Steve is a teenager");
  } else console.log("Steve is a aduld");

  switch (Stive) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      console.log("Steve is a child");
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      console.log("Steve is a teenager");
      break;
    default:
      console.log("Steve is a aduld");
  }

  Stive < 12
    ? console.log("Steve is a child")
    : Stive >= 12 && Stive < 18
    ? console.log("Steve is a teenager")
    : console.log("Steve is a aduld");
}

//////////////////////

////// Задача 8 //////

//////////////////////

{
  let firUserInput = prompt("Введите первое число"),
    secUserInput = prompt("Введите второе число");

  firUserInput > secUserInput
    ? console.log(`Задача 8: Большее число: ${firUserInput}`)
    : firUserInput < secUserInput
    ? console.log(`Задача 8: Большее число: ${secUserInput}`)
    : (firUserInput = secUserInput
        ? console.log("Задача 8: Числа равны")
        : console.log("Задача 8: Ты чё-то не ввёл"));
}

//////////////////////

////// Задача 9 //////

//////////////////////

{
  getRandomInt(0, 20);
  let x = n;
  getRandomInt(0, 20);
  let y = n;

  x > y
    ? console.log(`Задача 9: x (${x}) больше, чем y (${y})`)
    : console.log(`Задача 9: y (${y}) больше, чем x (${x})`);
}

//////////////////////

////// Задача 10 /////

//////////////////////

{
  let fir = prompt("Введите первую длинну"),
    sec = prompt("Введите вторую длинну"),
    thi = prompt("Введите третью длинну");

  if (fir + sec > thi && sec + thi > fir && thi + fir > sec) {
    console.log(`Задача 10: Треугольник со сторонами ${fir} ${sec} ${thi} может существовать`);
  } else {
    console.log(`Задача 10: Треугольник со сторонами ${fir} ${sec} ${thi} не может существовать`);
  }
}
