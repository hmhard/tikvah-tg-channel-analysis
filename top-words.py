import json

# Path to the JSON file
file_path = 'final_filtered_data.json'

with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)


top_n = 500

top = dict(sorted(data.items(), key=lambda item: item[1], reverse=True)[:100])

print(json.dumps(top, indent=4))
with open("top-"+str(top_n)+".json", 'w', encoding='utf-8') as file:
    json.dump(top, file, ensure_ascii=False, indent=4)