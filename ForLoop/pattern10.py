def pattern(n):
    for i in range(1, n + 1):
        for j in range(i, n):
            print(" ", end = "")
        for j in range(1, (i * 2)):
            print("*", end = "")
        print()
    for i in range(n - 1, 0, -1):
        for j in range(i, n):
            print(" ", end = "")
        for j in range(1, i * 2):
            print("*", end = "")
        print()


n = int(input("Enter n : "))
pattern(n)