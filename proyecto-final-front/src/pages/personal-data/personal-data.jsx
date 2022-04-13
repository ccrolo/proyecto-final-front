import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import React from "react";
import { useContext, useState, useRef } from "react";
import { themeContext } from "../../context/themeContext";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "react-bootstrap/Container";
import "./personal-data.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Overlay from "react-bootstrap/Overlay"
import { useNavigate } from "react-router-dom";





function PersonalData() {

    const [show, setShow] = useState(false);
    const target = useRef(null);
    const { theme, updateTheme, changeTheme } = useContext(themeContext);
    const [t, i18n] = useTranslation("global");
    const [users, usersUpdate] = useState([]);

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('ID')
    let navigate = useNavigate();

    const handlePatchUser = e => {
        e.preventDefault()

        const userData = {

            username: e.target.username.value,

        }

        console.log(userData)

        fetch(`http://localhost:4000/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` }
            
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
            })



    }



    return (
        <React.Fragment>
            <Header />
            <Container
                fluid
                className="data-bg m-0 pt-5"
                style={{ height: "100vh" }}>
                <Row>
                    <Col
                        style={{}}
                        className="mt-5 "
                        sm={{ span: 10, offset: 1 }}
                        md={{ span: 8, offset: 2 }}
                        lg={{ span: 6, offset: 3 }}
                        xl={{ span: 6, offset: 3 }} >
                        <Card
                            style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "20px" }}
                            text="white"
                        >

                            <Form.Label className="mt-3 mx-5" >{t("iniciar-sesion.name")}</Form.Label>
                            <Form.Control
                                style={{width:'85%'}}
                                className="mx-5"
                                name="name"
                                type="text"
                                placeholder={t("iniciar-sesion.enterName")}
                                defaultValue={localStorage.getItem('name')}
                                disabled

                            />

                            <Form.Label className="mt-4 mx-5" >{t("iniciar-sesion.lastname")}</Form.Label>
                            <Form.Control
                                style={{width:'85%'}}
                                className="mx-5"
                                name="lastname"
                                type="text"
                                disabled
                               

                            />
                            <Form onSubmit={handlePatchUser}>
                                <Form.Label className="mt-4 mx-5" >{t("iniciar-sesion.user")}</Form.Label>
                                <Form.Control
                                    style={{width:'85%'}}
                                    className="mx-5"
                                    name="username"
                                    type="text"
                                    placeholder={t("iniciar-sesion.enterUser")}


                                />
                                <Button className="mt-2 mx-5" type="submit">Editar</Button>
                            </Form>


                            <Form.Label className="mt-4 mx-5"> {t("iniciar-sesion.email")}</Form.Label>
                            <Form.Control
                                style={{width:'85%'}}
                                className="mx-5"
                                name="email"
                                type="email"
                                disabled

                            />



                            <Form.Label className="mt-4 mx-5">{t("iniciar-sesion.password")}</Form.Label>
                            <Form.Control
                                style={{width:'85%'}}
                                className="mx-5 mb-5"
                                name="password"
                                type="password"
                                disabled
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )

}

export default PersonalData