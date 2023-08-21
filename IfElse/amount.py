def balance(amount):
    if(amount >= 2000):
        print("2000 rupees : %d" % (amount // 2000))
        amount = amount % 2000
    if(amount >= 500):
        print("500 rupees : %d" % ( amount // 500))
        amount = amount % 500
    if(amount >= 200):
        print("200 rupees : %d" % (amount // 200))
        amount = amount % 200
    if(amount >= 100):
        print("100 rupees : %d"% (amount // 100))
        amount = amount % 100
    if(amount >= 50):
        print("50 rupees : %d" % (amount // 50))
        amount = amount % 50
    if(amount >= 20):
        print("20 rupees : %d" % (amount // 20))
        amount = amount % 20
    if(amount >= 10):
        print("10 rupees : %d" % (amount // 10))
        amount = amount % 10
    if(amount >= 5):
        print("5 rupees : %d" % (amount // 5))
        amount = amount % 5
    if(amount >= 2):
        print("2 rupees : %d" % (amount //2))
        amount = amount % 2
    if(amount >= 1):
        print("1 rupees : %d" % (amount // 1))


amount = int(input("Enter amount : "))
balance(amount)