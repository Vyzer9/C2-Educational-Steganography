from shared.secure import secure_encode
from stegano.lsb import encode_lsb  
from encoder.utils import load_image  

def gerar_payload_image(command: str, key: bytes, image_base: str, image_exit: str):
    payload = secure_encode("command", command, key)   
    encode_lsb(image_base, payload, imagem_exit)       