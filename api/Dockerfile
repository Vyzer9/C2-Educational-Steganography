FROM python:3.10-slim

# 1. Define a pasta de trabalho como /app/api
WORKDIR /app

# 2. Copia os arquivos
COPY requirements.txt .

# 3. Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copia todo o projeto
COPY . .

# 5. Define o PYTHONPATH como /app (pra achar a pasta api/)
ENV PYTHONPATH=/app

# 6. Expõe a porta
EXPOSE 8000

# 7. Executa a API
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
