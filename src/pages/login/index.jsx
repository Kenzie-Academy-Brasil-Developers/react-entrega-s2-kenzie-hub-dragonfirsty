import { Container } from "./styles";
import Logo from "../../images/Logo.svg";
import { useHistory } from "react-router-dom";
import Input from "../../components/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import Api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Login = ({authenticated,setAuthenticated}) => {
  const history = useHistory();

  const signUp = () => {
    history.push("/Cadastro");
  };

  const signIn = () => {
    history.push("/Dashboard");
  };

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "senha incorreta"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };

    Api.post("/sessions", user)
      .then((info) => {
        toast.success("Sucesso ao logar");
        setAuthenticated(true)
        window.localStorage.setItem("authToken",JSON.stringify(info.data.token))
        window.localStorage.setItem("userId",JSON.stringify(info.data.user.id) )
        
       return signIn()
      })
      .catch((err) => toast.error("erro ao logar verifique seus dados"));
  };

  if(authenticated){

    return <Redirect to='/Dashboard'/>
  }

  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo do kenzie hub" />
      </header>
      <div className="box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="email"
            label="Email"
            placeholder="Digite aqui seu email"
            type="email"
            register={register}
            error={errors.email?.message}
          />

          <Input
            name="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <button type="submit" className="Form-button">
            Entrar
          </button>
        </form>
        <div className="Div-cadastro">
          <p>Ainda não possui uma conta?</p>
          <button className="cadastro-btn" onClick={signUp}>
            Cadastre-se
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
