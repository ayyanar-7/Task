def display(n):
    print("Multiplication table from 1 to %d" % n)

    for i in range(1, 11):
        for j in range(1, n + 1):
            print("%2d * %2d = %3d" % (j, i, i * j), end = "   ")
        print()


n = int(input("Enter how many tables : "))
display(n)