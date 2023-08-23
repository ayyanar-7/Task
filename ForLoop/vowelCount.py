def count(str):
    count = 0
    for i in range(0, len(str)):
        if(str[i] == 'a' or str[i] == 'e' or str[i] == 'i' or str[i] == 'o' or str[i] == 'u' or 
           str[i] == 'A' or str[i] == 'E' or str[i] == 'O' or str[i] == 'U' or str[i] == 'I'):
            count += 1
    
    return count


str = input("Enter a string : ")
print(count(str))
            