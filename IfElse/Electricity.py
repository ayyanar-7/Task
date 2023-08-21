def electric(unit):
    amount =0
    if(unit <= 50):
        amount += unit * 0.5
        return amount
    else :
        amount += 50 * 0.5
        unit -= 50

        if(unit <= 100):
            amount += unit * 0.75
            return amount
        else:
            amount += 100 * 0.75
            unit -= 100

            if(unit <= 100):
                amount += unit * 1.2
                return amount
            else:
                amount += 100 * 1.2
                unit -= 100 
                if(unit <= 250):
                    amount += unit * 1.5
                    return amount
                else:
                    amount += unit * 1.5
                    return amount
                

unit = int(input("Enter no of units : "))
print("Electricity bill = %.2f"%electric(unit))
    


        
    