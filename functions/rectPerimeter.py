def peri(len, wid):
    return 2 * (len + wid)


len = float(input("Enter length : "))
wid = float(input("Enter width : "))
print("%.2f" % peri(len, wid))