class Vehicle {
    constructor(make,model,year)
    {
        this.make = make;
        this.model=model;
        this.year=year;
    }
    honk(){
        return "Beep"
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}
class Car extends Vehicle {
    constructor( make,model,year){
        super(make,model,year)
        this.numWheels= 4;
    }
}
class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels=4;
    }
    revEngine(){
    return "VROOM!!"
    }
}
class Garage{
    constructor(compacity){
    this.vehicles= [];
    this.compacity=compacity;
    }
    add(vehicle){
        if (!vehicle instanceof Vehicle){
            return "Only allow vehicle"}
        if (this.vehicle.length>= this.compacity)
        {
            return "We are full"
        }
        this.vehicles.push(vehicle);
        return 'Vehicle added!'
    }
}