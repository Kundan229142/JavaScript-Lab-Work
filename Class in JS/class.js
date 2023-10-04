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
    set setname(newname){
        this.name =newname;
    }

}
const car1 = new cars("AUDI", "RED", "30'00'000");
// console.log(car1);
// // console.log(car1.getname);
// // console.log(car1.setname);

class supercar extends cars {
    constructor(name,color,price, maxspeed)
    {
        super(name,color,price)
        this.maxspeed = maxspeed;
    }
}
const car2 = new supercar("bmw", "black", "30'00'000","265\hr");
// console.log(car2);
