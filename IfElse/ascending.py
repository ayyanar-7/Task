def ascending(a,b,c):
    if(a < b and a < c and b < c):
        return a, b, c
    elif(b < a and b < c and a < c):
        return b, a, c
    elif(b < a and b < c and c < a):
        return b, c, a
    elif(a < b and a < c and c < b):
        return a, c, b
    elif(c < b and c < a and a < b):
        return c, a, b
    return c, b, a


a = int(input("Enter a : "))
b = int(input("Enter b : "))
c = int(input("Enter c : "))

print(ascending(a, b, c))