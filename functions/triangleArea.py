def area(b, h):
    area = 0.5 * b * h

    return area


b = float(input("Enter base of the triangle : "))
h = float(input("Enter height of the triangle : "))
print("%.2f" % area(b, h))