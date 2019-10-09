import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

type Message = {
  text: String,
  id: number
}

const useSocket = (url: string) => {
  const [started, setStarted] = useState(false)
  const [lastMessage, setLastMessage] = useState<string>()

  useEffect(() => {
    console.log("Starting!")
    setStarted(true)

    const ws = new WebSocket(url)

    ws.onmessage = msg => { setLastMessage(msg.data) }

    return () => {
      console.log("Closing websocket!")
      ws.close()
    }
  }, [url])

  return { started, lastMessage }
}

const App: React.FC = () => {
  const { started, lastMessage } = useSocket("ws://localhost:4000/events/read")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <a href="#">
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
