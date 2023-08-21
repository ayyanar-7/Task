def angle(a, b, c):
    if(a + b + c == 180):
        return True
    return False


a = int(input("Enter angle 1 : "))
b = int(input("Enter angle 2 : "))
c = int(input("Enter angle 3 : "))

if(angle(a, b, c)):
    print("Valid")
else:
    print("Not valid")