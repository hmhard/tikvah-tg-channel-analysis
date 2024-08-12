import json
import re

# Path to the input JSON file with key-value pairs
input_file_path = 'outputs/non_english_keys.json'

# Path to the output JSON file where filtered key-value pairs will be saved
output_file_path = 'outputs/cleared_unwanted_keys.json'

# Regular expressions for identifying unwanted characters in keys
symbols_pattern = re.compile(r'[^\w\s\-]', re.UNICODE)  # Matches any symbols (excluding alphanumeric and whitespace)
numbers_pattern = re.compile(r'\d')  # Matches any digits
emoji_pattern = re.compile("[\U00010000-\U0010FFFF]", flags=re.UNICODE)  # Matches emojis

# Load the JSON file with key-value pairs
with open(input_file_path, 'r', encoding='utf-8') as file:
    key_value_pairs = json.load(file)  

# Function to check if a key contains unwanted characters
def contains_unwanted_characters(s):
    return (symbols_pattern.search(s) or
            numbers_pattern.search(s) or
            emoji_pattern.search(s))

filtered_pairs = {}

for key, value in key_value_pairs.items():
    
    if not contains_unwanted_characters(key):
        filtered_pairs[key]=value


# Save the filtered key-value pairs to a new JSON file
with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(filtered_pairs, file, ensure_ascii=False, indent=4)

print(f"Filtered key-value pairs saved to {output_file_path}")
