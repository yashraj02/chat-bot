import React, { useState } from 'react';
import CHAT_CONSTS from '../../constants/chatConsts.js';
import { AddMessageType, ChatInputProps } from '../../types/chatTypes.js';

const { EVENT_NAME, STYLES, PLACEHOLDER } = CHAT_CONSTS;
const { USER_INPUT } = EVENT_NAME;
const { INPUT_STYLES } = STYLES;

const ChatInput: React.FC<ChatInputProps> = ({ addMessage }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      id="form"
      onSubmit={(ev) => handleSubmit(ev, addMessage, inputValue, setInputValue)}
    >
      <div className="w-72">
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className={INPUT_STYLES}
            placeholder={PLACEHOLDER}
            id="input"
            autoComplete="off"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

const handleSubmit = (
  event: React.FormEvent,
  addMessage: AddMessageType,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  event.preventDefault();

  if (!inputValue.trim()) {
    return;
  }

  addMessage(USER_INPUT, inputValue);

  setInputValue('');
};

export default ChatInput;
