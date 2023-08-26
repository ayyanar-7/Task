def isSort(a):
    min = a[0]
    for i in range(1, len(a)):
        if(min < a[i]):
            min = a[i]
        else:
            return False
    return True


a = [5, 10, 15, 2, 47]
if(isSort(a)):
    print("Sorted")
else:
    print("Not sorted")