# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import embed, extract

app = FastAPI()

# Configuração do CORS - permitir o frontend que roda em localhost:8080 acessar a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # coloque aqui a URL do seu frontend
    allow_credentials=True,
    allow_methods=["*"],  # permite todos os métodos (GET, POST, etc)
    allow_headers=["*"],  # permite todos os headers
)

app.include_router(embed.router, prefix="/embed", tags=["embed"])
app.include_router(extract.router, prefix="/extract", tags=["extract"])
