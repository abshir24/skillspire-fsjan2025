class Person {
    constructor(age){
        this.age = age
    }

    printAge(){
        console.log(`Age: ${this.age}`)
    }
}

class Customer extends Person {
    constructor(firstName, lastName,age){
        super(age)
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        console.log(`Name: ${this.firstName} ${this.lastName}`)
    }
}

const firstCustomer = new Customer("Tom", "Hanks",35)

firstCustomer.printAge()

