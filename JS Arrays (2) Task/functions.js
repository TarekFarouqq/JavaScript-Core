//////////////////////////////////////////////(1)/////////////////////////////////////////////

//regular expression 
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//func return true if email is valid
function validateEmail(email) {
    return emailRegex.test(email);  
}

//student regiester function to store new students 
const students=function(){
    let firstName = prompt("Enter the student's first name:");
    let lastName = prompt("Enter the student's last name:");
    let age = prompt("Enter the student's age:");
    let email = prompt("Enter the student's email:");
    let department = prompt("Enter the student's department:");

    //calling validation func 
    while (validateEmail(email) == false) {
        email = prompt("Enter the student's email agian:");
    }

    //creating object ,its properties and assigning the variable to each property
    let student = {
        firstName : firstName,
        lastName : lastName,
        age : age,
        email : email,
        department : department 
    }

    return student
}


//////////////////////////////////////////////(2)/////////////////////////////////////////////


// this func call students func(regiestration func) and store its return in an object called student then insert student in the array by push
function addStudentToArray() {
    const student = students();
    studentsArray.push(student);
    console.log("Student added:", student);
  }
   
//////////////////////////////////////////////(3)/////////////////////////////////////////////

const findOldestAge = function(inputArray){

    const oldestStudent = inputArray.reduce((oldest,current) =>{
        if(current.age > oldest.age){ 
            return current;
         } else{ 
            return oldest;
        }
    })

    return oldestStudent.firstName +" "+ oldestStudent.lastName

}

//////////////////////////////////////////////(4)/////////////////////////////////////////////

//take the name and format it to PascalCase.
const strPascalCase=function (input){

    let wordArray = input.split(" ");

    for (let i = 0 ; i < wordArray.length ; i++){
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1).toLowerCase();
    }
    
    return wordArray.join("");
}