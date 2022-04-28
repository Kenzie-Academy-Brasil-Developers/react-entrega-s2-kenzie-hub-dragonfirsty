import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }

  .box {
    height: 85vh;
  }


  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    width: 50%;
    margin: 10px auto;
  }

  form {
    margin-top: 20px;
    width: 100%;
    min-height: 350px;
    overflow: scroll;
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

  .Form-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    background: #59323f;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
    color: #ffffff;
    border: 1.2182px solid #59323f;
    box-sizing: border-box;
    border-radius: 4px;
    width: 90%;
    min-height: 38px;
    margin: 10px auto;
  }
`;
