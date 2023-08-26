def sum(n):
    sum = 0
    m = 0.1
    z = 10
    for i in range(1, n + 1):
        x = i + ((i + 1) * m)
        sum += x
        print(x, end = "")
        if(i != n):
            print(" + ", end = "")
        if(i + 2 == z):
            m *= 0.1
            z *=10
    print()
    return sum


n = int(input("Enter n : "))
print(sum(n))