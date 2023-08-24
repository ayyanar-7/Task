def pattern(n):
    for i in range(1, n + 1):
        for j in range(i, n):
            print(" ", end = "")
        for j in range(1, (i * 2) - 1):
            print(j, end = "")
            if(i > j):
                j += 1
            else:
                j -= 1
        print()


n = int(input("Enter n value : "))
pattern(n)