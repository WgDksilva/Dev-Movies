
import { Link } from 'react-router-dom';
import Linkedin from '../../assets/link.jpeg';
import Github from '../../assets/git.jpg';

import { Container, Nav } from './styles';

export default function Footer() {
  return (
    <>
      <Container>
        <p>Desenvolvido por &copy; Vagner Silva</p>
        <Nav>
          <Link to="https://www.linkedin.com/in/wgdksilva/"><img src={Linkedin} /></Link>
        </Nav>
        <Nav>
          <Link to="https://github.com/WgDksilva"><img src={Github} /></Link>
        </Nav>
      </Container>
    </>
  );
};
