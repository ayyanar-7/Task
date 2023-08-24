def word(n):
    num_dict = {
        '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five',
        '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
    }
    if n == 0:
        print("Zero")
    else:
        while n != 0:
            x = 1
            num = n
            while num >= 10:
                x *= 10
                num //= 10
            print(num_dict[str(num)], end=" ")
            n = n % x

n = int(input("Enter n value: "))
word(n)
