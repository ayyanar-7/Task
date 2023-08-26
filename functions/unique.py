def unique(a):
    new = []
    new.append(a[0])
    for i in range(1, len(a)):
        found = False
        for j in range(len(new)):
            if(a[i] == new[j]):
                found = True
                break
        if(found == False):
            new.append(a[i])
    
    return new


a = [3, 5, 8, 3, 5, 1, 8]
print(unique(a))