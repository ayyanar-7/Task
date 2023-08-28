def frequent(a):
    most = {}
    for i in a:
        if(i in most):
            most[i] += 1
        else:
            most[i] = 1
    
    for i in most:
        if i == a[0]:
            max = most[a[0]]
            e = i
        else:
            if max < most[i]:
                max = most[i]
                e = i
    
    return e


a = [6, 3, 6, 8, 3, 3]
print(frequent(a))
        