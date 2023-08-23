import math

def isPrime(n):
    match = False
    if(n == 2):
        match = True
    for i in range(2,  int(math.sqrt(n)) + 1):
        if(n % i == 0):
            match = True
            break

    return match


n = int(input("Enter n : "))
if isPrime(n):
    print('Not a prime number')
else:
    print("Prime number")
    