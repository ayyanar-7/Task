def integer(a):
    str_value = ""
    for i in a:
        str_value += str(i)
    return int(str_value)

a = [2, 8, 5, 7, 1]
print(integer(a))
