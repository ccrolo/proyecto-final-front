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
import CardsPersonalPage from "../../components/cards-personal-page/cards-personal-page";

function PersonalPage() {
    const [user, updateUser] = useState([])
    const { theme, mapDetails, setMapDetails } = useContext(themeContext)

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
   

    useEffect(() => {
        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(r => r.json())
            .then(info => {
                updateUser(info)
                localStorage.setItem('ID', info._id)
                
            })

    }, [])

    const handleDelete = () => {
        fetch('http://localhost:4000/users', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                
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
            <Container  fluid style={{ width: "100%", backgroundColor:"transparent" }} className="personal_bg">
                <Row>
                    <Col className=" d-inline-flex gap-5 justify-content-center mt-2">
                       
                        <Button className="buttons"  onClick={handleDelete}>Darte de baja</Button>
                        <Button className="buttons" onClick={handlerEndSesion}>Cerrar Sesión</Button>
                        <Button className="buttons" as={Link} to="/data">Tus datos personales</Button>
                        <Card onClick={handlerToTravel}
                            style={{ width: "100px", height:"100px" }}
                            text={theme.info}
                            bg={theme.warning}
                            className="card_add rounded-circle"
                            >
                
                            <Image
                                className="w-50 m-auto"
                                src={add}
                                
                                />
                        </Card>
                       
                    </Col>
                    

                </Row>
                <Row>
                    <Col>
                    <CardsPersonalPage/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>

    )

}

export default PersonalPage;