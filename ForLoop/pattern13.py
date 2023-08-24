def pattern(n):
    for i in range(1, n + 1):

        for j in range(1, (i * 2) - 1):
            print("%d " % j, end = "")
            if(i > j):
                j *= i
            else:
                j *= i - j
        print()


n = int(input("Enter n : "))
pattern(n)
        