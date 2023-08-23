def table(n):
    for i in range(1, 21):
        print("%3d * %3d = %3d" % (i, n, i * n))


n = int(input("Enter n : "))
table(n)