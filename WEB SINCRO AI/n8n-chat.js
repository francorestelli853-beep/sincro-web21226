/**
 * Sincro AI - Custom n8n Chat Widget Logic
 */

(function () {
    const WEBHOOK_URL = 'https://n8n.srv1306548.hstgr.cloud/webhook/91797077-3a19-426e-a804-a8d28d26a2c2';

    const widget = document.getElementById('n8n-chat-widget');
    if (!widget) return;

    // Inject HTML Structure
    widget.innerHTML = `
        <button class="chat-bubble-trigger" id="chat-trigger">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
        </button>
        <div class="chat-window" id="chat-window">
            <div class="chat-header">
                <div class="bot-avatar">S</div>
                <div class="chat-header-info">
                    <h4>Sincro AI Assistant</h4>
                    <p>En línea</p>
                </div>
            </div>
            <div class="chat-messages" id="chat-messages">
                <div class="message bot">¡Hola! Soy el asistente inteligente de Sincro AI. ¿En qué puedo ayudarte hoy?</div>
            </div>
            <div class="chat-input-area">
                <form class="chat-input-wrapper" id="chat-form" autocomplete="off">
                    <input type="text" id="chat-input" placeholder="Escribe un mensaje..." required>
                    <button type="submit" id="chat-send">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    `;

    const trigger = document.getElementById('chat-trigger');
    const windowEl = document.getElementById('chat-window');
    const messagesEl = document.getElementById('chat-messages');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');

    // Toggle Chat
    trigger.addEventListener('click', () => {
        windowEl.classList.toggle('active');
        trigger.classList.toggle('active');
        if (windowEl.classList.contains('active')) {
            input.focus();
        }
    });

    // Add Message to UI
    function addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `message ${sender}`;

        if (sender === 'bot') {
            // Use marked for bot responses to support Markdown/HTML
            msg.innerHTML = typeof marked !== 'undefined' ? marked.parse(text) : text;
        } else {
            // Use textContent for user messages for security (XSS prevention)
            msg.textContent = text;
        }

        messagesEl.appendChild(msg);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // Typing Indicator
    function showTyping() {
        const div = document.createElement('div');
        div.className = 'typing';
        div.id = 'typing-indicator';
        div.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
        messagesEl.appendChild(div);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        return div;
    }

    // Handle Form Submit
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        // User Message
        addMessage(text, 'user');
        input.value = '';

        // Show Typing
        const typingIndicator = showTyping();

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, source: 'web_chat' })
            });

            const data = await response.json();

            // Remove Typing
            typingIndicator.remove();

            // Handle Response from n8n (Assuming it returns { output: "text" } or similar)
            // Adjust this based on your n8n Respond to Webhook structure
            const botResponse = data.output || data.message || data.response || "No recibí una respuesta clara de la IA, pero estoy procesando tu solicitud.";
            addMessage(botResponse, 'bot');

        } catch (error) {
            console.error('Chat Error:', error);
            typingIndicator.remove();
            addMessage('Lo siento, hubo un error al conectar con mi cerebro artificial. Inténtalo de nuevo más tarde.', 'bot');
        }
    });
})();
