class BigCat{
    constructor(){
        this.speed = 5 
        this.strength = 5 
        this.intelligence = 5 
        this.health = 5 
        this.durability = 5
    }
}

class Lion extends BigCat{
    constructor(){
        super()
        this.health = 50
        this.strength = 50
    }

    king(bigcat){
        if(bigcat instanceof Cheetah){
            let randomNumber = Math.round( Math.random() * 100 ) // generate random number from 0 to 100

            if(randomNumber <= 60){ //Cheetah has 60% chance of leaving unscathed
                console.log("The cheetah escaped unscathed")
                return true
            }
        }

        bigcat.speed = 0 
        bigcat.strength = 0 
        bigcat.intelligence = 0 
        bigcat.health = 0 
        bigcat.durability = 0

        return false
    }
}

class Leopard extends BigCat{
    constructor(){
        super()
        this.health = 30
        this.strength = 30
        this.intelligence = 30
    }

    attack(bigcat){
        if(bigcat instanceof Lion){
            bigcat.king()
            return
        }
        
        if(bigcat instanceof Cheetah){
            let randomNumber = Math.round( Math.random() * 100 ) // generate random number from 0 to 100

            if(randomNumber <= 60){ //Cheetah has 60% chance of leaving unscathed
                console.log("The cheetah escaped unscathed")
                return true
            }
        }

        bigcat.health -= 15

        return false
    }
}

class Cheetah extends BigCat{
    constructor(){
        this.speed = 75
        this.intelligence = 25
        this.durability = 25
        this.health = 25
        this.strength = 25
    }

    run(bigcat){
        let didCheetahEscape = true

        if(bigcat instanceof Lion){
            didCheetahEscape = bigcat.king() //Return true or false if the cheetah escaped
        }

        if(bigcat instanceof Leopard){
            didCheetahEscape = bigcat.attack() //Return true or false if the cheetah escaped
        }

        if(didCheetahEscape == true) bigcat.health -= 20
    }
}

