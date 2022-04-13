import React from "react"
import { useTranslation } from "react-i18next"
import Button from "react-bootstrap/esm/Button"
import { useContext } from "react"
import { themeContext } from "../../context/themeContext"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import Texture from "../../assets/textura.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import "./header.css"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import FormControl from "react-bootstrap/FormControl"


function Header() {
    const [t, i18n] = useTranslation("global")
    const { theme, updateTheme, changeTheme,logName, setLogName  } = useContext(themeContext)

    const userName = localStorage.getItem('name')
   
    




    return (
        <React.Fragment>
          
            <Navbar style={{ fontFamily: "Iron" }} sticky="top" bg={theme.dark} collapseOnSelect expand="lg" >
                <Container fluid className="container_header">
                    <Navbar.Brand as={Link} to="/">
                        <Image className="ms-5 logo" src={Logo} />
                        <Card className="text-center mt-4 ms-5 d-inline-flex border-0 bg-transparent" text={theme.info} >
                            <Card.Text className="title  display-4">Bitácora</Card.Text>
                        </Card>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className="ms-5" >
                            <Col className="ms-5" >
                            
                            <Button variant={theme.info} className="me-5  fs-3 pb-0 pt-0" onClick={changeTheme}>☾</Button>
                            
                            <Button variant={theme.info} className=" rounded-start" onClick={() => i18n.changeLanguage("es")}>ES</Button>
                            
                            <Button variant={theme.info} className=" rounded-end me-5" onClick={() => i18n.changeLanguage("en")}>EN</Button>
                            
                            {userName !== null? 
                            <Button as={Link} to="/personal"
                                className="signup justify-content-end rounded-pill p-3 px-4 me-5"
                                variant={theme.danger}
                                type="submit">{userName}</Button>:

                                <Button as={Link} to="/registro"
                                className="signup justify-content-end rounded-pill p-3 px-4 me-5"
                                variant={theme.danger}
                                type="submit">
                               
                                    {t("landing.sign-up")}
                                                           
                            </Button >}

                            </Col>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )

}

export default Header