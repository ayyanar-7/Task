def com(a, b):
    com = []
    for i in range(len(a)):
        for j in range(len(b)):
            if(a[i] == b[j]):
                com.append(a[i])

    return com


a = [4, 8, 12, 4, 3, 6, 4, 7]
b = [5, 12, 4, 8, 7]

print(com(a, b))