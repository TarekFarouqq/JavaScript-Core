
//(2)//////////////////////////////////

//array to try :
let studentsArray = [{
    firstName: "Tarek",
    lastName: "Farouq",
    age: 20,
    email: "john.doe@example.com",
    department: "Computer Science"
  },
  {
    firstName: "mona",
    lastName: "ibrahim",
    age: 22,
    email: "jane.smith@example.com",
    department: "Biology"
  },
  {
    firstName: "nader",
    lastName: "ragab",
    age: 21,
    email: "michael.johnson@example.com",
    department: "Mathematics"
  },
  {
    firstName: "Ali",
    lastName: "Yosef",
    age: 19,
    email: "emily.davis@example.com",
    department: "History"
  },
  {
    firstName: "Anwar",
    lastName: "Metwally",
    age: 23,
    email: "david.martinez@example.com",
    department: "Physics"
  }];


//addStudentToArray();   //call the func to register student and add it to the array 



//(3)//////////////////////////////////
 
//calling the func to find the full name of the oldest person 
console.log("The Name of the student of oldest age ", findOldestAge(studentsArray));


//(4)//////////////////////////////////
 
//created array called formattedNames store it it an object have two proprties first , last Name by pascalcase.
const formattedNames = studentsArray.map( student => {
    return {
        firstName: strPascalCase(student.firstName),
        lastName: strPascalCase(student.lastName)
    };
}); 

console.log("First and last Name PascalCase: ", formattedNames)


//(5)//////////////////////////////////

//use filter to generate a new array holding only object which have age more than 20 
let ageMoreThan20 = studentsArray.filter(item => item.age > 20);
console.log("ageMoreThan20  :", ageMoreThan20);


//(6)//////////////////////////////////

//calculating average by reduce .
let sum = studentsArray.reduce((acc , student) => acc + student.age , 0);
let average = sum / studentsArray.length;
console.log('Average grade:', average);


//(7)//////////////////////////////////


// sorting by first name asec if first names are equal sort desc by lastname 
studentsArray.sort((a, b) => {

    if (a.firstName < b.firstName) {
        return -1;  
    } else if (a.firstName > b.firstName) {
        return 1;  
    } else {
       
        if (a.lastName > b.lastName) {
            return -1;  
        } else if (a.lastName < b.lastName) {
            return 1;   
        } else {
            return 0;  
        }
    }
});

console.log("Sorted Array By Name",studentsArray);


//(8)//////////////////////////////////

//generate an array of full name + age only 
let fullNamePlusAgeArray = studentsArray.map( student => {
    return {
        fullName : (`${student.firstName} ${student.lastName} `),
        age : student.age
    }
})

console.log("fullNamePlusAgeArray : " , fullNamePlusAgeArray);

//(9)//////////////////////////////////

// the out put will be [object Object] because JavaScript will implicitly call the toString() method on the object .

console.log("Trying to convert object to string and concate BEFORE OVERRIDING : ", studentsArray[0] + "");  

//(10)//////////////////////////////////

studentsArray.forEach(student => {
    student.toString = function() {
        return `${this.firstName} ${this.lastName}`;
    };
});

console.log("Trying to convert object to string and concate AFTER OVERRIDING : ", studentsArray[0] + "");  

//(11)//////////////////////////////////

// Convert your array to JSON
let jsonArray =JSON.stringify(studentsArray);
console.log("Convert array to JSON : ",jsonArray)

