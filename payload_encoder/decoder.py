from shared.protocol_secure import secure_decode
from stegano import lsb

def extract_payload_image(image_path: str, key: bytes) -> str: 
    try:
        # 1. lsb.reveal() para extrair o payload.
        extracted_data_str = lsb.reveal(image_path) 

        # 2. # Já é bytes, não precisa codificar
        extracted_data_bytes = extracted_data_str  

        # 3. Passe os bytes extraídos e a chave para secure_decode
        message = secure_decode(extracted_data_bytes, key)
        return message  

    except Exception as e:
        print(f"Erro ao extrair ou decodificar o payload: {e}")
        return None 

