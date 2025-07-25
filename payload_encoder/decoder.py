from shared.secure import secure_decode
from stegano.lsb import decode_lsb

def extract_payload_image(imagem:str,key:bytes) -> dict:
data = decode_lsb(image)
message = secure_decode(data,key)
rerurn message