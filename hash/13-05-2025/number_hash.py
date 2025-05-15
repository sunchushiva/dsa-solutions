# Question: How many times does an element occur in an integer array.

int_array = [1, 2, 3, 4, 5, 1, 2, 4, 9, 3, 2]
# pre-computing the hash: counting the occurences of an element which can be accessed after using a index.
num_hash = [0] * 10**7

for element in int_array: 
    num_hash[element] += 1

# function to get the occurences of an element from the input array using number hash
def get_occurence(num):
    return num_hash[num]

print(get_occurence(3))