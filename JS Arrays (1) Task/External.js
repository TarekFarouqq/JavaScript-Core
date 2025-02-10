//FIRST TASK 

//(1,2)
let grades = [85, 92, 78, 90, 87,61,73];
let sum = grades.reduce((acc, grade) => acc + grade, 0);
let average = sum / grades.length;
console.log('Average grade:', average);

//(3)
let highestGrade = Math.max(...grades);
console.log('Highest grade:', highestGrade);

//(4)
let lowestGrade = Math.min(...grades);
console.log('lowest grade:', lowestGrade);

//(5)
grades.splice(3, 1, 91);
console.log(grades[3]);

//(6)
grades.sort((a , b) => a - b);
console.log("Sorted array Desc", grades);

//(7)
let successeStudents = grades.filter(item => item >= 60);
console.log("Success Students :", successeStudents);

//(8)
let percentageGrades = grades.map(grade => grade + '%');
console.log("Percentage grades:", percentageGrades);

//(9)

let gradesString = grades.join(', ');
console.log("Grades string:", gradesString);

//(10,11)
let students =["Elina","ahmed","Mona","eman","Ali","maha","zyad"]  
students.sort((a , b) =>
{ 
    if (a.toLowerCase() < b.toLowerCase()) {
             return -1; 
     } else if (a.toLowerCase()  > b.toLowerCase()) {
             return 1;   
     } else {
             return 0;   
  }
} )
console.log(students);

//(12)

console.log("PascalCase",strPascalCase("tarek ahmed farouq"));

//(13)

let pascalCaseStudents = students.map(name => strPascalCase(name));

console.log("PascalCase using MAP", pascalCaseStudents);

//(14)

let fourOrMore = students.find(student => student.length >= 4);

console.log("studentWith4OrMoreLetters: " , fourOrMore);

//(15)

let combinedStringArray = students.map( (student, index) => `${student} ${grades[index]}` );
console.log(combinedStringArray);

//(16)

let combinedArray = students.map((student, index) => [student, grades[index]]);
console.log(combinedArray);     