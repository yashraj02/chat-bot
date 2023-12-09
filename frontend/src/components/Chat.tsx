"use client"
import React, {useState} from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat: React.FC = () =>{
    const [messages, setMessages] = useState<string[]>([])

    const addMessage = (message: string) => {

        // hit backend api here

        setMessages(prevMessages => [...messages, message]);
      };

    return (
        <div>
            {messages.map((message, index)=> {
              debugger
              return <ChatMessage key={index} message={message}/>
            })}
 
            <ChatInput addMessage={addMessage} />
        </div>
    )
}

export default Chat;