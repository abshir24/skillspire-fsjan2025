# Using the User Input module as a reference . Create a console based program that prompts the user to input their age. 

# -For users 16 and under print out "Stay home, study, and get your drivers license"

# -For users that are between 17 and 21 print out "Have some fun, but not TOO much fun. You're still a young adult"

# -For users 21 and over print out "Have fun. But be responsible. You are in control of your life"

# -The code for the console based program should be written inside of a function

age = int( input("What is your age?") )

if age <= 16:
    print("Stay home, study, and get your drivers license")
elif age >= 17 and age < 21:
    print("Have some fun, but not TOO much fun. You're still a young adult")
else:
    print("Have fun. But be responsible. You are in control of your life")

