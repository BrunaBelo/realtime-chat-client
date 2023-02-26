import { Chat } from "./ichat"
import { User } from "./iuser"

export type Message = {
  id: number,
  content: string,
  user: User,
  chat: Chat
}
