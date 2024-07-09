//  HW3
console.log("HW3");
//////////////////////

/////// TASK 1 ///////

//////////////////////

{
  let firArray = [],
    secArray = [];
  for (let i = 1; i <= 50; i++) {
    //  Вложил всё в массив, дабы не слишком засоряло консоль
    firArray.push(i);
  }
  for (let i = 35; i >= 8; i--) {
    secArray.push(i);
  }
  console.log("task: 1 \n", firArray, secArray);
}

//////////////////////

/////// TASK 2 ///////

//////////////////////

{
  document.write(`<br />task 2:<br /><br />`);
  let num = 89;
  while (num >= 11) {
    document.write(`${num}<br />`);
    num--;
  }
}

//////////////////////

/////// TASK 3 ///////

//////////////////////

{
  let num = 0,
    sumNum = 0;
  for (i = 0; i < 100; i++) {
    num = num + 1;
    sumNum += num;
  }
  console.log(`task 3: Сумма чисел от 0 до 100 = ${sumNum}`);
}

//////////////////////

/////// TASK 4 ///////

//////////////////////

console.log("task 4:");

{
  for (i = 1; i <= 5; i++) {
    sum = 0;
    for (y = 1; y <= i; y++) {
      sum += y;
    }
    console.log(sum);
  }
}

//////////////////////

/////// TASK 5 ///////

//////////////////////

{
  let num = 8,
    arr1 = [],
    arr2 = [];
  while (num <= 56) {
    num % 2 === 0 ? arr1.push(num) : num == num;
    num++;
  }
  console.log(`task 5: Четные числа ${arr1}`);
  for (i = 8; i <= 56; i++) {
    i % 2 === 0 ? arr2.push(i) : i == i;
  }
  console.log(arr2);
}

//////////////////////

/////// TASK 6 ///////

//////////////////////

{
  let arr = [];
  for (i = 1; i <= 10; i++) {
    for (y = 1; y <= 10; y++) {
      sum = i * y;
      arr.push(`${i}*${y}=${sum}`);
    }
  }
  console.log("task 6:", arr);
}

//////////////////////

/////// TASK 7 ///////

//////////////////////

{
  for (let n = 1000, num = 0; n > 50; num++) {
    n /= 2;
    if (n < 50) {
      console.log(
        `Получится число: ${n}, количество итераций произведено: ${num}`
      );
    }
  }
}

//////////////////////

/////// TASK 8 ///////

//////////////////////

// {
//   for (let amountOfNumber = 0, summ = 0; ; amountOfNumber++) {
//     inputNumber = prompt("Введите число");
//     summ += +inputNumber;
//     arithmeticMean = summ / amountOfNumber;
//     if (summ !== parseFloat(summ)) {
//       console.log("Ошибка ввода, можно вводить только числа.");
//       break;
//     }
//     if (inputNumber === "" || inputNumber == "0") {
//       console.log(
//         `Общая сумма: ${summ}. Среднее арифметическое: ${arithmeticMean}`
//       );
//       break;
//     }
//   }
// }

//////////////////////

/////// TASK 9 ///////

//////////////////////

// Задание конечно, моё почтение

{
  // способ здорового человека
  let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
  let arr = str.split(" "),
    min = Math.min(...arr),
    max = Math.max(...arr);

  console.log(`Самое маленькое: ${min}, Самое большое: ${max}`);
}

{
  // способ курильщика
  let string = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
  let bufer = "",
    max,
    min;
  for (let number = 0; number < string.length; number++) {
    bufer += string[number];
    if (+string[number] && !+string[number + 1]) {
      if (typeof max !== "number" || bufer > +max) max = +bufer;
      if (typeof min !== "number" || bufer < +min) min = +bufer;
      bufer = "";
    }
  }
  console.log(`Самое маленькое: ${min}, Самое большое: ${max}`);
}

//////////////////////

/////// TASK 10 //////

//////////////////////

{
  let n = 1209,
    numbers = n.toString().split("");
  let numbersLength = numbers.length;
  let summ = 0;
  for (let i = 0; i < numbersLength; i++) {
    summ += +numbers[i];
  }
  let reverse = "";
  for (let i = numbersLength - 1; i >= 0; i--) {
    reverse += numbers[i];
  }
  console.log(
    ` а. ${numbers}\n\n b. ${numbersLength}\n\n c. ${summ}\n\n d. ${reverse}`
  );
}
