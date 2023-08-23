def odd(n):
    sum = 0
    for i in range(1, n + 1):
        if(i % 2 == 1):
            print(i)


n = int(input("Enter number : "))
print(odd(n))