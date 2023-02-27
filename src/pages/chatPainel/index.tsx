import React, { useEffect, useState } from 'react';
import createMessage from '../../api/createMessage';
import getChatsFromUser from '../../api/getChatsFromUser';
import getMessagesFromChat from '../../api/getMessagesFromChat';
import { Chat } from '../../shared/interfaces/ichat';
import { Message } from '../../shared/interfaces/imessage';
import { Container } from './style';

function ChatPainel() {
  const [chats, setChats] = useState([] as Chat[]);
  const [messages, setMessages] = useState([] as Message[]);
  const [user, setUser] = useState('');
  const [currentChatId, setCurrentChatId] = useState(null as number | null);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    handleUserInfo()
    handleUserChats()
  }, [])

  const handleUserChats = async() => {
    const userId = localStorage.getItem('userId');
    const chats = await getChatsFromUser(userId as string);
    setChats(chats);
  }

  const handleUserInfo = () => {
    const userName = localStorage.getItem('userName');
    setUser(userName as string);
  }

  const handleGetMessagesFromChat = async(chatId: number) => {
    setCurrentChatId(chatId);
    const messages = await getMessagesFromChat(chatId);
    setMessages(messages);
  }

  const handleNewMessage = async(chatId: number, userId: number, content: string) => {
    await createMessage(chatId, userId, content);
  }

  return (
    <Container>
      <div id='chat-painel'>
        <div id='chat-list'>
          <div id='my-info'>{user}</div>
          {
            chats.map((chat) => (
              <div className='chat' onClick={() => handleGetMessagesFromChat(chat.id)}>
                <div className="chat-contact-info">
                  <h3>{chat.users.find((user) => user.id !== Number(localStorage.getItem('userId')))?.name}</h3>
                  <span>Online</span>
                </div>
                <p>{chat?.messages[0]?.content || '...'}</p>
              </div>
            ))
          }
        </div>

        <div id='chat-container'>
          <div id='chat-content'>
            {
              messages.map((message) => {
                return(
                  <div>
                    {
                      message.user.id === Number(localStorage.getItem('userId')) ?
                      <div className='message my-message'>
                        <p>{message.content}</p>
                        <p>{`${new Date(message.createdAt).getHours()}:${new Date(message.createdAt).getMinutes()}`}</p>
                      </div>
                      :
                      <div className='message received-message'>
                        <p>{message.content}</p>
                        <p>{`${new Date(message.createdAt).getHours()}:${new Date(message.createdAt).getMinutes()}`}</p>
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>

          <div id='chat-input'>
            <input
              placeholder='Type your message'
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={() => handleNewMessage(currentChatId as number, Number(localStorage.getItem('userId')), newMessage)}>Send</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ChatPainel;
