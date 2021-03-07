const messagesEl = document.getElementById('messages');
const errorsEl = document.getElementById('errors');

const socketScheme = document.getElementById('socket-scheme');
const socketHost = document.getElementById('socket-host');
const socketPort = document.getElementById('socket-port');

const connect = () => {
    const url = `${socketScheme.value}:${socketHost.value}:${socketPort.value}`;
    const ws = new WebSocket(url);

    ws.onmessage = (msg) => {
        console.log(msg);
        const messageEl = document.createElement('div');
        messageEl.innerHTML = msg.data;
        messages.append(messageEl);
    };

    ws.onerror = (err) => {
        console.error(err);
        const errorEl = document.createElement('div');
        errorEl.innerHTML = 'error: ' + JSON.stringify(err);
        errors.append(errorEl);
    };
};


