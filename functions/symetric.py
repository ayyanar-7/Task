def sym(a):
    rev = ""
    for i in range(len(a) - 1, -1, -1):
        rev += a[i]
    if(a == rev):
        return True
    return False


a = input("Enter a string : ")
if(sym(a)):
    print("Symetric")
else:
    print("Not a symetric")
