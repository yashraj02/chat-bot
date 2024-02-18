/* =============chat============ */

export type AddMessageType = (
  eventName: string,
  message: string,
  messages: string[],
  setMessages: React.Dispatch<React.SetStateAction<string[]>>,
) => void;

/* =============chatInput============ */

export type AddMessage = (eventName: string, message: string) => void;

export interface ChatInputProps {
  addMessage: AddMessage;
}

/* =============chatMessage============ */

export interface ChatMessageProps {
  message: string;
}
