import random

random_number = random.randint(1,10)

user_guess = int( input("Guess a number between 1 and 10: ") )

while random_number != user_guess:
    if random_number > user_guess:
        print("The number is too small guess again")
    else:
        print("The number is too big guess again")
    
    user_guess = int( input("Guess a number between 1 and 10: ") )

    
print("Congratulations! You have selected the correct number.", user_guess  )


