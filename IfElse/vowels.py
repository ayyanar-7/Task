def vowel(x):
    if(x == 'a' or x == 'e' or x == 'i' or x == 'o' or x == 'u' or
       x == 'A' or x == 'E' or x == 'I' or x == 'O' or x == 'U'):
        return "Vowel"
    return "Consonant"


x = input("Enter a element : ")
print(vowel(x))