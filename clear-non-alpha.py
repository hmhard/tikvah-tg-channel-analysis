import json
import re

file_path = 'outputs/word_dictionary.json'

valid_keys_file = 'outputs/valid_keys.json'
invalid_keys_file = 'outputs/invalid_keys.json'

with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

symbols_pattern = re.compile(r'^[\W_]+$', re.UNICODE)  # Matches only non-alphanumeric characters (symbols)
numbers_pattern = re.compile(r'^\d+$')  # Matches only numbers
emoji_pattern = re.compile("[\U00010000-\U0010FFFF]", flags=re.UNICODE)  # Matches emojis

valid_keys = {}
invalid_keys = {}

def is_only_emoji(s):
    return all(emoji_pattern.match(c) for c in s)

# Separate keys based on whether they are only symbols, only numbers, or only emojis
for k, v in data.items():
    if symbols_pattern.match(k) or numbers_pattern.match(k) or is_only_emoji(k):
        invalid_keys[k] = v
    else:
        valid_keys[k] = v

# Save valid keys to a JSON file
with open(valid_keys_file, 'w', encoding='utf-8') as file:
    json.dump(valid_keys, file, ensure_ascii=False, indent=4)

# Save invalid keys to a JSON file
with open(invalid_keys_file, 'w', encoding='utf-8') as file:
    json.dump(invalid_keys, file, ensure_ascii=False, indent=4)

print(f"Valid keys saved to {valid_keys_file}")
print(f"Invalid keys saved to {invalid_keys_file}")
