function Building(rooms, color, storey){
  //property of the class
  this.name = "House";
  this.rooms = rooms;
  this.color = color;
  this.storey = storey;
}

Building.prototype.build = function(){
    return "A " + this.name + ", with " + this.rooms + " rooms" + " painted " + this.color + " having "  + this.storey + " stories"
}

Building.prototype.demolish = function(vehicle){
	if(arguments.length === 0){
		return "please enter a demolition vehicle"
	}
	return "demolish " + this.rooms + " rooms with a " + vehicle;
}

function Bungalow(rooms, color, storey){
	Building.call(this, rooms, color, storey)
    //polymorphism
    this.name = "Bungalow"; //public property
    var toilet = "currently in use"; //private property
    this.toilet = toilet;
    //encapsulation toilet and free toilet
    this.useToilet = function(){
    	toilet = "toilet now freed up for use";
    	this.toilet = toilet;
    	return "Freeing up toilet";
    }
    this.furnish = function(){
        this.tv = "Samsung"
        return "Add, furniture, electronic gadgets and wallpapers to house";
    }
}
//polymorphism
Bungalow.prototype.demolish = function(){
	return "demolish " + this.rooms + " with a " + (arguments[0] || "Caterpillar");
}
//inheritance 
Bungalow.prototype = new Building();
//abstraction , we do not need to know the implementation of Bungalow

var Bunga = new Bungalow(3, "red", "3");
Bunga.furnish()
Bunga.tv = "Panasonic";
console.log(Bunga.toilet, Bunga.useToilet(), Bunga.toilet)
