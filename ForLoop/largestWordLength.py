def count(sen):
    count = 0
    max = 0
    for i in range(len(sen)):
        if(sen[i] != " " and sen[i] != "\t" and sen[i] != "\0"):
            count += 1
        else:
            count = 0
        if(max < count):
            max = count
    
    return max


sen = input("Enter s sentence : ")
print(count(sen))