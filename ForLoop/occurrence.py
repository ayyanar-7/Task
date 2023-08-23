def ocur(a, n):
    for i in range(0, len(a)):
        if(a[i] == n):
            for j in range(i + 1, len(a)):
                if(n == a[j]):
                    return j
                

a = [2, 6, 3, 2, 3]
n = int(input("Enter a number (2, 6, 3, 2, 3) : "))
print(ocur(a, n))
