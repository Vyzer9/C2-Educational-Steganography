# Useful Things (Optional Utilities)
from PIL import Image

def load_image(path):
    return Image.open(path)

def save_image(image, path):
    image.save(path)