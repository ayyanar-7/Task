def day(n):
    if(n == 1):
        return "Sunday"
    elif(n == 2):
        return "Monday"
    elif(n == 3):
        return "Tuesday"
    elif(n == 4):
        return "Wednesday"
    elif(n == 5):
        return "Thusday"
    elif(n == 6):
        return "Friday"
    elif(n == 7):
        return "Saturday"
    

n = int(input("Enter a number : "))
print(day(n))
        