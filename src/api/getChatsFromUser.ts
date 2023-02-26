import apiClient from ".";
import { Chat } from "../shared/interfaces/ichat";

const getChatsFromUser = async (userId: string): Promise<Chat[]> => {
  const response = await apiClient.get(`chats/${userId}`);

  return response.data as Chat[];
}

export default getChatsFromUser;
