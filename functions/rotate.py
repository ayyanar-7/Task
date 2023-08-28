def rotate(a, n):
    temp = []
    for i in range(n):
        temp.append(a[i])
    i = 0
    for j in range(n, len(a)): 
        a[i] = a[j]
        i += 1
    for j in range(len(temp)):
        a[i] = temp[j]

        i += 1

    return a


a = [2, 4, 6, 8, 10, 12]
n = int(input("Enter a position : "))

print(rotate(a, n))