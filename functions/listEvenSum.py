def even(a):
    count= 0
    sum = 0
    for i in range(0, (len(a))):
        if(a[i] % 2 == 0):
            sum += a[i]
            count += 1
    avg =  sum /count

    return avg


a = [2, 5, 8, 4, 9]
print("%.2f" % even(a))