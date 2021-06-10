const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
let result;
const output = document.getElementById("output");

const btn = document.getElementsById("btn");
function Calculate(){

    if (op.value === '+')
        result = parseInt(num1.value) + parseInt(num2.value);
    else if (op.value === '-')
        result = parseInt(num1.value) - parseInt(num2.value);
    else if (op.value === '*')
        result = parseInt(num1.value) * parseInt(num2.value);
    else if (op.value === '/')
        result = parseInt(num1.value) / parseInt(num2.value);
    console.log(result);
    output.innerHTML = "Result :" + result;
}
