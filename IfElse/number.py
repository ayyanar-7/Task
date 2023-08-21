def number(n):
    if(n > 0):
        return "Positive"
    elif(n == 0):
        return "Zero"
    return "Negative"


n = int(input("Enter a number : "))
print(number(n))