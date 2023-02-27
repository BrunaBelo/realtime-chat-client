import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  #chat-painel {
    display: flex;
    color: #9F3FFF;
    color: white;
    width: 80%;
    height: 80%;
    background-color: transparent;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, .4);
    border-radius: 10px;
    padding: 30px;
  }

  #chat-list {
    width: 25%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    border-right: 1px solid rgba(159, 63, 255, .2);
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }


    .chat {
      background-color: rgba(0, 0, 0, .1);
      margin-bottom: 10px;
      padding: 0 15px 0 15px;
      border-radius: 10px;
      transition: .2s;

      .chat-contact-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      p {
        opacity: .4;
      }

      :hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, .3);
      }
    }
  }
  
  #my-info {
    margin-bottom: 50px;
  }

  #chat-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 10px 0px 10px;

    
    #chat-content{
      overflow-x: hidden;

      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      .message {
        width: auto;
        padding: 10px;
        border-radius: 20px;
        width: 40%;
        margin-bottom: 10px;
      }

      .my-message {
        background-color: #6865DD;
        border-radius: 10px 10px 0px 10px;
        margin-left: calc(60% - 20px);
      }

      .received-message {
        background-color: darkcyan;
        border-radius: 10px 10px 10px 0px;
      }
    }

    #chat-input{
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      input {
        background-color: transparent;
        border: 2px solid #9F3FFF;
        border-radius: 5px;
        padding: 20px;
        width: 90%;
        font-size: 18px;
        color: white;

        :focus {
          outline: none;
        }
      }

      button {
        border-radius: 5px;
        border: 0;
        flex: .95;
        height: 100%;
        background-color: #9F3FFF;
        color: white;
        font-weight: bold;
        font-size: 14px;

        :hover {
          cursor: pointer;
        }

        /* :focus {
          outline: none;
          border-bottom: solid 3px #9F3FFF;
        } */
      }
    }
  }
`
