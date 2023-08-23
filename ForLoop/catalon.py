def fact(n):
    fact = 1
    for i in range(1, n):
        fact *= i

    return fact

def catalon(n):
    for i in range(1, n + 1):
        c = fact(2 * i)//(fact(i + 1) * fact(i))

        print(c, end = " ")


n = int(input("Enter n : "))
catalon(n)
    