def exp(age, year):
    if(age < 25):
        print("Entry-level")
    elif(age >= 25 and age <= 40) and (year >= 1):
        print("Junior")
    elif(age > 40) and (year >= 5):
        print("Senior")
    elif(age > 40 and year >10):
        print("Expert")


age = int(input("Enter age : "))
year = int(input("No of year work experience : "))
exp(age, year)
    
    