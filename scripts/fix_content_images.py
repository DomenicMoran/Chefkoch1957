import json
import re
import os

def fix_image_paths():
    json_path = r'C:\Users\domen\Documents\Chefkoch1957\src\data\posts.json'
    with open(json_path, 'r', encoding='utf-8') as f:
        posts = json.load(f)

    # Regex to find these deep blogger/httrack paths
    # Example: ../../../blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ6F589Dv9Kl8D7JWzrDst06k-WvIKofQjTiCrxEk/s1600/IMG_0810.JPG
    pattern = re.compile(r'\.\./\.\./\.\./[^\s"\'>]+/(?P<filename>[^/\s"\'>]+\.(?:jpg|jpeg|png|JPG|PNG))')

    fixed_count = 0
    for post in posts:
        original_content = post['content']
        # Replace matches with /images/archive/filename
        new_content = pattern.sub(r'/images/archive/\g<filename>', original_content)
        
        if new_content != original_content:
            post['content'] = new_content
            fixed_count += 1

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    
    print(f"Fixed image paths in {fixed_count} posts.")

if __name__ == "__main__":
    fix_image_paths()
