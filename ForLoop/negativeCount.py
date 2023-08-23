def count(a):
    count = 0
    for i in range(len(a)):
        if(a[i] < 0):
            count += 1
    
    return count


a = [5, 10, -3, 8, -2]
print(count(a))