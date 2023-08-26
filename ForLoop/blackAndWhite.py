def display(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if((i + j) % 2 == 0):
                print("black", end = "")
            else:
                print("while", end = "")
            if(j != n):
                print("-", end = "")
        print()


n = int(input("Enter n value : "))
display(n)