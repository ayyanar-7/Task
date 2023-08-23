def avg(a):
    sum = 0
    for i in range(len(a)):
        sum += a[i]

    return sum / len(a)


a = [5, 10, 2, 8, 15, 20, 3]
print(avg(a))