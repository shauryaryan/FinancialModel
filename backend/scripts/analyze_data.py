# backend/scripts/analyze_data.py
import sys
import pandas as pd

def analyze_data(file_path):
    df = pd.read_csv(file_path)
    analysis_result = df.describe()  # Example analysis: get descriptive statistics
    analysis_file_path = file_path.replace('.csv', '_analysis.csv')
    analysis_result.to_csv(analysis_file_path)
    return analysis_file_path

if __name__ == "__main__":
    file_path = sys.argv[1]
    analysis_file_path = analyze_data(file_path)
    print(analysis_file_path)  # Print the path for server.js to capture

