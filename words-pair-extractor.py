import os
import json
from bs4 import BeautifulSoup
from collections import defaultdict

# Directory containing HTML files
html_folder = './files/'

# Function to clean and split text into words
def extract_words(text):
    words_list = text.lower()
    # NOTE: additional processing will be added later
    return words_list

def break_sentence_into_pairs(sentence):
    words_lib = sentence.lower().split()
    pairs = []
    
    for i in range(len(words_lib) - 1):
        temp_word = f"{words_lib[i]}-{words_lib[i + 1]}"
        if len(temp_word) > 1 and (temp_word[0] == 'የ' or temp_word[0] == 'በ'):
            temp_word = temp_word[1:]
        
        pairs.append(temp_word)
    
    return pairs

word_dict = defaultdict(int)

count = 0
for filename in os.listdir(html_folder):
    if filename.endswith(".html"):
        print(filename)
        filepath = os.path.join(html_folder, filename)
        
        # Open and parse the HTML file
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            text = soup.get_text()  # Extract text from the HTML
            words = break_sentence_into_pairs(text)
            print(len(words))
            
            
            # Update word count dictionary
            for word in words:
                word_dict[word] += 1

# Convert defaultdict to regular dict
word_dict = dict(word_dict)

# Save the word dictionary to a JSON file
output_file = 'outputs/word_pair_dictionary.json'
with open(output_file, 'w', encoding='utf-8') as json_file:
    json.dump(word_dict, json_file, ensure_ascii=False, indent=4)

print(f"Word pair dictionary saved to {output_file}")
