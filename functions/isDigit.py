def digit(str):
    for i in range(len(str)):
        c = str[i]
        match = False
        if(c >= '0') and (c <= '9'):
            match = True
        if(not match):
            return False
    return True


str = input("Enter a string : ")
if(digit(str)):
    print("Digit only")
else:
    print("Not digit only")
   