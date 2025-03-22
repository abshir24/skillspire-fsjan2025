// Initial Arrays:
const aquaticAnimals = ["otter", "shark", "bluefin tuna","snake"];
const rainforestAnimals = ["orang-utan", "elephant", "snake"];

let awesomeAnimals = [...aquaticAnimals, ...rainforestAnimals]

let set = new Set(awesomeAnimals) //remove duplicate values from array

awesomeAnimals = Array.from(set)

console.log(awesomeAnimals)
