# Print the sum of all the numbers from 1-15
total = 0

for i in range(1,16):
    total += i

# print(total)


# Use a for loop to count from 1-100. For every number that is odd print 
# “FIZZ” for every number that is even print “BUZZ”

for i in range(1,101):
    if i % 2 == 0:
        print(i,"BUZZ")
    else:
        print(i,"FIZZ")

