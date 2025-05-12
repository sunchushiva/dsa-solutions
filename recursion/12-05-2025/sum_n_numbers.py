# Question: Sum of N natural numbers 

# Paramterized method
def sum_solution_one(sum, current):

    if current < 1:
        print(sum)
        return sum

    sum_solution_one(sum + current, current - 1)

sum_solution_one(0, 3)

# Function method
def sum_solution_two(n):

    if n == 0:
        return 0
    
    return n + sum_solution_two(n - 1)

print(sum_solution_two(3))