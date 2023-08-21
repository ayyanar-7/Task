def side(s1, s2, s3):
    if (s1 + s2) > s3:
        return "Valid"
    return "Not valid"


s1 = int(input("Enter side 1 : "))
s2 = int(input("Enter side 2 : "))
s3 = int(input("Enter side 3 : "))

print(side(s1, s2, s3))
