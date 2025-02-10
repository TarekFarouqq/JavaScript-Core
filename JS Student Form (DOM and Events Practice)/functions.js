const addStudent = function(object){

   const row = document.createElement('tr');

   if (object.dept === "CS") {
        row.style.backgroundColor = "lightblue";  
    } else if (object.dept === "SW") {
        row.style.backgroundColor = "lightgreen";
    } else {
        row.style.backgroundColor = "orange";      
    }



    for (let property in object){
        if (property !== "dept") {
            const cell = document.createElement('td');
            cell.innerText = object[property];
            row.append(cell);
        }
       
    }

    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton')
    deleteButton.innerText ="Delete" ; 
    deleteCell.append(deleteButton);
    row.append(deleteCell);

    deleteButton.addEventListener('click', function(){
        row.remove();
        studentArray = studentArray.filter(student => student !== object);
        updateTable();
    })

    return row ;
}


const updateTable = function(){

    // selection 
    const filterValue = document.querySelector('#filter').value;

    //select all rows
    const rows = table.querySelectorAll('tr');
    // Remove all rows
    rows.forEach( row => {
        row.remove();   
      });

    let filteredStudents = [];

    if (filterValue === 'failed') {
        filteredStudents = studentArray.filter(student => student.grade < 60);
      } else if (filterValue === 'successful') {
        filteredStudents = studentArray.filter(student => student.grade >= 60);
      }else {
        filteredStudents = studentArray;
      }

    //take the filtered array and add make from it a new rows to add it to the table .
    filteredStudents.forEach(student => {
        const tableRow = addStudent(student);
        table.append(tableRow);
      });


}


const sortTable = function () {

    //select the value of the sort select 
    const sortValue = document.querySelector('#sort').value;

     // Sort by Name 
    if (sortValue === "name") {
       
        studentArray.sort((a , b) =>
            { 
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                         return -1; 
                 } else if (a.name.toLowerCase()  > b.name.toLowerCase()) {
                         return 1;   
                 } else {
                         return 0;   
                       }
            } )

     // Sort by Grade
    } else if (sortValue === "grade") {
        
        studentArray.sort((a, b) => b.grade - a.grade); 
    }

    
    updateTable();
}


const capitalizeFirstLetter = function (string) {
    if (!string || string == "") return "";
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}