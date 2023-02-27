import apiClient from ".";
import { Message } from "../shared/interfaces/imessage";

const createMessage = async (chatId: number, userId: number, content: string): Promise<Message> => {
  const response = await apiClient.post(`chats/${chatId}/messages/new`, {
    userId, content
  });

  return response.data as Message;
}

export default createMessage;
