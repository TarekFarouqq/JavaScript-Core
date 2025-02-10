const   getStudentsGrade=function(...grades) {
    let summtion = 0;
    let numberOfGrades = parseInt(prompt("Enter number of grades you want to insert"));
    
    if ( numberOfGrades < 2 || numberOfGrades > 10 )
        { 
             alert("Grade must be a number and  be between 2 and 10");

        }else{

         for(let i = 0 ; i < numberOfGrades ; i++){

               let grade= parseInt(prompt(`Inter Grade ${i+1} `))
                if( isNaN(grade) || grade < 0 || grade > 100){
                     i -- ;
                    continue ; } 

                grades[i] = grade;
                summtion+=grades[i];  
              }

        }
     return summtion
} 


console.log(getStudentsGrade());

// ...grades => to take more that one parameter (rest operator).
// prompt => to take the input from use and you can add a message withe the prompt window
// isNaN => return true if the input is not a number 
// i -- and the countinue is a validation that make the user must enter a number and must be between 0 and 100 



