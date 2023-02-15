function somar() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("result");
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);

  let res = n1 + n2;

  result.innerHTML = `${n1 + n2}`;
}
function dividir() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("result");
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);

  let res = n1 / n2;

  result.innerHTML = `${n1 / n2}`;
}
function multiplicar() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("result");

  let n1 = Number(num1.value);
  let n2 = Number(num2.value);

  let res = n1 * n2;

  result.innerHTML = `${n1 * n2}`;
}
function subtrair(){

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById('result');

let n1 = Number(num1.value);
let n2 = Number(num2.value);

let res= n1 - n2;

result.innerHTML = `${n1 - n2}`;

}
function potencia(){

  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("result");

  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  
  let res = n1 ** n2;

  result.innerHTML = `${n1 ** n2}`;

}
