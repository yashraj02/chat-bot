'use client';
import React, { useState } from 'react';
import ChatInput from './chatInput.jsx';
import ChatMessage from './chatMessage.jsx';
import SocketManager from '../../sockets/socketManager.js';
import { AddMessageType } from '../../types/chatTypes.js';

const socket = new SocketManager();

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  socket.on('USER_INPUT', (ev) => handleUserInput(ev, messages, setMessages));

  return component(messages, setMessages);
};

const component = (
  messages: string[],
  setMessages: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  return (
    <div>
      {messages.map((message, index) => {
        debugger;
        return <ChatMessage key={index} message={message} />;
      })}

      <ChatInput
        addMessage={(eventName, message) =>
          addMessage(eventName, message, messages, setMessages)
        }
      />
    </div>
  );
};

//TODO: create an interface for addMessage parameters & update in every place where addMessage is called
const addMessage: AddMessageType = (
  eventName,
  message,
  messages,
  setMessages,
) => {
  socket.emit(eventName, message);

  setMessages([...messages, message]);
};

const handleUserInput = (
  ev: any,
  messages: string[],
  setMessages: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  setMessages([...messages, ev]);
};

export default Chat;
