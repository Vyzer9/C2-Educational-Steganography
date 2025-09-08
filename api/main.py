from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import embed, extract


app = FastAPI()

# CORS: permite que o frontend no Vercel acesse a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://c2-steganography-phi.vercel.app"],  # ← frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
app.include_router(embed.router, prefix="/embed", tags=["embed"])
app.include_router(extract.router, prefix="/extract", tags=["extract"])

# Health check
@app.get("/")
def read_root():
    return {"status": "API online"}
