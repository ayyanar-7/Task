import math
def prime(n):
    
    for i in range(n, 2, -1):
        found = False
        for j in range(2, (n // 2) + 1):
            if(i % j == 0):
                found = True
                break
    
        if(found == False):
            return i


n = int(input("Enter a number : "))
print(prime(n))
