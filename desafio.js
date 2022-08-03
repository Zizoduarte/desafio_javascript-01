
let numberOne = Number(prompt("Digite o primeiro número "));
let numberTwo = Number(prompt("Digite o segundo número "));


let resultSum = numberOne + numberTwo;
let evenOrOdd = resultSum / 2;

let resultSubtract = numberOne - numberTwo;
let resultMultiplication = numberOne * numberTwo;
let resultDivision = numberOne / numberTwo;
let resultRest = numberOne % numberTwo;



alert(` A soma é: ${resultSum}`);
alert(`A subtração é: ${resultSubtract} `);
alert(`A multiplicação é: ${resultMultiplication} `);
alert(`A divisão é: ${resultDivision.toFixed(2)} `);
alert(`O resto é: ${resultRest.toFixed(2)} `);


if(evenOrOdd %1 == 0){
  alert(`A soma dos dois números par: ${resultSum}  `)
} else{
  alert(`A soma dos dois números é impar: ${resultSum}  `)
}

if(numberOne == numberTwo){
  alert("Os números inseridos são iguais! ")
} if(numberOne != numberTwo){
  alert("Os números inseridos são diferentes! ")
}
