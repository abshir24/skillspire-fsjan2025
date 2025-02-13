# Part 1
def equation(x,y):
    return (3 * x) + (5 * y)   

# print("The calculated result is: ", equation(3,4) )


# Part 2
hours_worked = int( input("How many hours did you work") )
hourly_rate = 100 

regular_pay = 0
over_time = 0
total_pay = 0

if hours_worked <= 40:
    regular_pay = hourly_rate * 40
    total_pay = regular_pay
else:
   regular_pay =  hourly_rate * 40
   extra_hours = (hours_worked - 40)
   over_time = extra_hours * (hourly_rate * 1.5) 
   total_pay = regular_pay + over_time

print("Regular pay: ", regular_pay)
print("Overtime pay: ", over_time)
print("Total pay: ", total_pay)