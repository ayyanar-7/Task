def char(c):
    if((c >= 'a' and c <= 'z') or (c >= 'A' and c <= 'Z')):
        return "Alphabet"
    elif(c >= '0' and c <= '9'):
        return "Digit"
    return "Special character"


c = input("Enter a character : ")
print(char(c))