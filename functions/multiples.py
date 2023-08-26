def mul(n):
    sum = 1
    for i in range(2, (n // 2) + 1):
        if(n % i == 0):
            sum += i
    return sum


n = int(input("Enter a numbr : "))
print(mul(n))