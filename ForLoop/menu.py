def count(a):
    count = 0
    for i in range(len(a)):
        count += 1

    return count


def max(a):
    max = a[0]
    for i in range(1, len(a)):
        if(max < a[i]):
            max = a[i]
    
    return max


def min(a):
    min = a[0]
    for i in range(1, len(a)):
        if(min > a[i]):
            min = a[i]

    return min


def avg(a):
    sum = 0
    for i in range(len(a)):
        sum += a[i]
        avg = sum / len(a)

    return avg


a = []
while(1):
    opt = int(input("Enter a number : "))
    if(opt == -1):
        break
    a.append(opt)
    
    

print("Number of positive integers : %d" % count(a))
print("The max : %d" % max(a))
print("The min : %d" % min(a))
print("The avg : %f" % avg(a))