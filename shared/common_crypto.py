from cryptography.fernet import Fernet

def generate_key() -> bytes:
    """Generate a new Fernet key (bytes)."""
    return Fernet.generate_key()

def create_fernet(key: bytes) -> Fernet:
    """Create a Fernet object with the given key."""
    return Fernet(key)

def encrypt_fernet(text: str, fernet_obj: Fernet) -> bytes:
    """Encrypt a message using Fernet. Returns bytes."""
    return fernet_obj.encrypt(text.encode("utf-8"))

def decrypt_fernet(ciphertext: bytes, fernet_obj: Fernet) -> str:
    """Decrypt a message encrypted with Fernet. Returns str."""
    return fernet_obj.decrypt(ciphertext).decode("utf-8")

# Helpers opcionais para simplificar o uso em outros módulos
def encrypt_with_key(text: str, key: bytes) -> bytes:
    return create_fernet(key).encrypt(text.encode("utf-8"))

def decrypt_with_key(ciphertext: bytes, key: bytes) -> str:
    return create_fernet(key).decrypt(ciphertext).decode("utf-8")

if __name__ == "__main__":
    key = generate_key()
    f = create_fernet(key)

    text = "Secret text to be encrypted."
    ciphertext = encrypt_fernet(text, f)
    plaintext = decrypt_fernet(ciphertext, f)

    print(f"Key: {key.decode()}")
    print(f"Original text: {text}")
    print(f"Text encrypted (bytes -> str for print): {ciphertext.decode()}")
    print(f"Text decrypted: {plaintext}")
