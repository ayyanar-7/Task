def sum(n):
    sum = 0
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            sum += j


    return sum

n = int(input("Enter a number : "))
print(sum(n))