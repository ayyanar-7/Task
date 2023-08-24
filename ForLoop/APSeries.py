def sum(a, n, d):
    sum = 0
    i = a
    for j in range(1, n + 1):
        sum += i
        i = i + d

    return sum
    

a = int(input("Enter a : "))
n = int(input("Enter n : "))
d = int(input("Enter d : "))

print(sum(a, n, d))


