def reverse(n):
    rev = 0
    while(n != 0):
        t = n % 10
        rev = t + (rev * 10)
        n = n // 10
    
    return rev


n = int(input("Enter a number : "))
print(reverse(n))