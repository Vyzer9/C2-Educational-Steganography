from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import embed, extract  # <-- aqui o caminho correto

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(embed.router, prefix="/embed", tags=["embed"])
app.include_router(extract.router, prefix="/extract", tags=["extract"])

@app.get("/")
def read_root():
    return {"status": "API online"}
