def leap(y):
    if(y % 400 == 0):
        return True
    elif(y % 100 == 0):
        return False
    elif(y % 4 == 0):
        return True
    return False


def list(y1, y2):
    for i in range(y1, y2):
        if(leap(i)):
            print(i)


y1 = int(input("Enter starting year  : "))
y2 = int(input("Enter ending year : "))

list(y1, y2)
