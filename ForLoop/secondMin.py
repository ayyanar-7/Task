def sec(a):
    min = a[0]
    for i in range(1, len(a)):
        if(min > a[i]):
            sec = min
            min = a[i]
        else:
            sec = a[i]

    return sec


a = [5, 10, 3, 25, 12, 8, 4]
print(sec(a))
