//Task 1 
console.log("Task 1 ");
console.log(countVowels("aaaigwhvbv"));

//Task 2 
console.log("Task 2 ");
console.log(capitalizedWord("tarek ahmed farouq mohamed"))

//Task 3 
console.log("Task 3 ");
const date = new Date("2014-5-5"); 
console.log(monthName(date));

//Task 4 
console.log("Task 4 ");
console.log(randomArray())
console.log(randomArray())




//Task 5

 //a
 console.log("Task 5 ");
let arr2 = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];

let max = arr2[0];
let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
    if (arr2[i] < min) {
        min = arr2[i];
    }
}
console.log(`Max Number:"${max}`);  
console.log(`Min Number:"${min}`);

//b

let nonRepeatedArray = [];
for (let i = 0; i < arr2.length; i++) {
    if (nonRepeatedArray.indexOf(arr2[i]) === -1) {
        nonRepeatedArray.push(arr2[i]);
    }
}
console.log(`Array without duplicates:${nonRepeatedArray}`);

//c 

let evenCounter = 0;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        evenCounter++;
    }
}
console.log(`Count of even numbers: ${evenCounter}`);

// d 

let concatedStr = nonRepeatedArray.join('*');
console.log(concatedStr);