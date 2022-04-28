import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar";
import { useEffect, useState } from "react";
import ModalCriar from "../../components/modalCriar";
import { Redirect } from "react-router-dom";
import ModalModificar from "../../components/modalModificar";

const Dashboard = ({ authenticated }) => {
  const history = useHistory();

  const signout = () => {
    window.localStorage.clear();

    history.push("/");
  };
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("ronaldo");
  const [module, setModule] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [modalChange,setModalChange] = useState(false)
  const [modalChangeLi,setModalChangeLi] = useState({})

  useEffect(() => {
    const pikachu = localStorage.getItem("user");
    const raichu = JSON.parse(pikachu);
    setUser(raichu);
    setUsername(raichu.name);
    setModule(raichu.course_module);
}, []);

//   if (authenticated === false) {
    //     return <Redirect to="/" />;
    //   }

    const snorlax = (evt,tecnology) =>{
        
        setModalChange(true) 
        setModalChangeLi(tecnology)

    }
    
    
  return (
    <Container>
      <NavBar btn={signout} />

      <header>
        <h1>Ola,{username}</h1>
        <p>{module}</p>
      </header>

      <main>
        <div className="tecnologys">
          <p>Tecnologias</p>
          <button
            className="tecnologys-btn"
            onClick={() => setDisplayModal(true)}
          >
            +
          </button>
        </div>
          {displayModal ? <ModalCriar close={setDisplayModal} /> : null}
          {modalChange ? <ModalModificar close={setModalChange} tecnology={modalChangeLi}/> : null}
        <div className="box">
          <ul>
            
           {username !== "ronaldo" ? user.techs.map((tecnology) => (
        <li key={tecnology.id} onClick={() =>{snorlax("evt",tecnology)} }>
            <p className="Title-tech">{tecnology.title}</p>
            <p className="Level">{tecnology.status}</p>
        </li>
      )) : null } 
          </ul>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
