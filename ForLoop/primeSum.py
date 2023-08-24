import math

def prime(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if(n % i == 0):
            return False
    return True


n = int(input("Enter n : "))

for i in range(2, n):
    if(prime(i)):
        if(n - i == 1):
            break
        
        if(prime(n - i)):
            print(i, n - i)
    
