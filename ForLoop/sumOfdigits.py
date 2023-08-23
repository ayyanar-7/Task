def digit(n):
    sum= 0
    while(n != 0):
        rem = n % 10
        sum += rem
        n = n // 10
    
    return sum

n = int(input("Enter a number : "))
print(digit(n))