class Boxer{
    constructor(height, weight, wins,losses){
        this.height = height
        this.weight = weight
        this.wins = wins
        this.losses = losses
    }

    printBoxerInfo(){
        console.log(`Height: ${this.height} Weight ${this.weight} Wins ${this.wins} Losses ${this.losses}`)
    }

    calculateBoxerScore(){
        return (this.height + this.weight + this.wins + this.losses) / 4
    }
}

const boxer1 = new Boxer(190, 210, 10, 0)
const boxer2 = new Boxer(188, 208, 9, 1)

console.log("***************** Boxer 1 ***********************")

boxer1.printBoxerInfo()

console.log("*************************************************")

console.log("***************** Boxer 2 ***********************")

boxer1.printBoxerInfo()

console.log("*************************************************")

const user_selection = Number( prompt("Which boxer would you like to select? Select (1 or 2)") )

let winningBoxer;

if(boxer1.calculateBoxerScore() > boxer2.calculateBoxerScore()) winningBoxer = 1
else winningBoxer= 2

if(user_selection == winningBoxer) console.log("Congrats you win!")
else console.log("Sorry you lose")