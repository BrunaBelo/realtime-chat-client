import React from 'react';
import Logo from '../../icons/logo';
import { Container } from './style';

function Login() {
  return (
    <Container className="Login">
      <h1>Welcome to carrier pigeon</h1>
      <Logo color='#9F3FFF' width={100}/>
    </Container>
  )
}

export default Login;
