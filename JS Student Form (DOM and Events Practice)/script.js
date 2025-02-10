// Selections
const addButton = document.querySelector('.addButton');
const table = document.querySelector('table');
let error = document.querySelector('.error');

//create aqrray to store students to make sort and filter
let studentArray= [];

// to prevent refreshing the page (add changes in the table without refreshing )
document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()})

// here will be the work of the add button 
addButton.addEventListener('click',function(){

    // created anonyumouse object to collect the student data 
    let student = {name : capitalizeFirstLetter( document.getElementById('name').value.trim()) , 
                   grade: document.getElementById('grade').value ,
                   dept: document.querySelector('input[type="radio"]:checked').value }

        //make some validations if all is ok the else will be excuted 
        const nameExists = studentArray.some(existingStudent => existingStudent.name === student.name);

        if(student.name =="" ){
            error.innerHTML = "Name is required cannot consist only of spaces!!"
        }else if (nameExists){  
            error.innerHTML = "Can,t add 2 Students with the same Name! "
        }else if (student.grade <= 0 || student.grade > 100 ){
            error.innerHTML = "Grade must be between 0 and 100 !"
        }else{
            error.innerHTML = "";
            studentArray.push(student);

            //the addStudent func take object as parameter fetch its data and  return a table row 
            let tableRow = addStudent(student);
            table.append(tableRow);
        }
   

})


const filterSelect = document.querySelector('#filter');
filterSelect.addEventListener('change', function () {
  updateTable();  // Call updateTable to re-render with the selected filter
});


const sortSelect = document.querySelector('#sort');
sortSelect.addEventListener('change', function () {
    sortTable(); // Call sortTable to sort and re-render the table
});