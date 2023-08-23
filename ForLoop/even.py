def even(n):
    sum = 0
    for i in range(1, n + 1):
        if(i % 2 == 0):
            print(i)


n = int(input("Enter number : "))
print(even(n))