<<<<<<< HEAD
from shared.secure import secure_encode
from stegano.lsb import encode_lsb  
from encoder.utils import load_image  

def gerar_payload_image(command: str, key: bytes, image_base: str, image_exit: str):
    payload = secure_encode("command", command, key)   
    encode_lsb(image_base, payload, imagem_exit)       
=======
from shared.protocol_secure import secure_encode
from stegano import lsb 

def gerar_payload_image(command: str, key: bytes, image_base: str, image_exit: str):
    payload_bytes = secure_encode(command.encode('utf-8'), key) 

    # 2. Use lsb.hide e .save do stegano corretamente.
    try:
        stegged_image = lsb.hide(image_base, payload_bytes.decode('utf-8'))
        stegged_image.save(image_exit)
        print(f"Payload escondido com sucesso em '{image_exit}'")
    except Exception as e:
        print(f"Erro ao esconder o payload: {e}")
>>>>>>> 757edb6 (Updates in shared and payload)
