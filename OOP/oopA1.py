class Car:
    top_speed = 250
    location = 0

    def printTopSpeed(self):
        print(f'Top speed: { self.top_speed }')
    
    def drive(self):
        print("Driving....")

        self.location += 10
    
    def stop(self):
        print(f"Total distance driven: {self.location} miles")

car = Car()
car.printTopSpeed()
car.drive()
car.drive()
car.drive()
car.stop()

