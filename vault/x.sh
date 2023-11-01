#!/usr/bin/env sh

# Recursively process directories and move files with the same name as
# their parent folder to be inside that folder with the name
FilesNameAsFolder_moveFilesToFolderAsIndex() {
    local location="$1" # Get the directory location from the argument
    shopt -s globstar

    for file in "$location"/**/*.md; do
        if [[ -f $file ]]; then
            dir=$(dirname "$file")
            filename=$(basename "$file")
            filename_no_ext="${filename%.*}"

            if [[ -d "$dir/$filename_no_ext" ]]; then
                mv "$file" "$dir/$filename_no_ext/0_index.md"
            # # for debug
            # else
            #     echo "$file is OK"
            fi
        fi
    done
}

# Call the function and pass the directory location as an argument
# FilesNameAsFolder_moveFilesToFolderAsIndex .

## Handle blanks
# check if file's last non-empty line starts with just "Created"
# essentially checking if it's an empty file
Blanks_fileHasCreated() {
    local file="$1"
    local second_line=$(awk 'NF && ++c==2 && tolower($0) ~ /^created /' "$file")
    local last_line=$(awk 'NF{a=$0}END{print a}' "$file")

    if [[ -n "$second_line" && "$second_line" == "$last_line" ]]; then
        return 0
    else
        return 1
    fi
}

Blanks_fileHasCreated_test() {
    shopt -s globstar

    for file in **/*index.md; do
        if [[ -f $file ]]; then
            if fileHasCreated "$file"; then
                echo "File $file has 'Created' in the second line."
            else
                echo "File $file does not meet the condition."
            fi
        fi
    done
}
# Blanks_fileHasCreated_test
Blanks_deleteFilesThatHaveCreatedTextOnly() {
    shopt -s globstar

    for file in **/*index.md; do
        if [[ -f $file ]]; then
            if fileHasCreated "$file"; then
                rm "$file"
                echo "File $file deleted."
            fi
        fi
    done
}

# Blanks_deleteFilesThatHaveCreatedTextOnly
