def sum(x, n):
    sum = 0
    m = -1
    for i in range(1, n + 1):
        temp = m * (-1) * pow(x, i)
        print(temp)
        sum += temp
    
    return sum

x = int(input("Enter x : "))
n = int(input("Enter n : "))

print(sum(x, n))