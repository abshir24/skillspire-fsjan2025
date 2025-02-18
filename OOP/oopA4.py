import random

class BigCat:
   def __init__(self):
      speed=5
      strength=5
      intelligence=5
      health=5
      durability=5

class Lion(BigCat):
    def __init__(self):
      super().__init__()
      self.strength = 50
      self.health = 50
    
    def king(self,bigcat):
        if isinstance(bigcat,Cheetah):
          random_number = random.randint(1,100)

          if random_number <= 60:
            print("Cheetah has escaped")
            return 

        speed=0
        strength=0
        intelligence=0
        health=0
        durability=0

# lion = Lion()
# lion2 = Lion()

# lion.king()
