import { useState } from 'react';

const ChatComp = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm your productivity assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'deepseek-chat',  // DeepSeek R1 model
          messages: newMessages
        })
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message;

      if (reply) {
        setMessages([...newMessages, reply]);
      } else {
        throw new Error('No reply received');
      }
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'assistant', content: "Sorry, something went wrong!" }]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-md h-[80vh] flex flex-col">
      <h2 className="text-xl font-bold mb-4">🧠 Productivity Assistant</h2>
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-purple-100 text-right' : 'bg-gray-100 text-left'}`}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComp;
