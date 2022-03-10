class Ninja{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Ninja's name is ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength} `);
    }
    drinkSake(){
        this.health += 10;
    }
}





const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name) {
        super(name)
        this.name = name;
        this.health =200;
        this.speed=10;
        this.strength =10;
        this.wisdom = 10;
    }
    // simple function in the child class
    speakWisdom() {
        // by using super, we can call the parent method
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats(){
        console.log(`Ninja's Stats: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength} `);
    }
}




// example output
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
