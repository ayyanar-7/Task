def compound(p, r, t):
    n = 12
    com = p * pow(1 + (r / n), n * t)

    return com


p = float(input("Enter principle amount : "))
r = float(input("Enter rate of interest : "))
t = float(input("Enter no of years : "))

print("%.2f" % compound(p, r, t))