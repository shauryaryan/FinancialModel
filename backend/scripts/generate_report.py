# backend/scripts/generate_report.py
import sys
import pandas as pd
import matplotlib.pyplot as plt

def generate_report(file_path):
    df = pd.read_csv(file_path)
    report_file_path = file_path.replace('.csv', '_report.pdf')

    # Example report: generate a simple plot
    plt.figure(figsize=(10, 6))
    df.plot()
    plt.title('Data Report')
    plt.savefig(report_file_path)

    return report_file_path

if __name__ == "__main__":
    file_path = sys.argv[1]
    report_file_path = generate_report(file_path)
    print(report_file_path)
