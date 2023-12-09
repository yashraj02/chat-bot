import React from 'react';

interface ChatMessageProps {
    message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({message}) => {
    return <p>{message}</p>;
}

export default ChatMessage;