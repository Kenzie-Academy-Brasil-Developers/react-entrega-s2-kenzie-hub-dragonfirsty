import { Container } from "./styles";
import Logo from "../../images/Logo.svg";

const Login = () => {
  
  return(
  <Container>
    <header>
      <img src={Logo} alt="Logo do kenzie hub"></img>
    </header>
    <div className="box">
      <h1>Login</h1>
      <form>
        <label>
          Email
          <input
           placeholder="Digite seu email"
           type="email"
           ></input>
        </label>
        <label>
          Senha
          <input 
          placeholder="Digite sua senha" 
          type="password">

          </input>
        </label>
        <button type="submit" className="Form-button">Entrar</button>
      </form>
      <div className="Div-cadastro">
        <p>Ainda não possui uma conta?</p>
        <button className="cadastro-btn">Cadastre-se</button>
      </div>
    </div>
  </Container>
  )
};

export default Login;
