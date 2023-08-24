def frequency(n):
    dict = {}
    while(n != 0):
        rem = n % 10
        if(rem in dict):
            dict[rem] += 1
        else:
            dict[rem] = 1
        n = n // 10
    
    return dict


n = int(input("Enter a number : "))
print(frequency(n))