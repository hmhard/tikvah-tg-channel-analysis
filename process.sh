#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <top_n>"
    exit 1
fi

top_n="$1"

python_files=(
    # "words-extractor.py"
    "clear-non-alpha.py"
    "separate.py"
    "remove_unwanted_chars_from_keys.py"
    "clean_stop_words.py"
)
pip install -r requirements.txt

for file in "${python_files[@]}"
do
    echo "Running $file..."
    python "$file"
    if [ $? -ne 0 ]; then
        echo "Error: $file failed to run."
        exit 1
    fi
    echo "$file completed successfully."
done

echo "Running TOP  $top_n..."
python "top-words.py" $top_n
if [ $? -ne 0 ]; then
    echo "Error: $last_file failed to run."
    exit 1
fi

echo "All Processing is done executed."
