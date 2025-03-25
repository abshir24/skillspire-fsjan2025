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
                return
            }
        }

        bigcat.speed = 0 
        bigcat.strength = 0 
        bigcat.intelligence = 0 
        bigcat.health = 0 
        bigcat.durability = 0
    }
}

class Cheetah extends BigCat{

}

class Leopard extends BigCat{

}