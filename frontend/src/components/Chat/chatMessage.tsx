import React from 'react';
import { ChatMessageProps } from '../../types/chatTypes.js';

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return component(message);
};

const component = (message: string) => {
  return <p>{message}</p>;
};

export default ChatMessage;
