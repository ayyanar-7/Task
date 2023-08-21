def month(n):
    if(n % 2 != 0 and n > 0 and n < 13):
        return "31 days"
    elif(n == 8):
        return "31 days"
    elif(n == 2):
        return "29 days(Leap), 28 days(Not leap)"
    elif(n % 2 == 0 and n > 0 and n < 13):
        return "30 days"
    

n = int(input("Enter a month number : "))
print(month(n))