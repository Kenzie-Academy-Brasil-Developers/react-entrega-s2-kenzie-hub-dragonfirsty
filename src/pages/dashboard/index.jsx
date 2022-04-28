import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar";
import { useEffect, useState } from "react";
import ModalCriar from "../../components/modalCriar";
import { Redirect } from "react-router-dom";
import ModalModificar from "../../components/modalModificar";
import Api from "../../services/api";

const Dashboard = ({ authenticated, userId, token, setAuthenticated}) => {
  const history = useHistory();


  
  const signout = () => {
    window.localStorage.clear();
    setAuthenticated(false)
   return history.push("/");
  };

  

  const [tech, setTech] = useState([]);
  const [username, setUsername] = useState("");
  const [module, setModule] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [modalChange, setModalChange] = useState(false);
  const [modalChangeLi, setModalChangeLi] = useState({});

  
  const loadTech = () => {
    Api.get(`/users/${userId}`)
      .then((info) => {
        setTech(info.data.techs);
        setUsername(info.data.name);
        setModule(info.data.course_module);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (authenticated === false) {
      return <Redirect to="/" />;
    }else{
    loadTech();
    }
  }, [displayModal]);

  useEffect(() => {
    if (authenticated === false) {
      return <Redirect to="/" />;
    }else{
    loadTech();
    }
  }, [modalChange]);

  if (authenticated === false) {
    return <Redirect to="/" />;
  }


  const dataLi = (evt, tecnology) => {
    setModalChange(true);
    setModalChangeLi(tecnology);
  };

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
        {modalChange ? (
          <ModalModificar close={setModalChange} tech={modalChangeLi}/>
        ) : null}
        <div className="box">
          <ul>
            {username !== "" &&
              tech.map((tecnology) => (
                <li
                  key={tecnology.id}
                  onClick={() => {
                    dataLi("evt", tecnology);
                  }}
                >
                  <p className="Title-tech">{tecnology.title}</p>
                  <p className="Level">{tecnology.status}</p>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
