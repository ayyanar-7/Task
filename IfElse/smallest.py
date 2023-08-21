def smallest(a, b, c):
    if(a < b and a < c):
        return "a is smallest"
    elif(b < c):
        return "b is smallest"
    return "c is smallest"


a = int(input("Enter a : "))
b = int(input("Enter b : "))
c = int(input("Enter c : "))

print(smallest(a, b, c))