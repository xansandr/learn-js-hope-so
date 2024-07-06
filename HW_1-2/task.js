//  HW1

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
    `HW1 task 2:
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

