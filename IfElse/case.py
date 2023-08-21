def case(c):
    if(c >= 'a' and c <='z'):
        return "Lowercase"
    elif(c >= 'A' and c <= 'Z'):
        return "Upercase"
    

c = input("Enter character : ")
print(case(c))