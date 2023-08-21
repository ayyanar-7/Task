def division(n):
    if(n % 5 == 0 and n % 11 == 0):
        return "Divisible by 5 and 11"
    elif(n % 5 == 0):
        return "Divisible by 5"
    elif(n % 11 == 0):
        return "Divisible by 11"
    return "Not Divisible by 5 and 11"


n=int(input("Enter a number : "))
print(division(n))