def prime():
    count = 0
    for i in range(3, 101):
        found = False
        for j in range(2, (i // 2) + 1):
            if(i % j == 0):
                found = True
                break

        if(found == False):
            print(i, end = " ")


prime()