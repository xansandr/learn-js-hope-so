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
