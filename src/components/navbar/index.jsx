import { Container } from "./styles";
import Logo from "../../images/Logo.svg";
import { useHistory } from "react-router-dom";

const NavBar = ({btn}) => {
  const history = useHistory();

  
  return (
      <Container>
    
      <img src={Logo} alt="logo do kenzie Hub" />
      <button className="Navbar-btn" onClick={btn}>
        Voltar
      </button>
    
    </Container>
  );
};

export default NavBar
