def mul(a, b):
    m1 = len(a)
    n1 = len(a[0])
    m2 = len(b)
    n2 = len(b[0])

    if(n1 != m2):
        print("Can't multiply")
        return 
    ans = [[0] * n2 for _ in range(m1)]
    for i in range(m1):
        for j in range(n1):
            for k in range(n1):
                ans[i][j] += a[i][k] * b[k][j]
    
    return ans


a = [[2, 3], [4, 5], [9, 6]]
b = [[4, 7], [2, 6]]

print(mul(a, b))
    
    
