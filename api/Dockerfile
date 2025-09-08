# Usa imagem leve do Python
FROM python:3.10-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos da API
COPY . /app/api
COPY requirements.txt .

# Instala dependências
RUN pip install --no-cache-dir -r requirements.txt

# Define variável de ambiente pra encontrar a API
ENV PYTHONPATH="/app"

# Expõe a porta da aplicação
EXPOSE 8000

# Comando para iniciar a API
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
