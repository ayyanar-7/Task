def product(n):
    product = 1
    while(n != 0):
        rem = n % 10
        product *= rem
        n = n // 10
    
    return product

n = int(input("Enter a number : "))
print(product(n))