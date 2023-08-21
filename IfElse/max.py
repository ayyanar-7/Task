def max(a, b, c):
    if(a > b & a > c):
        return "a is maximum"
    elif(b > c):
        return "b is maximum"
    return "c is maximum"


a = int(input("Enter a : "))
b = int(input("Enter b : "))
c = int(input("Enter c : "))

print(max(a, b, c))