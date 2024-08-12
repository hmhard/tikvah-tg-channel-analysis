import os
import json
from bs4 import BeautifulSoup
from collections import defaultdict

# Directory containing HTML files
html_folder = './files/'

# Function to clean and split text into words
def extract_words(text):
    words_list = text.lower().split()
    # NOTE: additional processing will be addede later
    return words_list

# Initialize a defaultdict to store word counts
word_dict = defaultdict(int)

# Iterate through each file in the folder
count = 0
for filename in os.listdir(html_folder):
    if filename.endswith(".html"):
        print(filename)
        filepath = os.path.join(html_folder, filename)
        
        # Open and parse the HTML file
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            text = soup.get_text()  # Extract text from the HTML
            words = extract_words(text)
            print(len(words))
            
            # Update word count dictionary
            for word in words:
                word_dict[word] += 1

# Convert defaultdict to regular dict
word_dict = dict(word_dict)

# Save the word dictionary to a JSON file
output_file = 'outputs/word_dictionary.json'
with open(output_file, 'w', encoding='utf-8') as json_file:
    json.dump(word_dict, json_file, ensure_ascii=False, indent=4)

print(f"Word dictionary saved to {output_file}")
