temp_word = "የሰላም"  # Example word

# Debugging print statements
print(f"Original word: {temp_word}")
print(f"First character: {repr(temp_word[0])}")

# Check and replace the first character if it's 'የ' or 'በ'
if len(temp_word) > 1 and (temp_word[0] == 'የ' or temp_word[0] == 'በ'):
    temp_word = temp_word[1:]
    print(f"Modified word: {temp_word}")
else:
    print("First character is not 'የ' or 'በ', or the word is too short.")

# Final output
print(f"Final word: {temp_word}")
