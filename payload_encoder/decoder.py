<<<<<<< HEAD
from shared.secure import secure_decode
from stegano.lsb import decode_lsb

def extract_payload_image(imagem:str,key:bytes) -> dict:
data = decode_lsb(image)
message = secure_decode(data,key)
return message
=======
from shared.protocol_secure import secure_decode
from stegano import lsb 

def extract_payload_image(image_path: str, key: bytes) -> str: 
    try:
        # 1. Use lsb.reveal() para extrair o payload.
        extracted_data_str = lsb.reveal(image_path) 

        # 2. O dado extraído (string) precisa ser convertido para bytes
        extracted_data_bytes = extracted_data_str.encode('utf-8')

        # 3. Passe os bytes extraídos e a chave para secure_decode
        message = secure_decode(extracted_data_bytes, key)
        return message.decode('utf-8') 

    except Exception as e:
        print(f"Erro ao extrair ou decodificar o payload: {e}")
        return None 
>>>>>>> 757edb6 (Updates in shared and payload)
