//we will create a blueprint for what every athelete should have (attributes/properties - name, health, speed) and be able to do (methods- playgame(), sayName(), showStats(), takeIceBath() )

/*
class Athlete:
    def __init__(self):
        self.name = "Kobe"
        self.health = 100;
        self.speed = 70;
        self.strength = 70;

*/



class Athlete{
    //constructor means when the class is created, the code to run will be inside the constructor
    constructor(nameInput, speedInput){
        this.name = nameInput;
        this.health = 100;
        this.speed = speedInput;
        this.strength = 70;
    }

    //our methods for the class below
    competeInEvent(){
        //the "this" keyword will represent whichever object calls the method
        this.health -= 10
    }

    displayStats(){
        //this method will print out all the athlete info in a nice format!
        // console.log("Athlete info: \n Name: " + this.name + " \n Health: " + this.health)

        // f"hello my name is {name}"
        console.log(`Athlete info: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} `)
    }

    takeIceBath(){
        this.health +=10
    }
}

//instances of a class (you can also call them objects)
const athlete1 = new Athlete("Kobe", 88)
const athlete2 = new Athlete("Odell", 92)
const athlete3 = new Athlete("Bolt", 100)

// console.log(athlete1)
// console.log(athlete2)
// console.log(athlete3)

console.log("competitions in events are happening below!")
athlete1.competeInEvent()
athlete1.competeInEvent()
athlete1.displayStats()
athlete1.takeIceBath()
athlete1.displayStats()




