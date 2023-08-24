def pattern(n):
    for i in range(1, n + 1):
        for j in range(i, n):
            print(" ", end = "")
        for j in range(1, (i * 2)):
            print("%d " % j, end = "")
            if(i > j):
                j += 2
            else:
                j -= 2
        print()


n = int(input("Enter n value : "))
pattern(n)