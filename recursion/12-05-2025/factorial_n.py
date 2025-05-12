# Question: Factorial of N 

# Parameterized method
def factorial_solution_one(factorial, n):

    if n < 1:
        print(factorial)
        return 
    
    factorial_solution_one(factorial * n, n - 1)

factorial_solution_one(1, 5)

# Function method

def factorial_solution_two(n):

    if n < 1:
        return 1
    
    return n * factorial_solution_two(n - 1)

print(factorial_solution_two(5))
