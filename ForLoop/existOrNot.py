
def isExist(a):
    n = int(input("Enter n : "))
    found = False

    for i in range(0, len(a)):
        if(n == a[i]):
            found = True
            break
    
    return found

a = [1, 4, 8, 2, 5]

if(isExist(a)):
    print("Exist")
else:
    print("Not Exist")

