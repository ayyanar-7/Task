n = int(input("Enter : "))
k=1
for i in range(1, n+1):
    for j in range(1, (n-i) + 1):
        print(" ",end="")
    print("*"*k)
    k+=2
