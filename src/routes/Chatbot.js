import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";
import "./Chatbot.css";

function Chatbot() {
  const [history, setHistory] = useState([]);
  
  const genAI = new GoogleGenerativeAI('AIzaSyAWLcUpBA7z8bFlOoouh1XS2NHNc2mk0Ao');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const getResponse = async (prompt) => {
    const chat = await model.startChat({ history: history });
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = event.target.elements.prompt.value.trim();
    if (!userMessage) return;

    setHistory([...history, { role: "user", parts: userMessage }]);
    event.target.reset();

    const aiResponse = await getResponse(userMessage);
    setHistory([...history, { role: "model", parts: aiResponse }]);
  }

  return (
    <div className="App2">
      <header className="App-header">
      <FontAwesomeIcon icon={faDroplet} style={{ color: "white", fontSize: "2em" , marginLeft:"1em"}} />
        <h1 className="text-gemDeep text-lg font-medium">BloodLink Chatbot</h1>
      </header>
      <div className="chat-container">
        {history.map((entry, index) => (
          <div key={index} className={entry.role === "user" ? "flex items-center gap-2 justify-start" : "flex gap-2 justify-end"}>
            <div className={entry.role === "user" ? "bg-gemDeep text-white p-1 rounded-md shadow-md" : "bg-gemRegular/40 text-gemDeep p-1 rounded-md shadow-md whitespace-pre-wrap"}>
              {entry.parts}
            </div>
            <img src={entry.role === "user" ? "user.jpg" : "https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw"} alt={entry.role === "user" ? "user icon" : "chatbot icon"} className=" user-img" />
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <textarea name="prompt" cols="30" rows="4" placeholder="Enter message here..."></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
