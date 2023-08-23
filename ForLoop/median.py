def median(a):
    if(len(a) % 2 == 1):
        med = a[len(a)//2]

        return med
    med1 = a[(len(a) // 2) - 1]
    med2 = a[len(a) // 2]

    return (med1 + med2) / 2


a = [4, 5, 8, 10, 15, 6]
print(median(a))