from stegano.lsb import hide
from shared.protocol_secure import secure_encode

input_image = "./payload_encoder/images/ImageTestC2.png"
payload_path = "./payload_encoder/payloads/Shell_payload.txt"
output_image = "./payload_encoder/images/ImageTestC2.png"
key = b'4NgK9NVbz2XNukKbptjy2taiJGC2Un9b8IWqsCcTIUA='  # Use a mesma chave em todos os scripts

with open(payload_path, "r") as f:
    secret = f.read()

# Codifica o payload antes de esconder
payload_encoded = secure_encode("msg", secret, key)

secret_img = hide(input_image, payload_encoded)
secret_img.save(output_image)

print("Payload escondido na imagem!")