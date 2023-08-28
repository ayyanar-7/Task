x1, y1, x2, y2 = 1, 1, 7, 7
x3, y3, x4, y4 = 4, 4, 5, 5
#First Rectangle
#X-axis
if(x1 < x2):
    a = x1
    b = x2
else:
    a = x2
    b = x1
#Y-axis
if(y1 < y2):
    c = y1
    d = y2
else:
    c = y2
    d = y1
#Seconde Rectangle
#X-axis
if(x3 < x4):
    p = x3
    q = x4
else:
    p = x4
    q = x3
#Y-axis
if y3 < y4:
    r = y3
    s = y4
else:
    r = y4
    s = y3
#condition
if(((a <= p) and (b >= p)) or ((a >= p) and (a <= q))) and (((c <= r) and (d >=r) or ((c >= r) and (c <= s)))):
    print("Overlap")
else:
    print("Not Overlap")