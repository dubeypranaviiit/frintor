import React, { useEffect, useState, useRef } from 'react';
import './chat.css';
import api from '../api';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatboxRef = useRef(null);

  useEffect(() => {
    // setMessages();
  }, []);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await api.post('/api/chat', {
        message: input,
        history: updatedMessages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      });

      const botMessage = { role: 'model', content: response.data.response };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = { role: 'model', content: 'Error: Could not fetch response.' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className='flex flex-col text-center justify-center'>
      <h1 className='text-3xl font-bold'>
        Don't know what to do? Ask our chatbot
      </h1>
      <div className='chatbot-container no-scrollbar gap-2 bg-slate-100 p-4 rounded-lg'>
        <div className='image-handler mb-4'>
          <img src="./startupbeautiful.png" alt="Startup" />
        </div>
        <div className="chatbot">
          <h2 className='font-semibold mb-2'>Clarify your doubts</h2>
          <div className="chatbox overflow-y-auto h-64 border p-2 mb-2 rounded" ref={chatboxRef}>
            {(messages.length !=0) && messages.map((message, index) => (
              <div key={index} className={`message ${message.role === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-200 text-left'} p-2 my-1 rounded`}>
                <p>{message.content}</p>
              </div>
            ))}
            {loading && (
              <div className="message bg-red-100 text-red-700 p-2 my-1 rounded">
                <p>Thinking...</p>
              </div>
            )}
          </div>
          <div className="input-box flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 p-2 border rounded-l"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
