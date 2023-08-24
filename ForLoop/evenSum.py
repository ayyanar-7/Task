def sum(n):
    sum = 0
    j = 1
    for i in range(2, n + 1, 2):
        sum += i
        print(i, end = " ")
    print()
    return sum

n = int(input("Enter n : "))

print(sum(n))