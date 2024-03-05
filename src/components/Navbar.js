import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';

function NavbarComponent() {
  const navbarStyle = {
    backgroundColor: "#d5d9f2",
    position: '',
    height: '110px',
    width: '100%',
    zIndex: '1',
  };

  const lineStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '20px',
    backgroundColor: "#acd0ff",
  };

  const whiteTextStyle = {
    color: '#fefae0',
    marginTop: '25px', // Add margin to push the text down
    fontSize: '20px',
  };

  const lineAboveNavLinksStyle = {
    position: 'absolute',
    top: '100px', // Position the line below the Navbar
    left: 0,
    right: 0,
    backgroundColor: "#1d1bb3cc",
  };

  return (
    <div style={navbarStyle}>
      <div style={lineStyle}></div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="font" style={{ ...whiteTextStyle, fontSize: '40px' }}><img src={require('../images/logo.png')} alt="Logo" className="img-fluid float-start" style={{ marginTop: '20px', width: '300px', height: 'auto'  }} /></Navbar.Brand>
        </Container>
      </Navbar>
      <div style={lineAboveNavLinksStyle}></div>
    </div>
  );
}

export default NavbarComponent;
