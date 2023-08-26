def ascii(start, end):
    for i in range(start, end + 1):
        print("%d --> %c" % (i, chr(i)))


start = int(input("Enter starting number : "))
end = int(input("Enter ending number : "))
ascii(start, end)