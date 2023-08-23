def product(a):
    pro = 1
    for i in range(len(a)):
        pro *= a[i]
    
    return pro

a = [1, 6, 5, 8, 10]
print(product(a))