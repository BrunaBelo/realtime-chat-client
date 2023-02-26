import React, { useEffect, useState } from 'react';
import getChatsFromUser from '../../api/getChatsFromUser';
import { Chat } from '../../shared/interfaces/ichat';
import { Container } from './style';

function ChatPainel() {
  const [chats, setChats] = useState([] as Chat[]);
  const [user, setUser] = useState('');

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

  return (
    <Container>
      <div id='chat-painel'>
        <div id='chat-list'>
          <div id='my-info'>{user}</div>
          {
            chats.map((chat) => {
              return(
                <div className='chat'>
                  <div className="chat-contact-info">
                    <h3>Fulano</h3>
                    <span>online</span>
                  </div>
                  <p>{chat?.messages[0]?.content || '...'}</p>
                </div>
              )
            })
          }
        </div>

        <div id='chat-container'>
          <div id='chat-content'>
            <div className='message my-message'>
              <p>oi</p>
              <p>12:00</p>
            </div>
            <div className='message received-message'>
              <p>belezinha?</p>
              <p>12:00</p>
            </div>
          </div>

          <div id='chat-input'>
            <input placeholder='Type your message'/>
            <button>Send</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ChatPainel;
