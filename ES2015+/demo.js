class Customer {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        console.log(`Name: ${this.firstName} ${this.lastName}`)
    }
}

const firstCustomer = new Customer("Tom", "Hanks")

firstCustomer.getFullName()
