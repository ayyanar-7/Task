def pattern(n):
    k = 1
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(k, end = " ")
            k += 1
        print()

n = int(input("Enter n : "))
pattern(n)