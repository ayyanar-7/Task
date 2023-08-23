
def max(a):
    max = a[0]
    for i in range(0, len(a)):
        if a[i] > max:
            max = a[i]
    
    return max

a = [1, 4, 8, 10, 2]
print("max = %d"% max(a))