class Engine {

    static #counter=0;

    constructor(color){

        if (this.constructor.name == "Engine"){
            throw new Error("Engine is Abstract class");
        
        Engine.#counter++;
        this.color = color;

                }
            }
}


class Car extends Engine{

    constructor(color ,model , productionYear, price, image,  top, left){
        super(color),
        this.model = model,
        this.productionYear = productionYear,
        this.price = price,
        this._top = top,
        this._left = left,
        this.image = image

        this.carElement = document.createElement("img");

        this.carElement.src = this.image;
       
        this.carElement.style.position= 'absolute';
        this.carElement.style.top = `${this.top}px`;
        this.carElement.style.left = `${this.left}px`;
        
        document.body.append(this.carElement);
    }
        


    toString() {
        return `Model: ${this.model}, Production Year: ${this.productionYear}, Price: ${this.price}, Color: ${this.color}`;
    }
    moveCar(direction){
        return `The Direction of the Car is ${direction}`;
    }


    set top(value){
         this._top = value;
    }

    set left(value){
         this._left = value;
    }

    

            moveLeft() {
                let id = setInterval(()=>{
                 if(this._left >=1){
                     this._left-=1;
                     this.carElement.style.left = `${this._left}px` ;
                     this.carElement.classList.add("flip-horizontal");
                
                 }else{
                    this.carElement.classList.remove("flip-horizontal");
                    
                     clearInterval(id);
                     
                     
                 }
                },1)
             }
         
             moveRight() {

                let id = setInterval(()=>{
                    if(this._left < innerWidth - this.carElement.width){
                        this._left += 1;
                        this.carElement.style.left = `${this._left}px`;
                        
                    }else{
                        this.carElement.classList.add("flip-horizontal"); 
                        this.moveLeft();
                        clearInterval(id);
                    }
                 },1)
                     }
        
             changestyle(){
                      this.carElement.classList.add("changeStyle");
                   }
}               

