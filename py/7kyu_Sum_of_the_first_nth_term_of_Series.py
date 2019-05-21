def series_sum(n):
    if n==0:
        return '0.00'
    elif n==1:
        return '1.00'
    else:
        sum = 0
        for x in range(1, n):
            sum = sum + 1/(1+(3*x))
        if len(str(round(1+sum, 2))) == 3:
            return str(round(1+sum, 2)) + '0'
        else:
            return str(round(1+sum, 2))
