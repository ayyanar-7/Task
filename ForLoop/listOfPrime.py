import math
def prime(n):
    if n <= 0:
        return
    print("2",end=" ")
    count = 1
    i = 3
    while(count < n):
        found = False
        for j in range(2, int(math.sqrt(i)) + 1):
            if(i % j == 0):
                found = True
                break
        if(found == False):
            print(i,end=" ")
            count += 1
        i += 1

    
n = int(input("Enter n : "))
prime(n)