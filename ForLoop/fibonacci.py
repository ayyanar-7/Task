def fibo(n):
    f1 = 0
    f2 = 1
    print(f1," ",f2,end = "")
    for i in range(3, n + 1):
        f3 = f1 + f2
        f1 = f2
        f2 = f3
        print(" ",f3, end = "")


n = int(input("Enter a number : "))
fibo(n)