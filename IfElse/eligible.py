def isEli(age):
    return age >= 18


age = int(input("Enter age : "))
if(isEli(age)):
    print("Eligible")
else:
    print("Not eligible")