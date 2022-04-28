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
    width:80%;
    min-height: 40vh;
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    max-width:296px;
  }

  .content header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 20px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
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

  .content form button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    position: static;
    width: 259.9px;
    height: 38.5px;
    left: 17.65px;
    top: 210.17px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    box-sizing: border-box;
    border-radius: 4.06066px;
    flex-grow: 0;
    margin: 17.6477px 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10.1517px;
  }
`;
