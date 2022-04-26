import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
}

:root {
    --background: #121214;
    --box: #212529;
    --white:#F8F9FA;
}

body{
    background-color: var(--background);
    color: var(--white);
}
body,input,button,label,h1,h2,h3,h4,h5,h6,p{

    font-family:"inter";
    font-size:1rem;
    
}
button{

    cursor:pointer;
}
.box{
    background-color: var(--box);
    display: flex;
    flex-direction:column;
    min-height:60vh;
    margin:0 auto;
    height:50vh;
    width: 80vw;
    max-width:300px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
}
label,form{

    display:flex;
    flex-direction:column;
    text-align:start;
}

a{
    text-decoration:none;
}

`;

export default GlobalStyle;
