import math

def isPrime(n):
    if n == 2:
        return True
    for i in range(2, int(math.sqrt(n)) + 1):
        if(n % i == 0):
            return True
        
    return False


n = int(input("Enter upperlimit : "))
for i in range(4, n + 1):
    if(isPrime(i)):
        print(i, end = " ")