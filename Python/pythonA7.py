units_sold = int( input("How many units were sold?") )

total_cost = units_sold * 99

if units_sold >= 10 and units_sold <= 19:
    total_cost = total_cost - ( total_cost * .2)
elif units_sold >= 20 and units_sold <= 49:
    total_cost = total_cost - ( total_cost * .3)
elif units_sold >= 50 and units_sold <= 99:
    total_cost = total_cost - ( total_cost * .4)
elif units_sold >= 100:
    total_cost = total_cost - ( total_cost * .5)

print("Your total cost is $", total_cost)
