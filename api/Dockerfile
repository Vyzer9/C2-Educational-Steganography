FROM python:3.10-slim

# Define o diretório de trabalho como /app
WORKDIR /app

# Copia os arquivos necessários
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia tudo pro container
COPY . .

# Torna possível importar `api.*`
ENV PYTHONPATH=/app

# Exponha a porta usada pelo Uvicorn
EXPOSE 8000

# Roda a API via uvicorn apontando pro arquivo certo
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
