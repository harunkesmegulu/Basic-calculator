console.log("------------------------------");
console.log("------------------------------");
console.log("#######BASIC CALCULATOR#######");
console.log("------------------------------");
console.log("------------------------------");
const n1 = Number(prompt("Enter first number"));
const op = prompt("Choose operation: +, -, *, /");
const n2 = Number(prompt("Enter second number"));
let result =0;
switch(op){
    case "+":
        result = n1 + n2;
        break;
    case "-":
        result = n1 - n2;
        break;
    case "*":
        result = n1 * n2;
        break;
    case "/":
        result = n1 / n2;
        break;
    default:
        alert("Please choose only +, -, *, / ");
        break;
        
}
console.log(`${n1} ${op} ${n2} = ${result}`);
