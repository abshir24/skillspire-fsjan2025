class Person:
    def __init__(self,name,id):
        self.name = name
        self.id = id
    
    def displayInfo(self):
        print("Name:",self.name, "Id:", self.id)

class Employee(Person):
    def __init__(self,name,id,salary, post):
        super().__init__(name,id)
        self.salary = salary
        self.post = post

person = Person('Test',1)

employee = Employee("Test2",2,1000000,"Advisor")

person.displayInfo()
employee.displayInfo()