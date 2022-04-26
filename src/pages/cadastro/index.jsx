import { Container } from "./styles";
import Logo from "../../images/Logo.svg";

const Cadastro = () => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="logo do kenzie Hub" />
        <button className="Header-btn">Voltar</button>
      </header>

      <div className="box">
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>

        <form>
          <label>
            Nome
            <input placeholder="Digite aqui seu nome" />
          </label>
          <label>
            Email
            <input placeholder="Digite aqui seu email" type="email" />
          </label>
          <label>
            Senha
            <input placeholder="Digite aqui sua senha" type="password" />
          </label>
          <label>
            Confirmar senha
            <input placeholder="Confirme sua senha" type="password" />
          </label>

          <label>
              Selecionar m&#x000F3;dulo
            <select name="modulo" id="modulo">
              <option value="1&#x000B0; m&#x000F3;dulo">
                primeiro m&#x000F3;dulo
              </option>
              <option value="2&#x000B0; m&#x000F3;dulo">
                segundo m&#x000F3;dulo
              </option>
              <option value="3&#x000B0; m&#x000F3;dulo">
                terceiro m&#x000F3;dulo
              </option>
              <option value="4&#x000B0; m&#x000F3;dulo">
                quarto m&#x000F3;dulo
              </option>
            </select>
          </label>

          <button type="submit" className="Form-btn">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Cadastro;
