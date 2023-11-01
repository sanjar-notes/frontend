#!/bin/bash

for file in $(find . -type f -name "*.md"); do
    if [[ -f $file ]]; then
        dir=$(dirname "$file")
        filename=$(basename "$file")
        filename_no_ext="${filename%.*}"

        parent_dir=$(dirname "$dir")

        if [[ -d "$parent_dir/$filename_no_ext" ]]; then
            mv "$file" "$parent_dir/$filename_no_ext/0_index.md"
        fi
    fi
done

