import json

data_file_path = 'outputs/cleared_unwanted_keys.json'  
keys_to_remove_file_path = 'outputs/stop_words.json' 
output_file_path = 'outputs/final_filtered_data.json' 

with open(data_file_path, 'r', encoding='utf-8') as file:
    key_value_pairs = json.load(file) 

with open(keys_to_remove_file_path, 'r', encoding='utf-8') as file:
    keys_to_remove = json.load(file) 


key_value_dict = {k: v for k, v in key_value_pairs.items()}

filtered_dict = {k: v for k, v in key_value_dict.items() if k not in keys_to_remove}

filtered_key_value_pairs = [{k:v} for k, v in filtered_dict.items()]

with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(filtered_dict, file, ensure_ascii=False, indent=4)

print(f"Filtered data saved to {output_file_path}")
