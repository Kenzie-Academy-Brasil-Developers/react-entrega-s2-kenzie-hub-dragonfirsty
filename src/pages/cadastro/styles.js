import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  .box {
    height: 85vh;
  }

  header {
    width: 100vw;
    min-height: 80px;
    text-align: center;
    display: flex;
  }
  img {
    width: 97.59px;
    height: 13.53px;
    margin: auto;
  }
  .Header-btn {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    background-color: #212529;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
    text-align: center;
    color: #f8f9fa;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    width: 50%;
    margin: 20px auto 10px auto;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868e96;
    min-height: 40px;
  }
  form {
    width: 100%;
    min-height: 350px;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    line-height: 0px;
    color: #f8f9fa;
    width: 90%;
    margin: 0 auto;
    height:70px;
  }
  input {
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
    margin: 10px 0;
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
    margin: 10px 0;
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
    width:90%;
    height: 38px;
    margin: auto;
  }
`;
