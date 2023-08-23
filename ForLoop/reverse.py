def reverse(str):
    rev = ""
    for i in range(len(str) - 1, -1, -1):
        rev = rev + str[i]
    
    return rev


str = input("Enter string : ")
print(reverse(str))
