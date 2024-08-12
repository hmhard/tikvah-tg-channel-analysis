import json
import re

file_path = 'outputs/valid_keys.json'

# Output file paths
english_keys_file = 'outputs/english_keys.json'
non_english_keys_file = 'outputs/non_english_keys.json'

# Open and load the JSON file
with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

pattern = r'[A-Za-z]'

# Dictionaries to store the separated keys
english_keys = {}
non_english_keys = {}

# Separate keys based on the pattern
for k, v in data.items():
    if re.search(pattern, k):
        english_keys[k] = v
    else:
        non_english_keys[k] = v

# Save English keys to a JSON file
with open(english_keys_file, 'w', encoding='utf-8') as file:
    json.dump(english_keys, file, ensure_ascii=False, indent=4)

# Save non-English keys to a JSON file
with open(non_english_keys_file, 'w', encoding='utf-8') as file:
    json.dump(non_english_keys, file, ensure_ascii=False, indent=4)

print(f"English keys saved to {english_keys_file}")
print(f"Non-English keys saved to {non_english_keys_file}")
