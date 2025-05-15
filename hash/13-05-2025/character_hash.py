# Question: How many times does a character occur in a string with lowercase alphabets only.

input_string = 'abacdabdefgqwertyuiopa'
# pre-computing the hash: counting the occurences of a char which can be accessed after using a index.
char_hash = [0] * 26

for char in input_string: 
    ascii_val = ord(char)
    char_hash[ascii_val - 97] += 1

# function to get the occurences of a char from the input string using character hash
def get_occurence(char):
    ascii_val = ord(char)
    return char_hash[ascii_val - 97]

print(get_occurence('d'))


# Question: How many times does any ascii character occur in a string.

input_string_two = '!@#$%^&*+QWERTYlkjhgfdscvbnm>?">?"}'

char_hash_two = [0] * 128
for char in input_string_two: 
    ascii_val = ord(char)
    char_hash_two[ascii_val] += 1

def get_occurence_two(char):
    ascii_val = ord(char)
    print(ascii_val)
    return char_hash_two[ascii_val]

print(get_occurence_two('?'))