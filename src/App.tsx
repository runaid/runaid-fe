import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

type Message = {
  text: String,
  id: number
}

const App: React.FC = () => {

  const [started, setStarted] = useState(false)

  const [lastMessage, setLastMessage] = useState<String>()

  const hitSocket = () => {
    console.log("Starting!")
    setStarted(true)

    const ws = new WebSocket("ws://localhost:4000/events/read")

    ws.onmessage = msg => { setLastMessage(msg.data) }

    return () => {
      console.log("Closing websocket!")
      ws.close()
    }
  }

  useEffect(hitSocket, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"></img>
        <a>
          Learn React. Started: {started.toString()}
        </a>
        <ul>
          {lastMessage}
        </ul>
      </header>
    </div>
  );
}

export default App;
