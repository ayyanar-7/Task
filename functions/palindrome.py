def ispalin(str):
    rev = ""
    j = 0
    for i in range(len(str) - 1, -1, -1):
        rev += str[i]
    if(str == rev):
        return True
    return False


str = input("Enter a string : ")
if(ispalin(str)):
    print("Palindrome")
else:
    print("Not a palindrome")