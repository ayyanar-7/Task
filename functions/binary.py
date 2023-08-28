def binary(n):
    bi = ""
    x = ""
    while(n):
        rem = n % 2
        n = n // 2
        x += (str(rem))
    for i in range(len(x) - 1, -1, -1):
        bi += x[i]

    return bi
    


n = int(input("Enter n value : "))
print(binary(n))