def result(mark):
    if(mark > 60):
        return "Pass"
    return "Fail"


mark = int(input("Enter mark : "))
print(result(mark))