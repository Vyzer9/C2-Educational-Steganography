from common_protocol import encode_message, decode_message
from common_crypto import encrypt_with_key, decrypt_with_key
import base64

def secure_encode(msg_type: str, data: str, key: bytes) -> str:
    """
    1) Monta a mensagem (JSON) + base64 (protocol)
    2) Criptografa com Fernet
    3) Retorna em base64 para transporte
    """
    proto_b64 = encode_message(msg_type, data)          # str
    encrypted = encrypt_with_key(proto_b64, key)        # bytes
    return base64.b64encode(encrypted).decode("utf-8")  # str

def secure_decode(token: str, key: bytes) -> dict:
    """
    Faz o caminho inverso do secure_encode.
    """
    encrypted = base64.b64decode(token.encode("utf-8")) # bytes
    proto_b64 = decrypt_with_key(encrypted, key)        # str
    return decode_message(proto_b64)                    # dict
