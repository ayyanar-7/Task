def area(len , wid):
    area = len * wid

    return area


len = float(input("Enter length : "))
wid = float(input("Enter width : "))

print("%.2f" % area(len, wid))