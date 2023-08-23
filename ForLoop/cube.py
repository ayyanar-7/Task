import math
def cube(n):
    return pow(n, 3)


n = int(input("Enter number of integers : "))
for i in range(1, n + 1):
    print("Number is : %d and the cube of %d is : %d" % (i, i, cube(i)))
