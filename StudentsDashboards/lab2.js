// let num1=5
//  let num2=10
// let product=num1*num2
// console.log(product)

//let num1=5
// let num2=10
// function multiply(num1,num2){
//     return num1*num2
// }
// let product=multiply(num1,num2)
// console.log(product)

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
function multiply(num1, num2) {
    return num1 * num2;
}
let product = multiply(num1, num2);

console.log(product);
alert("Product = " + product);
