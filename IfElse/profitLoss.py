def profit(sell, cost):
    return sell - cost


sell = int(input("Enter selling prise : "))
cost = int(input("Enter cost prise : "))
amount = profit(sell, cost)
if(amount > 0):
    print("Profit ", amount)
elif(amount == 0):
    print("No profit No loss")
else:
    print("Loss = ", amount)
