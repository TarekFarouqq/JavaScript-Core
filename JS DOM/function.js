const startSliding= function(imgObject){

let index = 0; 
    
let id = setInterval(()=>{
    imgObject.src = imgArray[index];
    index++;
    if (index >= imgArray.length) index = 0;
},1000)

return id;
}

const stopSliding = function(timerID) {
    clearInterval(timerID);  
}
 

