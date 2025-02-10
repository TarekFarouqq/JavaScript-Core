const strPascalCase=function (input){

    let wordArray = input.split(" ");

    for (let i = 0 ; i < wordArray.length ; i++){
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1).toLowerCase();
    }
    
    return wordArray.join("");
}