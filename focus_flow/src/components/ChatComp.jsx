import { useEffect, useRef, useState } from 'react';

const ChatComp = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm your productivity assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  const sendMessage = async () => {
    if (loading || !input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="w-full md:w-[92%] lg:w-[82%] xl:w-[72%] mx-auto p-3 sm:p-4 bg-white shadow rounded-md min-h-[60vh] md:min-h-[70vh] flex flex-col">
      <div className="sticky top-0 bg-white pt-1 pb-2 z-10 border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold">🧠 Productivity Assistant</h2>
      </div>
      <div className="flex-1 overflow-y-auto mb-3 sm:mb-4 space-y-2 pr-1">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded text-sm sm:text-base ${msg.role === 'user' ? 'bg-purple-100 text-right' : 'bg-gray-100 text-left'}`}>
            <p className="whitespace-pre-wrap break-words">{msg.content}</p>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form className="flex gap-2 pt-1" onSubmit={(e) => { e.preventDefault(); sendMessage(); }} aria-label="Send a message">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          rows={1}
          className="flex-1 px-3 sm:px-4 py-2 border rounded-md text-sm sm:text-base resize-none"
          aria-label="Message input"
        />
        <button
          type="submit"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className={`bg-purple-500 hover:bg-purple-600 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base ${loading || !input.trim() ? 'opacity-60 cursor-not-allowed' : ''}`}
          aria-label="Send message"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ChatComp;
