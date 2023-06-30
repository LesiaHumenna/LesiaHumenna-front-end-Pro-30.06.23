function fn1(){
    let num = 0;
    console.log(num);
    return function fn2(y){
        num += y;
        return num;
    }
}
    let sum = fn1(3);
    console.log(sum(5));
    console.log(sum(20));
    console.log(sum(30));

let arr = ['w', 7, true, 4, 'a', 8];

function meanNum(num){
    let summ =  0;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            summ += arr[i];
            count++;
        }
    }
return summ / count;
}
let mean = meanNum(arr);
console.log('Cереднє арифметичне:' + mean);

const x = parseFloat(prompt('Enter 1 num: '));
const znak = prompt('Enter symbol num: ');
const y = parseFloat(prompt('Enter 2 num: '));

function doMath(x, znak, y){
    switch (znak){
        case '+':
            console.log(x + y);
        break;
        case '-':
            console.log(x - y);
        break;
        case '*':
            console.log(x * y);
        break;
        case '/':
            console.log(x / y);
        break;
        case '%':
            console.log(x % y);
        break;
        case '^':
            console.log(Math.pow(x, y));
        break;
        default:
            console.log('Nan');
    }
};
doMath(x, znak, y);
//
function userAnswer(arr){
    function userAnswer() {
        const answer1 = Number(prompt("Введіть довжину основного масиву:"));
        const answer2 = Number(prompt("Введіть довжину внутрішніх масивів:"));
    
        const array = [];
    
    for (let i = 0; i < answer1; i++) {
        const subArray = [];
    
        for (let j = 0; j < answer2; j++) {
            const value = Number(prompt(`Введіть значення для елемента [${i}][${j}]:`));
            subArray.push(value);
        }
        array.push(subArray);
        }
    return array;
    }
    let userInput = userAnswer();
    console.log(userInput)
}
function removeChars(str, chars) {
    for (let i = 0; i < chars.length; i++) {
        const regex = new RegExp(chars[i], 'g');
        str = str.replace(regex, '');
    }
    return str;
}
const inputString = "hello world";
const charsToRemove = ['l', 'd'];
const result = removeChars(inputString, charsToRemove);
console.log(result);  