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

a = [15, 4, 8, 21, 2]
print("Before sorting : ",a)
sort(a)
print("After sorting : ",a)
