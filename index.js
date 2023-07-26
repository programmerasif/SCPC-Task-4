// /////////////////////////////////////////////////////////////////////////////////

// ---------------------- SCPC FINAL TASK
// /////////////////////////////////////////////////////////////////////////////////


// Task one.
const revers = (input) =>{
    const data = input
    let reversed = '';
    for (let i = data.length - 1; i >= 0; i--) {
      reversed += data[i];
    }
    return reversed
}
 const result1 = revers('Hello world')
 console.log(`Task-1 result : ${result1}`);


// task two 

const sum = (data) =>{
    const initialArray = []
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element > 0) {
        initialArray.push(element)
    }
}
const result2 = initialArray.reduce((preValue, currValue) => preValue + currValue,0)
console.log(`Task-2 result : ${result2}`);

}
sum([2, -5, 10, -3, 7])

// Task 3

const frequentElement = (data) => {
let frequentNumber = {};
let maxNumber = data[0]
let maxCount = 1;
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (frequentNumber[element]) {
        frequentNumber[element] ++
    }
    else{
        frequentNumber[element] = 1
    }
    if (frequentNumber[element] > maxCount) {
        maxNumber = element;
        maxCount = frequentNumber[element]
        
    }
    
    
}

return maxNumber
}
const result3 = frequentElement([0,1,2,3,4,5,5,5,5,5,5,6])
console.log(`Task-3 result : ${result3}`);

// Task 4
function sumWithTarget(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    for (start; start <= end;) {
        const sum = arr[start] + arr[end];
        if (sum === target) {
            return [start, end];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }

    return [];
}

const arr = [1, 3, 6, 7, 11, 15];
const target = 9;
const result4 = sumWithTarget(arr, target);
console.log(`Task-4 result : ${result4}`);

// task 5
const calculator = (num1,num2,operator) =>{
    if (operator == '+') {
        return num1 + num2
    }
    else if(operator == '-'){
        return num1 - num2
    }
    else if(operator == '*'){
        return num1 * num2
    }
    else if(operator == '/'){
        if (!num1 || !num2) {
            return 'Cannot divide by zero';
        }

        return num1 / num2
    }
    else{
        return 'not a operator'
    }
}

const result5 = calculator(20,20,'/')
console.log(`Task-5 result : ${result5}`);

// Task 6

function generatePassword(data) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";
// console.log('line 95' + allChars.length);
    for (let i = 0; i < data; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
 
  const length = 12; //specfic length
  const password = generatePassword(length);
  console.log(`Task-6 result : ${password}`);

//   Task 7
  
const generate = (charecters) =>{
    const romanNumers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };

      let result = 0;
      let previousNumber = 0
      for (let i = charecters.length -1; i >=0; i--) {
        let correntCharecter = charecters[i];
        let correntNumber = romanNumers[correntCharecter]
       
        if (correntNumber >= previousNumber) {
            result += correntNumber
        }
        else{
            result -= correntNumber
        }
        
        previousNumber = correntNumber
      }

  return result
}
const res = generate('XX')
console.log(`Task-7 result : ${res}`);

// Task 8

const secSmallNum = () =>{
    const arr = [9,2,3,5,6,4,7,8,]
    const res = arr.sort((a,b) => a - b)
    return res[1]
}
const result8 = secSmallNum()
console.log(`Task-8 result : ${result8}`);