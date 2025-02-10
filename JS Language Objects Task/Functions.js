//#region Task1

const countVowels=function (input){
    let counter = 0;
    let inputArray = input.toLowerCase().split("");

    for (let i = 0 ; i < inputArray.length ; i++){
         if( 
            inputArray[i]== "a" ||
            inputArray[i]== "e" ||
            inputArray[i]== "o" || 
            inputArray[i]== "u" || 
            inputArray[i]== "i"
            )
             counter++;
         else 
             return counter
   }
}
//#endregion

//#region Task2 

const capitalizedWord=function (Sentence){

    let wordArray = Sentence.split(" ");

    for (let i = 0 ; i < wordArray.length ; i++){
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1).toLowerCase();
    }
    
    return wordArray.join(" ");
}
//#endregion

//#region Task3

const monthName=function(date){
 let name = ["January", "February", "March", "April",
     "May", "June", "July", "August", "September", 
     "October", "November", "December"];

     return name[date.getMonth()];

}
//#endregion

//#region Task4
const randomArray=function(){

    let arr = []
    for(let i = 0 ; i < 5 ; i++){
        let num = Math.ceil (Math.random()*10 )
        if (arr.includes(num)){
            i--
            continue
        }else {
            arr[i] =num ;
        }
        
    }
    return arr ;
}
//#endregion



