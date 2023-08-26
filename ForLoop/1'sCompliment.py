def complement(n):
    s = str(n)
    res = ""
    for i in range(len(s)):
        if s[i] == '1':
            res += '0'
        else:
            res += '1'
    return res


n = int(input("Enter a number : "))
print(complement(n))