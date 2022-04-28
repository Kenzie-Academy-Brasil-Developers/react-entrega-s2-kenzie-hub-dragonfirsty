import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;

  .content {
    border-radius: 10px;
    width: 80%;
    min-height: 40vh;
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    max-width: 296px;
  }

  .content header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 20px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    margin: 0px;
  }

  .content header h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
  }

  .content header button {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
    width: 20%;
    height: 70%;
    border: none;
    background-color: #343b41;
  }
  
  form div h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    width: 90%;
    margin: 0 auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    color: #f8f9fa;
    width: 90%;
  }

  form div p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12.9865px;
    background: #343b41;
    border: 0.973988px solid #343b41;
    box-sizing: border-box;
    border-radius: 3.19812px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    color: #868e96;
    height: 38.5px;
    margin: 10px auto;
    width: 90%;
  }

  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12.9865px;
    background: #343b41;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    color: #868e96;
    border: 0.973988px solid #343b41;
    box-sizing: border-box;
    border-radius: 3.19812px;
    height: 38.5px;
    margin: 10px auto;
    width: 90%;
    min-height: 38px;
  }

  .btns {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .change-status {
    background: #59323f;
    border: 1.2182px solid #59323f;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10.1517px;
    width: 45%;
  }

  .delete-tecnology {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    background: #868e96;
    border: 1.2182px solid #868e96;
    box-sizing: border-box;
    border-radius: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 22px;
    font-family: "Inter";
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10.1517px;
    width: 45%;
  }
`;
