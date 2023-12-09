import React, {useState} from "react";

interface ChatInputProps {
    addMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ addMessage }) => {
    const [inputValue, setInput] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        debugger
        event.preventDefault();
        addMessage(inputValue)
        setInput('') 
    }

    return (
        <div className="grid grid-col-3 gap-4">
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} className="" onChange={event => {
                    debugger
                    setInput(event.target.value)
                    }}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatInput;