import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #9F3FFF;

  h1 {
    font-weight: normal;
  }

  .title-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    width: auto;

    h2 {
      font-weight: normal;
    }
  }
`

export const InputForm = styled.input`
  background-color: transparent;
  margin: 0;
  border: 0;
  border-bottom: solid 2px rgba(159, 63, 255, .5);
  margin-bottom: 5px;
  padding: 10px 20px 10px 0px;
  font-size: 18px;
  color: white;
  transition: .3s;

  :focus {
    outline: none;
    border-bottom: solid 3px #9F3FFF;
  }
`

export const InputButton = styled.button`
  outline: none;
  border: none;
  margin-top: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #9F3FFF;
  color: white;
  font-weight: bold;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`