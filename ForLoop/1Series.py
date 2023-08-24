def sum(n):
    sum = 1
    print(1, end = " ")
    temp = 1
    i =10
    for j in range(2, n + 1):
        temp = temp + i
        print("+ %d" % temp, end = " ")
        sum += temp
        i = i * 10
    print()
    return sum


n = int(input("Enter n : "))
print(sum(n))