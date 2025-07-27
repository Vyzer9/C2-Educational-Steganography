function sendCommand(agentId) {
    const command = prompt("Digite o comando para o agente:");
    if (command) {
        fetch('/send_command', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ agent_id: agentId, command: command })
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => alert('Erro: ' + error));
    }
}

function deleteAgent(agentId) {
    if (confirm("Tem certeza que deseja deletar o agente?")) {
        fetch('/delete_agent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ agent_id: agentId })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            location.reload();
        })
        .catch(error => alert('Erro: ' + error));
    }
}