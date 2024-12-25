

import { Container, Nav } from './styles';

export default function Footer() {
  return (
    <>
      <Container>
        <Nav>
          <p>Desenvolvido por &copy; Vagner Silva</p>

          <p>
            <a
              href="https://www.linkedin.com/in/wgdksilva/"
              target="_blank"
              rel="noreferrer">
            </a>
            <a
              href="https://github.com/WgDksilva"
              target="_blank"
              rel="noreferrer">
            </a>
          </p>
        </Nav>
      </Container>
    </>
  );
}