# extract_service.py
from payload_encoder.decoder import extract_payload_image
from pathlib import Path
import tempfile
from config import key  # Importa da mesma fonte

async def extract_message_from_image(file) -> str:
    temp_dir = tempfile.mkdtemp()
    input_path = Path(temp_dir) / "uploaded_image.png"

    # Salva a imagem temporariamente
    with open(input_path, "wb") as f:
        content = await file.read()
        f.write(content)

    output = extract_payload_image(str(input_path), key)
    return output
