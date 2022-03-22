import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import React from "react";
import { useContext, useState, useRef } from "react";
import { themeContext } from "../../context/themeContext";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "react-bootstrap/Container";
import "./registro.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Overlay from "react-bootstrap/Overlay"
import { useNavigate } from "react-router-dom";





function Registro() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const { theme, updateTheme, changeTheme } = useContext(themeContext);
    const [t, i18n] = useTranslation("global");
    const [users, usersUpdate] = useState([]);

    let navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        const userData = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }


        usersUpdate(userData)

        fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        })

            .then(d => d.json())
            .then((data) => {
                usersUpdate(...users, userData)
                console.log(data)
            })

            

    }

    const handleClick = () => {
       
            setTimeout(() => { navigate('/') }, 3000); 
            
        
    
    }

    return (
        <React.Fragment>
            <Header />
            <Container
                fluid
                className="registro-bg m-0 pt-5"
                style={{ height: "100vh" }}>
                <Row>
                    <Col
                        style={{}}
                        className="mt-5"
                        sm={{ span: 10, offset: 1 }}
                        md={{ span: 8, offset: 2 }}
                        lg={{ span: 6, offset: 3 }}
                        xl={{ span: 6, offset: 3 }} >
                        <Card
                            style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "20px" }}
                            text="white"
                        >
                            <Form
                                style={{ height: "100%" }}
                                onSubmit={handleSubmit}
                                className="m-5 p-3"

                            >
                                <Form.Label className="mt-3" >{t("iniciar-sesion.name")}</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder={t("iniciar-sesion.enterName")}
                                    required

                                />

                                <Form.Label className="mt-4" >{t("iniciar-sesion.lastname")}</Form.Label>
                                <Form.Control
                                    name="lastname"
                                    type="text"
                                    placeholder={t("iniciar-sesion.enterLastname")}
                                    required

                                />
                                <Form.Label className="mt-4" >{t("iniciar-sesion.user")}</Form.Label>
                                <Form.Control
                                    name="username"
                                    type="text"
                                    placeholder={t("iniciar-sesion.enterUser")}
                                    required

                                />

                                <Form.Label className="mt-4"> {t("iniciar-sesion.email")}</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder={t("iniciar-sesion.enterMail")}
                                    required
                                />

                                <Form.Label className="mt-4">{t("iniciar-sesion.password")}</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder={t("iniciar-sesion.enterPasword")}
                                    required
                                />

                                <Button
                                    className="mt-5 fs-4 justify-content-center"
                                    ref={target}
                                    onClick={handleClick}
                                    type="submit">
                                    {t("iniciar-sesion.submit")}
                                </Button>
                               {/*  <Overlay target={target.current} show={show} placement="right">
                                    {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                        <div
                                            {...props}
                                            style={{
                                                backgroundColor: '#303d33',
                                                border: 'white 1px solid',
                                                fontSize: '1.3rem',
                                                margin: '0px 20px',
                                                padding: '20px 10px',
                                                color: 'white',
                                                borderRadius: 3,
                                                ...props.style,
                                            }}
                                        >
                                            
                                          {Object.keys(users).length ===  5 ? "Perfecto! Revisa tu correo" : "Rellena los campos requeridos"} 
                                        </div>
                                    )}
                                </Overlay> */}
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )

}

export default Registro