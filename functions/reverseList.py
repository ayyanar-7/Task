def reverse(a):
    rev = [None] * len(a)
    j = 0
    for i in range(len(a) - 1, -1, -1):
        rev[j] = a[i]
        j += 1
    
    return rev


a = [5, 10, 15, 20, 25]
print(reverse(a))