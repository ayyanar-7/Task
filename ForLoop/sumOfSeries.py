def sum(n):
    sum = 0
    for i in range(1, n + 1):
        temp = (1 / i ** i)
        print("1 / %d ** %d = %f"% (i, i, temp), end = " ")
        sum += temp
    
    return sum


n = int(input("Enter n : "))
print()
print("sum = %f" % sum(n))