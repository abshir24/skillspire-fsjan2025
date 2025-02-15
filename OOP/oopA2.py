class Boxer:
    def __init__(self,height,weight,wins,losses):
        self.height = height
        self.weight = weight
        self.wins = wins
        self.losses = losses

    def printStats(self):
        print(f"Height: {self.height}, Weight: {self.weight}, Wins: {self.wins}, Losses: {self.losses}")

    def printWinLossAverage(self):
        return self.wins / (self.wins + self.losses)

boxer1 = Boxer(190,200,19,0)
boxer2 = Boxer(192,205,11,1)

print("****************Boxer1******************")
boxer1.printStats()
print("**********************************")

print("*****************Boxer2*****************")
boxer2.printStats()
print("**********************************")

user_input = int( input("Which boxer would you like to bet on? Select 1 or 2") )

if(boxer1.printWinLossAverage() > boxer2.printWinLossAverage() and user_input == 1):
    print("User wins!")
else:
    print("You lose try again!")