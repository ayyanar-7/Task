def person(age):
    if(age < 18):
        return "Child"
    elif(age < 65):
        return "Adult"
    return "Senior"


age = int(input("Enter age : "))
print(person(age))