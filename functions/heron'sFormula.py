import math

def area(a, b, c):
    s = (a + b +c) / 2

    area = math.sqrt(s * (s - a) * (s -b) * (s - c))

    return area


a = int(input("Side 1 : "))
b = int(input("side 2 : "))
c = int(input("Side 3 : "))

print("%.2f" % area(a, b, c))