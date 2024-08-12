import json
import argparse

# Path to the JSON file
file_path = 'outputs/final_filtered_data.json'

def main(top_n):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    top = dict(sorted(data.items(), key=lambda item: item[1], reverse=True)[:top_n])

    with open("top-"+str(top_n)+".json", 'w', encoding='utf-8') as file:
        json.dump(top, file, ensure_ascii=False, indent=4)
        

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Process top n.")
    
    parser.add_argument('top_n', type=int, help='An integer representing the top N value')
    args = parser.parse_args()
    main(args.top_n)