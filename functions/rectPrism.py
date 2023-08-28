def volume(l, w, h):
    return l * w * h


l = float(input("Enter length : "))
w = float(input("Enter width : "))
h = float(input("Enter height : "))
print("%.2f" % volume(l, w, h))