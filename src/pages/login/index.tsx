import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createUser from '../../api/createUser';
import findUser from '../../api/findUser';
import Modal from '../../components/modal';
import Logo from '../../icons/logo';
import { User } from '../../shared/interfaces/iuser';
import { Container, InputButton, InputForm } from './style';

type UserInfo = {
  username: string,
  name?: string
}

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({username: '', name: ''} as UserInfo);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async() => {
    if(userInfo.username === '') {return};

    const user = await findUser(userInfo.username);
    if(user) {
      localStorage.setItem('userId', (user as User).id.toString());
      return navigate('/my-chats');
    }

    setShowModal(true);
  }

  const handleSignUp = async() => {
    if (!userInfo.name) {return};

    const newUser = await createUser(userInfo.username, userInfo.name);
    localStorage.setItem('userId', newUser.id.toString());
    console.log('asasasasas')
    return navigate('/my-chats');
  }

  return (
    <Container>
      <div className='content'>
        <div className='title-div'>
          <Logo color='#9F3FFF' width={100}/>
          <h1>Welcome to <b>Carrier Pigeon</b></h1>
        </div>

        <div className='login-form'>
          <h2>Login</h2>
          <InputForm 
            placeholder='username'
            value={userInfo.username}
            onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
          />
          <InputButton onClick={handleLogin}>Enter</InputButton>
        </div>
      </div>

      <Modal show={showModal} setShowModal={setShowModal}>
        <div className='modal-content'>
          <h3>Sign Up</h3>
          <InputForm 
            placeholder='name'
            value={userInfo.name}
            onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
          />
          <InputButton onClick={handleSignUp}>Sign Up</InputButton>
        </div>
      </Modal>
    </Container>
  )
}

export default Login;
