def celsius(f):
    return (5 / 9.0) * (f - 32)

f = float(input("Enter a fahrenheit value : "))
print("Celsius = %.2f" % celsius(f))