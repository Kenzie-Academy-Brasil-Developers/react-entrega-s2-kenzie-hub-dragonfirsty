import styled from "styled-components"


export const Container = styled.div`

display: flex;
justify-content:center;
text-align:center;
height:100vh;
flex-direction: column;

.box{

    min-height:362px;
    max-height:362px;
}


header{

    width:100vw;
    min-height: 50px;
    text-align: center;
    
}
img{
    width: 144.06px;
    height: 19.97px;
}
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    width:50%;
    margin:20px auto ;
    
}
form{

    width:100%;
    max-height:250px;
   
}

label{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    width:90%;
    height: 85px;
    margin: 0 auto;
}
input{

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    border: 1.2182px solid #F8F9FA;
    box-sizing: border-box;
    border-radius: 4px;
    background-color:#343B41;
    height:38.5px;
    margin-top:10px 
    

}
.Form-button{

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    background-color: #FF577F;
    border: 1.2182px solid #FF577F;
    box-sizing: border-box;
    border-radius: 4.06066px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    width:75%;
    margin: 10px auto;    
}
.Div-cadastro{

    margin-top:10px;
}

p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868E96;
}
.cadastro-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    background-color: #868E96;
    border: 1.2182px solid #868E96;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin: 0 auto;
    color:#F8F9FA;
    width:75%;
}

`