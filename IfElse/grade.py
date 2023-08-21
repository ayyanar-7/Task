def grade(mark):
    if(mark >= 90):
        return 'A'
    elif(mark >= 80):
        return 'B'
    elif(mark >= 70):
        return 'C'
    elif mark >=60:
        return 'D'
    return 'E'


mark = int(input("Enter mark : "))
print("Grade : %c" % grade(mark))