from payload_encoder.images.image_path import image_path
from payload_encoder.decoder import extract_payload_image

key = b'4NgK9NVbz2XNukKbptjy2taiJGC2Un9b8IWqsCcTIUA=' # Use a chave correta, se necessário

output = extract_payload_image(image_path, key)
print("Payload extraído:", output)