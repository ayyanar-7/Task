def gcd(x, y):
    found = False
    gcd = 1

    if(x < y):
        small = x
        big = y
    else:
        small = y
        big = x
        
    for i in range(2, small):
        if(x % i and y % i):
            gcd *= i
            found = True
    if(found):
        return gcd
    return small


x = int(input("Enter x : "))
y = int(input("enter y : "))
print(gcd(x, y))
