class Car:
    make = "Tesla"
    model = "Cyber Truck"
    cost = 80000

    def printCarInfo(self):
        print(f"Make:{ self.make } Model: {self.model} Cost:{self.cost}")

cyberTruck1 = Car()
cyberTruck2 = Car()
cyberTruck3 = Car()


cyberTruck1.printCarInfo()
