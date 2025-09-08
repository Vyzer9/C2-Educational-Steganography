# api/routes/embed.py
from fastapi import APIRouter, UploadFile, Form
from fastapi.responses import FileResponse
from ..services.embed_service import embed_payload_to_image


router = APIRouter()

@router.post("/")
async def embed_message(file: UploadFile, message: str = Form(...)):
    output_path = await embed_payload_to_image(file, message)

    return FileResponse(
        output_path,
        media_type="image/png",
        filename="stego_image.png",  # ← nome sugerido para download
        headers={"Content-Disposition": "attachment; filename=stego_image.png"}
    )
