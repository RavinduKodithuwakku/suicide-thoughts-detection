import React from "react";
import Chatbot from "react-chatbot-kit";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import Home from "./pages/Home";
import About from "./pages/About";
import Bot from "./pages/Bot";
import "./App.css";

 
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Bot" element={<Bot />} />
          </Routes>
        </main>
      </BrowserRouter>

      {/* <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div> */}
    </div>
  );
}

export default App;
