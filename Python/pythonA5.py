import random 

computer = random.randint(1,3)

user = int( input( "Pick a number between 1 and 3 (1=Rock, 2=Paper, or 3=Scissors)") )

print("Computer: ", computer, "User: ", user)
if( (computer == 1 and user == 3) or ( computer == 2 and user == 1) 
   or ( computer == 3 and user == 2 )):
    print("Computer wins!")
elif( (computer == 3 and user == 1) or ( computer == 1 and user == 2) 
   or ( computer == 2 and user == 3 )):
    print("Congratulations! You win.")
else:
    print("This is a draw.")

