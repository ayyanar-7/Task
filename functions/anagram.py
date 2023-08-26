def anagram(s1, s2):
    str1 = sort(s1)
    str2 = sort(s2)
    if(str1 == str2):
        return True
    return False


def sort(a):
    for i in range(len(a)):
        min = a[i]
        for j in range(i + 1, len(a)):
            if(min > a[j]):
                min = a[j]
                k = j
        a[k] = a[i]
        a[i] = min
    
    return str


s1 = input("Enter string 1 : ")
s2 = input("Enter string 2 : ")
if(anagram(s1, s2)):
    print("Anagram")
else:
    print("Not an Anagram")