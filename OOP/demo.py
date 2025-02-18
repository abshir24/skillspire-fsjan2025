class Vehicle: #This is the parent class
    def __init__(self, weight, base_speed):
        self.weight = weight

        self.base_speed =  base_speed

    def printVehicleStats(self):
        print("Weight: " , self.weight, "Base Speed: ", self.base_speed)

class Car(Vehicle):
    def __init__(self,weight,base_speed,make,model,year):
        super().__init__(weight,base_speed)
        self.make = make
        self.model = model
        self.year = year

car = Car(6000,165)

car.printVehicleStats()

