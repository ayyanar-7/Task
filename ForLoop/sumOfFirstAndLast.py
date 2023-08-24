def digit(n):
    last = n % 10
    while(n != 0):
        first = n
        n = n // 10
    
    return first + last

n = int(input("Enter a digit : "))
print(digit(n))