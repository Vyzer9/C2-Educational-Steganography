from cryptography.fernet import Fernet


def generate_key():
    # Generates a new kernet key
    return Fernet.generate_key()


def create_fernet(key):
    #Creates a Fernet object with the given key
    return Fernet(key)

def encrypt_fernet(text, fernet):
    #Encrypt a message using Fernet
    text_bytes = text.encode()
    text_encrypted = fernet.encrypt(text_bytes)
    return text_encrypted


def decrypt_fernet(text_encrypted, fernet_obj): 
    #Decrypts a message encrypted with Fernet.
    text_deciphered_bytes = fernet_obj.decrypt(text_encrypted) 
    return text_deciphered_bytes.decode() 



if __name__ == "__main__":
    # Este código só será executado quando você rodar 'python common_crypto.py'
    # Não será executado se você fizer 'import common_crypto' em outro arquivo.
    chave = generate_key()
    fernet_obj = create_fernet(chave)
    text = "Secret text to be encrypted."
    text_crypted = encrypt_fernet(text, fernet_obj)
    text_deciphered = decrypt_fernet(text_crypted, fernet_obj)

    print(f"Key: {chave.decode()}")
    print(f"Original text: {text}")
    print(f"Text crypted: {text_crypted.decode()}")
    print(f"Text decrypted: {text_deciphered}")