def body(height, weight):
    bmi=weight/(height*height)
    if(bmi < 18.5):
        return "Underweight"
    elif(bmi < 24.9):
        return "Normal weight"
    elif(bmi < 29.9):
        return "Overweight"
    elif(bmi >= 30):
        return "Obese"
    

height=float(input("Enter height : "))
weight=float(input("Enter weight : "))
print(body(height, weight))