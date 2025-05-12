def print_reverse_numbers(current, final):

    if current < final:
        return
    
    print(current)
    print_reverse_numbers(current - 1, final)

print_reverse_numbers(20, 1)


def print_numbers_backtrack(current, final):

    if current < final:
        return
    
    print_numbers_backtrack(current - 1, final)
    print(current)

print_numbers_backtrack(10, 1)


def print_reverse_numbers_backtrack(current, final):

    if current > final:
        return
    
    print_reverse_numbers_backtrack(current + 1, final)
    print(current)

print_reverse_numbers_backtrack(1, 10)