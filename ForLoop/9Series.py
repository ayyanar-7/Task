def sum(n):
    sum = 0
    i = 10
    for j in range(1, n + 1):
        temp = i - 1
        print(temp)
        sum += temp
        i = i * 10

    return sum


n = int(input("Enter n : "))
print(sum(n))