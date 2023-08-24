def pattern(n):
    for i in range(1, n + 1):
        for j in range(i, n):
            print(" ", end = "")
        print("i " * i, end = "")
        print()
    

n = int(input("Enter n : "))
pattern(n)