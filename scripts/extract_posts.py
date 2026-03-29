import os
import re
import json
from html import unescape
from datetime import datetime

# Path to the mirrored blog folder
BASE_DIR = r"C:\Users\domen\Documents\Chefkoch HTML\Chefkoch 1957\chefkoch1957.blogspot.com"
OUTPUT_FILE = r"C:\Users\domen\Documents\Chefkoch1957\src\data\posts.json"
DATA_DIR = r"C:\Users\domen\Documents\Chefkoch1957\src\data"

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

# Regex patterns
TITLE_RE = re.compile(r"<h3 class=['\"]post-title entry-title['\"] itemprop=['\"]name['\"]>\s*(.*?)\s*</h3>", re.DOTALL)
DATE_RE = re.compile(r"<h2 class=['\"]date-header['\"]>\s*<span>\s*(.*?)\s*</span>\s*</h2>", re.DOTALL)
# Improved body regex: find the start, then grab everything until the post-footer or next clear-both
BODY_RE = re.compile(r"<div class=['\"]post-body entry-content['\"].*?itemprop=['\"]description articleBody.*?>(.*?)(?:<div style=['\"]clear: both;['\"]>|</div>\s*<div class=['\"]post-footer['\"]>)", re.DOTALL)
IMAGE_RE = re.compile(r"<img.*?src=['\"](.*?)['\"]", re.DOTALL)

def extract_posts():
    posts = []
    
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith(".html") and file != "index.html":
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                        # Extract basic info
                        title_match = TITLE_RE.search(content)
                        date_match = DATE_RE.search(content)
                        body_match = BODY_RE.search(content)
                        
                        if title_match and date_match and body_match:
                            title = unescape(title_match.group(1).strip())
                            date_str = unescape(date_match.group(1).strip())
                            body = body_match.group(1).strip()
                            
                            # Extract images from body
                            images = IMAGE_RE.findall(body)
                            
                            # Clean up relative image paths for the web
                            # Blogger images often have filenames like 8E628440-267F-...
                            # I'll try to map them to the public archive
                            clean_images = []
                            for img_url in images:
                                basename = os.path.basename(img_url)
                                # Many filenames in "Bilder Chefkoch" are uppercase/UUID-like
                                # I'll just store the basename for now
                                clean_images.append(basename)
                            
                            posts.append({
                                "id": file.replace(".html", ""),
                                "title": title,
                                "date": date_str,
                                "content": body,
                                "images": clean_images
                            })
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    
    # Sort posts by date if possible (though date format is German)
    # For now, we keep them as is
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    
    print(f"Extracted {len(posts)} posts to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_posts()
