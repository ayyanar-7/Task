def pressure(sb, db):
    if(sb < 120 and db < 80):
        return "Normal"
    elif(sb < 129 and db < 80):
        return "Elavated"
    elif(sb < 139 or db < 80 & db <= 89):
        return "Stage 1 Hypertension"
    elif(sb >= 140 | db <= 90):
        return "Stage 2 Hypertension"
    

sb = int(input("Enter systolic blood pressure : "))
db = int(input("Enter diastolic blood pressure : "))
print(pressure(sb, db))