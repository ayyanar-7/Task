def digit(n):
    last = n % 10
    while(n != 0):
        first = n
        n = n // 10
    
    return first, last

n = int(input("Enter a digit : "))
num = digit(n)
print("First : %d" % digit(n)[0])
print("Last : %d" % num[1])