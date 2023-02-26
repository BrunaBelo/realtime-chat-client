import apiClient from ".";
import { User } from "../shared/interfaces/iuser";

const createUser = async (username: string, name: string): Promise<User> => {
  const response = await apiClient.post('users', {
    username, name
  });

  return response.data as User;
}

export default createUser;
