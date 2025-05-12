def print_name(name, current, n):

    if current > n:
        return 
    
    print(name)
    print_name(name, current + 1, n)

print_name("Shiva", 1, 5)


def print_numbers(current, final):

    if current > final:
        return
    
    print(current)
    print_numbers(current + 1, final)

print_numbers(1, 20)