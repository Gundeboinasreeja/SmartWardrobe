import os
import zipfile
import pandas as pd
from PIL import Image

# Step 1: Unzip the folder
zip_path = r"C:/Users/HP/Downloads/archive.zip"  # Replace with the path to your zip file
extract_path = r"C:/Users/HP/Downloads/extractedzip file"  # Replace with your desired extract path

with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_path)

# Step 2: Initialize an empty list to store image metadata
image_data = []

# Step 3: Walk through the extracted folder, read each image, and gather metadata
for root, dirs, files in os.walk(extract_path):
    for file in files:
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif', '.tiff')):  # Check if file is an image
            file_path = os.path.join(root, file)
            try:
                with Image.open(file_path) as img:
                    # Gather metadata
                    image_info = {
                        "File Name": file,
                        "File Path": file_path,
                        "Format": img.format,
                        "Mode": img.mode,
                        "Size (width x height)": f"{img.width} x {img.height}"
                    }
                    image_data.append(image_info)
            except Exception as e:
                print(f"Could not process {file}: {e}")

# Step 4: Convert metadata to a DataFrame and save to an Excel file
df = pd.DataFrame(image_data)
output_excel_path = "images_metadata.xlsx"  # Desired output Excel file path
df.to_excel(output_excel_path, index=False)

print(f"Image metadata successfully saved to {output_excel_path}")
