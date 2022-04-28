import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import Input from "../../components/input";
import NavBar from "../../components/navbar";
import Api from "../../services/api";
import {toast} from "react-toastify"
import { Redirect } from "react-router-dom";

const Cadastro = ({authenticated}) => {
  const history = useHistory();

  const login = () =>{

    history.push("/")
  }
  const bio =  "Lorem ipsum dolor emet"
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,"Apenas letras e espaços"),
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "E necessario  ter pelo menos 8 caracteres,1 letra maiuscula e uma minuscula,um ccaractere especial e um numero"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatoria")
      .oneOf([yup.ref("password"), null], "As senhas devem ser identicas"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({name, email, password,course_module }) => {
    const contact = `linkedin/${name.replace(/ /gi,"_")}`
    const user = { name,email,password,course_module,bio,contact}
    
    Api
    .post("/users",user)
    .then((_) => {
      toast.success('Sucesso ao criar a conta')
      login()
    })
    .catch((err) => toast.error("erro ao criar conta verifique seus dados"))
    
  };

  if(authenticated){

    return <Redirect to='/Dashboard'/>
  }

  return (
    <Container>
      
      <NavBar btn={login}/>


      <main>
        {" "}
        <div className="box">
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
              register={register}
              error={errors.name?.message}
            />

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

            <Input
              name="confirmPassword"
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              type="password"
              register={register}
              error={errors.confirmPassword?.message}
            />

            <select
              name="course_module"
              id="course_module"
              {...register("course_module")}
              label="Selecionar m&#x000F3;dulo"
            >
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

            <button type="submit" className="Form-btn">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default Cadastro;
