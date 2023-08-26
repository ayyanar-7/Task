def length(a):
    min = len(a[0])
    for i in range(1, len(a)):
        if(min > len(a[i])):
            return False
        min = len(a[i])
    return True


a = ["Hi", "ice", "Ayyanar"]
if(length(a)):
    print("Sorted")
else:
    print("Not sorted")