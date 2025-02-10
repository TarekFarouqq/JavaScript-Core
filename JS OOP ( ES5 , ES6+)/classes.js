
//(1) a AND b ////////////////////////

const Paint= function(color="",width=0,height=0,price=0) {

    Paint.count++;
    this.color = color,
    this.width = width,
    this.height = height,
    this.price = price,
     
Paint.prototype.draw=function(){
    return "display paint";
}

Paint.prototype.toString= function(){
    return `color: ${this.color}, width: ${this.width}, height: ${this.height}, price: ${this.price}`
}

}
//the static count member intialization 
Paint.count=0;




//(2)////////////////////////

class Engine {

    static #counter=0;

    constructor(color){

        /*if (this.constructor.name == "Engine"){
            throw new Error("Engine is Abstract class");
        }*/
        Engine.#counter++;
        this.color = color;

    }
}


class Car extends Engine{

    constructor(color ,model , productionYear, price){
        super(color),
        this.model = model,
        this.productionYear = productionYear,
        this.price = price
    }

    toString() {
        return `Model: ${this.model}, Production Year: ${this.productionYear}, Price: ${this.price}, Color: ${this.color}`;
    }
    moveCar(direction){
        return `The Direction of the Car is ${direction}`
    }
}


class FlyingCar extends Car{

    constructor(color ,model , productionYear, price, isFlying = false){
        super(color ,model , productionYear, price)
        this.isFlying = isFlying
    }

    toString() {

        if (this.isFlying){
            return `Model: ${this.model}, Production Year: ${this.productionYear}, Price: ${this.price}, Color: ${this.color} , CAN FLY !`
        }else{
            return `Model: ${this.model}, Production Year: ${this.productionYear}, Price: ${this.price}, Color: ${this.color} , CAN FLY !`

        }
        
    }
}




    