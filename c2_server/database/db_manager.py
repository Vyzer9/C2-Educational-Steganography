import sqlite3
import os
import datetime 

DATABASE_DIR = 'database'
DATABASE_FILE = os.path.join(DATABASE_DIR, 'c2_data.lib')

def get_db_connection():
    """
    Função para obter uma conexão com o banco de dados.
    Cria o diretório 'database' se não existir.
    """
    os.makedirs(DATABASE_DIR, exist_ok=True)
    conn = sqlite3.connect(DATABASE_FILE)
    conn.row_factory = sqlite3.Row 
    return conn

def init_db():
    """
    Inicializa o banco de dados, criando a tabela 'agents' se ela não existir.
    Deve ser chamada uma vez no início da aplicação do servidor C2.
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS agents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uuid TEXT UNIQUE NOT NULL,
        ip_address TEXT,
        hostname TEXT,
        os_info TEXT,
        last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'Online'
        -- Adicione colunas para comandos e resultados se preferir uma abordagem simples com JSON aqui
        -- Por exemplo:
        -- commands_queue TEXT,   -- Armazena JSON de comandos pendentes
        -- results_queue TEXT     -- Armazena JSON de resultados aguardando coleta
    );
    ''')
    conn.commit()
    conn.close()
    print(f"Banco de dados inicializado ou já existente em: {DATABASE_FILE}")

def add_or_update_agent(uuid, ip_address, hostname, os_info):
    """
    Adiciona um novo agente ao banco de dados ou atualiza as informações
    de um agente existente (baseado no UUID).
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Verifica se o agente já existe pelo UUID
    cursor.execute("SELECT * FROM agents WHERE uuid = ?", (uuid,))
    existing_agent = cursor.fetchone()

    if existing_agent:
        cursor.execute('''
            UPDATE agents
            SET ip_address = ?, hostname = ?, os_info = ?, last_seen = ?, status = 'Online'
            WHERE uuid = ?
        ''', (ip_address, hostname, os_info, datetime.datetime.now(), uuid))
        print(f"Agente {uuid} atualizado.")
    else:
        cursor.execute('''
            INSERT INTO agents (uuid, ip_address, hostname, os_info, last_seen)
            VALUES (?, ?, ?, ?, ?)
        ''', (uuid, ip_address, hostname, os_info, datetime.datetime.now()))
        print(f"Novo agente {uuid} adicionado.")
    
    conn.commit()
    conn.close()

def get_all_agents():
    """
    Retorna todos os agentes registrados no banco de dados.
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM agents")
    agents = cursor.fetchall()
    conn.close()
    return [dict(agent) for agent in agents] 

def get_agent_by_uuid(uuid):
    """
    Busca e retorna as informações de um agente específico pelo seu UUID.
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM agents WHERE uuid = ?", (uuid,))
    agent = cursor.fetchone()
    conn.close()
    return dict(agent) if agent else None 

def update_agent_status(uuid, new_status):
    """
    Atualiza o status de um agente e sua data/hora da última comunicação.
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE agents SET status = ?, last_seen = ? WHERE uuid = ?", (new_status, datetime.datetime.now(), uuid))
    conn.commit()
    conn.close()
    print(f"Status do agente {uuid} atualizado para {new_status}.")

def delete_agent(uuid):
    """
    Remove um agente do banco de dados pelo seu UUID.
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM agents WHERE uuid = ?", (uuid,))
    conn.commit()
    conn.close()
    print(f"Agente {uuid} deletado.")

# Este bloco só será executado se você rodar db_manager.py diretamente
# É útil para testar as funções do banco de dados independentemente do servidor principal
if __name__ == '__main__':
    init_db()
    print("\n--- Testando Funções do DB ---")
    add_or_update_agent("test-agent-001", "127.0.0.1", "MeuPC", "Linux Mint")
    add_or_update_agent("test-agent-002", "127.0.0.2", "OutroPC", "Windows 10")
    add_or_update_agent("test-agent-001", "127.0.0.10", "MeuPC-Atualizado", "Linux Mint 21") # Atualizando

    print("\nTodos os agentes:")
    for agent in get_all_agents():
        print(agent)

    print("\nAgente específico:")
    print(get_agent_by_uuid("test-agent-002"))

    update_agent_status("test-agent-001", "Offline")

    print("\nAgentes após atualização de status:")
    for agent in get_all_agents():
        print(agent)

    delete_agent("test-agent-002")
    print("\nAgentes após exclusão:")
    for agent in get_all_agents():
        print(agent)
