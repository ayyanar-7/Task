def sort(a):
    for i in range(len(a)):
        min = a[i]
        k = i
        for j in range(i + 1, len(a)):
            if(min > a[j]):
                min = a[j]
                k = j
        if(k != i):
            temp = a[i]
            a[i] = min
            a[k] = temp
    
    return a


def list(l1, l2):
    
    return l1 + l2


l1 = [2, 4, 6, 8, 10]
l2 = [1, 3, 5, 7, 9]

l = list(l1, l2)
print(l)
print(sort(l))