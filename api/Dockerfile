FROM python:3.10-slim

# Define o diretório de trabalho dentro do container como /app
WORKDIR /app

# Copia os arquivos de requirements.txt da pasta api para /app
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o conteúdo da pasta api (contexto da build) para /app
COPY . .

# Define variável de ambiente para encontrar a API
ENV PYTHONPATH="/app"

# Expõe a porta da aplicação
EXPOSE 8000

# Comando para iniciar a API
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
