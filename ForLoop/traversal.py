def travel(list):
    for i in range(0, len(list)):
        for j in range(i + 1, len(list)):
            if list[i] == list[j]:
                for k in range(j, len(list) - 1):
                    list[k] = list[k + 1]
                if(k == len(list)):
                    list = list[:-1]

    


list = [2, 2, 2, 2]
print(list)
travel(list)
print(list)