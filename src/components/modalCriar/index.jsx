import React, { useEffect, useState } from "react";
import Input from "../input";
import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { toast } from "react-toastify";

const ModalCriar = ({ close }) => {
  const [token, setToken] = useState("");

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Apenas letras e espaços"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    const tokenauth = localStorage.getItem("authToken");
    setToken(JSON.parse(tokenauth));
  },[]);

  const onSubmitFunction = ({ title, status }) => {
    const tecnology = { title, status };

    const config = {

        headers : {Authorization: `Bearer${token}`}
    }

    Api
    .post("/users/techs",tecnology,config.headers)
    .then((_) => {

      toast.success('Sucesso ao criar tecnologia')
      close(false)
    })
    .catch((err) => toast.error("Nome invalido"))
  };
 
  return (
    <Container>
      <div className="content">
        <header>
          <h3>Cadastrar Tecnologia </h3>
          <button onClick={() => close(false)}>X</button>
        </header>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="title"
            label="Nome do projeto"
            placeholder="Digite aqui o nome da tecnologia"
            register={register}
            error={errors.name?.message}
          />
          <select
            name="status"
            id="status"
            {...register("status")}
            label="selecionar status"
          >
            <option value="iniciante">iniciante</option>
            <option value="intermediario">intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </Container>
  );
};

export default ModalCriar;
