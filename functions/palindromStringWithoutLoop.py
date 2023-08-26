def palindrome(str, s, e):
    if(s > len(str) // 2):
        return True
    if(str[s] == str[e]):
        return palindrome(str, s + 1, e - 1)
    else:
        return False
    

str = input("Enter a string : ")
if(palindrome(str, 0, len(str) - 1)):
    print("Palindrome")
else:
    print("Not a palindrome")
