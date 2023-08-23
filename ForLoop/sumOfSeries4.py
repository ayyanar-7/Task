def fact(n):
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    
    return fact
def sum(x, n):
    sum = 1
    i = 2
    m = 1
    for j in range(1, n + 1):
        m = m * (-1)
        sum = sum + m * (pow(x, i)/fact(i))
        print("term %d value is : %.2f" % (j, m * (pow(x, i) / fact(i))))
        i += 2

    print(sum)


x = int(input("Enter x value : "))
n = int(input("Enter n value : "))
sum(x, n)