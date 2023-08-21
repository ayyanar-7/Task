def triangle(a, b, c):
    if a == b and b == c:
        return "Equalateral"
    elif a == b or b == c or c == a:
        return "Isosceles"
    elif a != b and b != c and c != a:
        return "Scalene triangle"
    

a = int(input("Enter a : "))
b = int(input("Enter b : "))
c = int(input("Enter c : "))
print(triangle(a, b, c))

    