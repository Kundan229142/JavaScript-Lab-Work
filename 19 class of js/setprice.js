class cars{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    // getter
    get getname(){
        return this.name;
    }

    // setter
    set setprice(newprice){
        if(newprice > this.price){
        this.price = newprice;
        }
        else{
            console.log("Enter Greater values...")
        }
    }
}
const car1 = new cars("AUDI", "RED", 500);
