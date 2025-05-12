# Swap function to swap array elements 
def swap(arr, left, right): 

    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp


# Question: Reverse an array 

def array_solution_one(array, left, right):

    if left >= right:
        return
    
    swap(array, left, right)
    array_solution_one(array, left + 1, right - 1)

array_one = [1, 2, 3, 5, 4]
array_solution_one(array_one, 0, len(array_one) - 1)

print(array_one)


def array_solution_two(array, current):

    n = len(array)
    if current >= n//2 :
        return 
    
    swap(array, current, n - 1 - current)
    array_solution_two(array, current + 1)

array_two = [1, 2, 11, 12, 5, 4]
array_solution_two(array_two, 0)

print(array_two)