import React, { useEffect, useState } from "react";
import Input from "../input";
import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { toast } from "react-toastify";

const ModalModificar = ({ close,tech}) => {
  const [token, setToken] = useState("");
  
    

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

  Api
  .put(`/users/techs/${tech.id}`,tecnology,{headers : {Authorization: `Bearer ${token}`}})
  .then((_) => {

    close(false)
  })
  .catch((err) => toast.error("status invalido"))
  };
  const deletetech = () => {

    Api
  .delete(`/users/techs/${tech.id}`,{headers : {Authorization: `Bearer ${token}`}})
  .then((_) => {

    close(false)
  })
  .catch((err) => toast.error("Erro, a tecnologia ja foi excluida"))
  
  }
 
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
            <p>{tech.title}</p>
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
          <h4 onClick={()=> deletetech()} className="delete-tecnology">Excluir</h4>
          </div>
        
        
        </form>
      </div>
    </Container>
  );
};

export default ModalModificar;
