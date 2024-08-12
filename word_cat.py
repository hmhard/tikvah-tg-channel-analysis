import json
import re

file_path = 'outputs/word_dictionary.json'

# Open and load the JSON file
with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

pattern = re.compile("^[A-Za-z]+$")

english_keys = {k: v for k, v in data.items() if pattern.match(k)}

print(json.dumps(english_keys, indent=4))
