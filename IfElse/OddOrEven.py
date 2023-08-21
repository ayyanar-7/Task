def OddOrEven(n):
    if(n % 2 == 0):
        return "Even"
    return "Odd"


n = int(input("Enter a number : "))
print(OddOrEven(n))