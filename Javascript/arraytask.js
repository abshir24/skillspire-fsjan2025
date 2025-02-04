let contacts = ["Jon Snow", "Arya Stark", "Tyrion Lannister"]

function addContact(name){
    contacts.push(name)
}

addContact("Circy")

function printContacts(){
    console.log("All Contacts:")

    for(let i = 0; i < contacts.length;i++){
        console.log("Contact: ", contacts[i])
    }
}

printContacts()
