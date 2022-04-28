import React, { useEffect, useState } from "react";
import Input from "../input";
import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { toast } from "react-toastify";

const ModalModificar = ({ close,tecnology }) => {
  const [token, setToken] = useState("");
  console.log(tecnology)
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    
  });

  useEffect(() => {
    const tokenauth = localStorage.getItem("authToken");
    setToken(JSON.parse(tokenauth));
  },[]);

  const onSubmitFunction = ({  status }) => {
    const tecnology = {  status };

  //   const config = {

  //       headers : {Authorization: `Bearer${token}`}
  //   }

  //   Api
  //   .post("/users/techs",tecnology,config.headers)
  //   .then((_) => {

  //     toast.success('Sucesso ao criar tecnologia')
  //     close(false)
  //   })
  //   .catch((err) => toast.error("Nome invalido"))
  };
 
  return (
    <Container>
      <div className="content">
        <header>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => close(false)}>X</button>
        </header>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          
          <div>
            <h3>Nome do projeto</h3>
            <p>{tecnology.title}</p>
          </div>

      <div>
        <h3>status</h3>
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
      </div>
          <div className="btns">
          <button type="submit" className="change-status">Salvar alterações</button>
          <button type="submit" className="delete-tecnology">Excluir</button>
          </div>
        
        
        </form>
      </div>
    </Container>
  );
};

export default ModalModificar;
