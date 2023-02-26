import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(17, 27, 33, .95);
  border-radius: 15px;
  position: absolute;
  width: 50%;
  min-height: 50%;
  box-shadow: 0px 10px 30px black;

  .up-bar {
    display: flex;
    justify-content: flex-end;
  }

  #close-modal-btt {
    border-radius: 50%;
    border: none;
    margin:10px;
    padding: 5px;
    width: 30px;
    height: 30px;
    font-weight: bolder;
    font-size: 16px;
    background-color: #9F3FFF;
    color: white;

    :hover {
      cursor: pointer;
    }
  }

  .children-content {
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`