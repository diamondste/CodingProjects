class Ninja {
    constructor (name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3

    }
    sayName(){
        console.log("Name: " + this.name)
        return this 
    }
    showStats(){
        console.log("Show Stats: ","Name: " + this.name, "Health: " + this.health
        , "Speed: " + this.speed , "Strength: " + this.strength)
        return this
    }

    drinkSake(){
        this.health += 10
        return this
    }
}

const ninja1 = new Ninja("Diamond", 100)

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10)
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("Wax on and Wax off")
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()
