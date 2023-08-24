def fact(n):
    fact = 1
    for i in range(1, n):
        fact *= i

    return fact


def sum(x, n):
    sum = 1
    for i in range(1, n):
        temp = pow(x, i) / fact(i)

        sum += temp
    
    return sum


x = int(input("Enter x : "))
n = int(input("Enter n : "))

print(sum(x, n))