def pattern(n):
    for i in range(1, n + 1):
        for j in range(i, n):
            print(" ", end ="")
        j = 1
        k = 1
        while(k < i * 2):
            print(j, end = "")
            if(i > k):
                j += 1
            else:
                j -= 1
            k += 1
        print()


n = int(input("Enter n : "))
pattern(n)