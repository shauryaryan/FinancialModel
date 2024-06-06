# backend/scripts/clean_data.py
import sys
import pandas as pd

def clean_data(file_path):
    df = pd.read_csv(file_path)
    df.dropna(inplace=True)  # Example cleaning operation: drop rows with missing values
    cleaned_file_path = file_path.replace('.csv', '_cleaned.csv')
    df.to_csv(cleaned_file_path, index=False)
    return cleaned_file_path

if __name__ == "__main__":
    file_path = sys.argv[1]
    cleaned_file_path = clean_data(file_path)
    print(cleaned_file_path)  # Print the path for server.js to capture

