import apiClient from ".";
import { User } from "../shared/interfaces/iuser";

const findUser = async (username: string): Promise<boolean | User> => {
  const response = await apiClient.get(`users/${username}`);
  if(response.data == null) {
    return false;
  }

  return response.data as User;
}

export default findUser;
