def fever(temp):
    if(temp >= 37.5):
        return "Fever"
    return "No Fever"


temp=float(input("Enter temperature : "))
print(fever(temp))