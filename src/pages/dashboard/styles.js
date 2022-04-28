import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 

  .navbar {
    width: 100vw;
    min-height: 80px;
    text-align: center;
    display: flex;
    position: fixed;
    top: 0%;
  }
  img {
    width: 97.59px;
    height: 13.53px;
    margin: auto;
  }
  .Navbar-btn {
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

  header {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    max-height: 131px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border-top: solid 1px #212529;
    border-bottom: solid 1px #212529;
  }

  header h1 {
    color: #f8f9fa;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 10px auto;
    width: 80%;
    text-align: start;
  }
  header p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
    width: 80%;
    text-align: start;
    margin: 0 auto;
  }

  .tecnologys {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .tecnologys p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }

  .tecnologys-btn{
    background: #212529;
    border-radius: 4px;
    color: #fff;
    width: 32px;
    height: 32px;
  }

  .box ul {
    list-style: none;
    overflow:scroll;
   
  }

  .box li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.182px;
    background: #121214;
    border-radius: 4.06066px;
    margin: 16px auto;
    width:90%;

  }

  .Title-tech {
    color: #f8f9fa;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
  }
  .Level {
    text-align: right;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: #868e96;
  }
`;
