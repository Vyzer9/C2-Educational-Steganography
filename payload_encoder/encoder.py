from shared.secure import secure_encode
from stegano.lsb import encode_lsb  
from encoder.utils import load_image  

def gerar_payload_imagem(comando: str, chave: bytes, imagem_base: str, imagem_saida: str):
    payload = secure_encode("command", comando, chave)   # transforma em string base64 segura
    encode_lsb(imagem_base, payload, imagem_saida)       # esconde na imagem