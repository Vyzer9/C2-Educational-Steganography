# embed_service.py
async def embed_payload_to_image(file, message: str) -> str:
    import base64
    from pathlib import Path
    import tempfile
    from shared.protocol_secure import secure_encode
    from stegano.lsb import hide
    from config import key
    from PIL import Image

    # Cria diretório temporário
    temp_dir = tempfile.mkdtemp()
    input_path = Path(temp_dir) / "uploaded_image.png"
    output_path = Path(temp_dir) / "output_image.png"

    # Salva o arquivo temporariamente
    with open(input_path, "wb") as f:
        content = await file.read()
        f.write(content)

    # Garante que a imagem está em RGB
    img = Image.open(input_path)
    if img.mode != "RGB":
        img = img.convert("RGB")
        img.save(input_path)

    # Codifica e esconde a mensagem
    payload_encoded = secure_encode("msg", message, key)
    secret_img = hide(str(input_path), payload_encoded)

    # Salva a imagem modificada
    secret_img.save(output_path)

    return str(output_path)  # ← retorna o caminho como string  
