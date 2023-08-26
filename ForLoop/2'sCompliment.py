def complement(n):
    s = str(n)
    res = ""
    for i in range(len(s)):
        if s[i] == '1':
            res += '0'
        else:
            res += '1'
    return res


def two(n):
    s = str(n)
    if(s[len(s) - 1] == '1'):
        s = s[:-2]
        s += '10'
    else:
        s = s[:-1]
        s += '1'
    return s

n = int(input("Enter a number : "))
one = complement(n)
print("1's compliment : ", one)
print("2's compliment : ", two(one))