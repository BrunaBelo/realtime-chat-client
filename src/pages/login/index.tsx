import React, { useState } from 'react';
import Logo from '../../icons/logo';
import { Container, InputButton, InputForm } from './style';

type UserInfo = {
  username: string,
  name?: string
}

function Login() {
  const [userInfo, setUserInfo] = useState({username: '', name: ''} as UserInfo);

  return (
    <Container>
      <div className='content'>
        <div className='title-div'>
          <Logo color='#9F3FFF' width={100}/>
          <h1>Welcome to <b>Carrier Pigeon</b></h1>
        </div>

        <form className='login-form' onSubmit={() => {}}>
          <h2>Login</h2>
          <InputForm 
            placeholder='username'
            value={userInfo.username}
            onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
          />
          <InputButton>Enter</InputButton>
        </form>
      </div>
    </Container>
  )
}

export default Login;
