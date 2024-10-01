import './App.css';
import React, { useState } from 'react';
import Screens from './combonents/Screens';

function App() {
  const [user1Messages, setUser1Messages] = useState([]);
  const [user2Messages, setUser2Messages] = useState([]);

  const getCurrentTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  };

  const User1SendMessage = (message) => {
    const time = getCurrentTime();
    const newMessage = { sender: 'User1', message, time };
    setUser1Messages([...user1Messages, newMessage]);
    setUser2Messages([...user2Messages, newMessage]);
  };

  const User2SendMessage = (message) => {
    const time = getCurrentTime();
    const newMessage = { sender: 'User2', message, time };
    setUser2Messages([...user2Messages, newMessage]);
    setUser1Messages([...user1Messages, newMessage]);
  };

  return (
    <div className="flex justify-around md:flex-row max-sm:justify-center flex-wrap bg-slate-500 pb-56">
      <Screens
        name="Waleed"
        messages={user1Messages}
        onSendMessage={User1SendMessage}
        user="User1"
        avatar="https://i.pinimg.com/564x/5c/9e/d8/5c9ed83bb1a0cd21fa422316319bbf95.jpg"  
      />
      <Screens
        name="Abdullah"
        messages={user2Messages}
        onSendMessage={User2SendMessage}
        user="User2"
        avatar="https://i.pinimg.com/564x/91/33/ca/9133cad615af0dd04b515c6e3b90d00a.jpg"  
      />
    </div>
  );
}

export default App;
