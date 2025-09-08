FROM python:3.10-slim

# Define o diretório de trabalho dentro do container como /app/api
WORKDIR /app/api

# Copia o requirements.txt para o diretório pai (porque o WORKDIR mudou)
COPY requirements.txt ../

# Instala as dependências
RUN pip install --no-cache-dir -r ../requirements.txt

# Copia todos os arquivos para dentro do container (incluindo a pasta api)
COPY . .

# Exponha a porta usada pelo Uvicorn
EXPOSE 8000

# Comando para rodar a API, apontando para main.py dentro de api
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
