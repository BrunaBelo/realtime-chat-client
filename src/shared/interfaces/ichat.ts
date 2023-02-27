import { Message } from "./imessage"
import { User } from "./iuser"

export type Chat = {
  id: number,
  messages: Message[],
  users: User[],
  lastMessage: Message
}
