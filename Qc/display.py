def display(a):
    for i in a:
        for j in i:
            for k in i[j]:
                for m in i[j][k][4]:
                        return i[j][k][4][m]
                    
                  


a = [
    {'abc' : {
        'd' : [
            0, 1, 2, 3,{'c' :
                         "Soundar"
                }
            ]
        }
    }
    ]

print(display(a))