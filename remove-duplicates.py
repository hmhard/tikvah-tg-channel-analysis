import json

# Path to the input JSON file containing an array of words
input_file_path = 'stop_words.json'

# Path to the output JSON file where unique words will be saved
output_file_path = 'unique_words.json'

# Open and load the JSON file
with open(input_file_path, 'r', encoding='utf-8') as file:
    words = json.load(file)  

# Remove duplicates by converting the list to a set, then back to a list
unique_words = list(set(words))

# Optionally, sort the words (if order is important)
unique_words.sort()

# Save the unique words to a new JSON file
with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(unique_words, file, ensure_ascii=False, indent=4)

print(f"Unique words saved to {output_file_path}")
