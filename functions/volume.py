def volume(r):
    return 4 * (22 / 7) * r * r * r


r = float(input("Enter radius : "))
print("%.2f" % volume(r))