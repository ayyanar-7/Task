def calsi(str, a, b):
    if(str == "Add"):
        return a + b
    elif(str == "Subtract"):
        return a - b
    elif(str == "Multiply"):
        return a * b 
    elif(str == "Divide"):
        return a % b 
    

str = input("Enter string : ")
a = int(input("Enter a : "))
b = int(input("Enter b : "))

print(calsi(str, a, b))