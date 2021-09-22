class Ninja {
    constructor (name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3

    }
    sayName(){
        console.log("Ninja: " + this.name)
        return this 
    }
    showStats(){
        console.log("Ninja: " + this.name, "Health: " + this.health
        , "Speed: " + this.speed , "Strength: " + this.strength)
        return this
    }

    drinkSake(){
        this.health += 10
        console.log(this.health)
        return this
    }
}

const ninja1 = new Ninja("Diamond", 100)

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()