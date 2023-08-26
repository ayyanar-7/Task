def long(a):
    long = a[0]
    for i in range(1, len(a)):
        if(len(long) < len(a[i])):
            long = a[i]
    
    return long


a = ["Ayyanar", "Sivagasi", "Pokkiri", "Rose"]
print(long(a))