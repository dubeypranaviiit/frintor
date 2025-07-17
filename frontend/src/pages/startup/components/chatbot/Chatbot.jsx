import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const botMessageFirst = { role: 'bot', content: "Hi! I am your AI assistant. How can I help you today?" };
  const chatboxRef = useRef(null);

  useEffect(() => {
    setMessages([botMessageFirst]);
  }, []);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]); // Functional update to ensure correct state

    setLoading(true);
    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/conversationpalm2',
      headers: {
        'x-rapidapi-key': "ed0ea0bfbfmsh809abe007f9654cp1f9f64jsn3b7e1b7a5d86",
        'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        messages: [userMessage],
      },
    };

    try {
      const response = await axios.request(options);
      const botMessage = { role: 'bot', content: response.data.BOT };
      setMessages(prevMessages => [...prevMessages, botMessage]); // Functional update to ensure correct state

      setTimeout(() => {
        setLoading(false);
      }, 500);
      
    } catch (error) {
      console.error(error);
    } finally {
      setInput('');
    }
  };

  return (

    <div className='flex  flex-col text-center justify-center'>
     <h1 className='text-3xl font-bold '>
        Don't know what to do ? Ask our chatbot
      </h1>
    <div className='chatbot-container no-scrollbar gap-2 bg-slate-100 '>
       <div className='image-handler'>
      <img src = "./startupbeautiful.png" />
      </div>
      <div className="chatbot">
        <h2 className='font-semibold'>Clarify your doubts</h2>
        <div className="chatbox" ref={chatboxRef}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role === 'user' ? 'user' : 'bot'}`}>
              <p>{message.content}</p>
            </div>
          ))}
          {loading && (
            <div className="message bg-red-100 text-red-700">
              <p>Thinking...</p>
            </div>
          )}
        </div>
        <div className="input-box flex flex-wrap gap-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button className="ms-1" onClick={handleSendMessage}>Send</button>
        </div>
      </div>

     
    </div>
    </div>
  );
};

export default Chatbot;
