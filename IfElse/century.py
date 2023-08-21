def isCen(year):
    return year % 100 == 0


year = int(input("Enter year : "))
if(isCen(year)):
    print("Century year")
else:
    print("Not century year")