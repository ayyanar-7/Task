def lcm(x, y):
    lcm = 1
    if(x < y):
        small = x
    else:
        small = y
    for i in range(2, small + 1):
        if(x % i == 0 and y % i == 0):
            lcm = lcm * i
            x = x / i
            y = y / i
    lcm *= x * y

    return lcm


x = int(input("Enter x value : "))
y = int(input("Enter y value : "))
print(lcm(x, y))