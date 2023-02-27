import apiClient from ".";
import { Message } from "../shared/interfaces/imessage";

const getMessagesFromChat = async (chatId: number): Promise<Message[]> => {
  const response = await apiClient.get(`chats/${chatId}/messages/`);

  return response.data as Message[];
}

export default getMessagesFromChat;
