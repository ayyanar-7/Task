import datetime

def ran(n):
    for i in range(1, n + 1):
        time = datetime.datetime.now()
        random = time.microsecond % 100
    
        print(random)


n = int(input("Enter a number : "))
ran(n) 