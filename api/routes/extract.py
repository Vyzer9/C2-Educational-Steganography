# api/routes/extract.py
from fastapi import APIRouter, UploadFile
from ..services.extract_service import extract_message_from_image



router = APIRouter()

@router.post("/")
async def extract_route(file: UploadFile):
    message = await extract_message_from_image(file)
    return {"message": message}
