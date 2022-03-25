import React, { useEffect } from "react";
import Button from "react-bootstrap/Button"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card"
import { useState } from "react";
import "./personal-page.css"
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import add from "../../assets/add.png"
import { Link } from "react-router-dom";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";

function PersonalPage() {
    const [user, updateUser] = useState([])
    const { theme, updateTheme, changeTheme } = useContext(themeContext)

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    console.log(user)

    useEffect(() => {
        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(r => r.json())
            .then(info => {
                updateUser(info)
                localStorage.setItem('ID', info._id)
                console.log(info)
            })

    }, [])

    const handleDelete = () => {
        fetch('http://localhost:4000/users', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
            })

        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/')
    }

    const handlerEndSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/')
    }

    const handlerToTravel = () => {
        navigate('/trip')
    }

    return (
        <React.Fragment>
            <Header />
            <Container fluid style={{ width: "100%" }} className="personal_bg">
                <Row>
                    <Col>
                        <Button onClick={handleDelete}>Darte de baja</Button>
                        <Button onClick={handlerEndSesion}>Cerrar Sesión</Button>
                        <Button as={Link} to="/data">Tus datos personales</Button>
                    </Col>
                    <Col
                        xs={{ span: 2, offset: 8 }}
                        sm={{ span: 2, offset: 8 }}
                        md={{ span: 3, offset: 6 }}
                        lg={{ span: 2, offset: 8 }}
                        xl={{ span: 2, offset: 8 }}>

                        <Card onClick={handlerToTravel}
                            style={{ width: "100px", height:"100px" }}
                            text={theme.info}
                            bg={theme.warning}
                            className="card_add rounded-circle mt-5 p-1"
                            >
                
                            <Image
                                className="w-50 m-auto"
                                src={add}
                                
                                />
                        </Card>

                    </Col>

                </Row>
            </Container>
            <Footer />
        </React.Fragment>

    )

}

export default PersonalPage;