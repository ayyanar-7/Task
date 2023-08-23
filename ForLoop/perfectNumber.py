def display():
    
    for i in range(2, 501):
        sum = 1
        for j in range(2, (i//2) + 1):
            if(i % j == 0):
                sum += j
        if(sum == i):
            print(i)


display()