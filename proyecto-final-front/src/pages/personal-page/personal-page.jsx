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
import { useTranslation } from "react-i18next";

function PersonalPage() {
    const [user, updateUser] = useState([])
    const { theme, mapDetails, setMapDetails } = useContext(themeContext)
    const [t, i18n] = useTranslation("global");

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
            <Container fluid style={{ width: "100%", backgroundColor: "transparent" }} className="personal_bg">
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12} className=" d-inline-flex  justify-content-center m-5">
                        <Col
                       
                         xs={8}
                         sm={8}
                         md={6}
                         lg={6}
                         xl={6}>
                            <Button className="buttons" onClick={handleDelete}>{t("personal-page.unsuscribe")}</Button>                      
                            <Button className="buttons" onClick={handlerEndSesion}>{t("personal-page.log-out")}</Button>                    
                            <Button className="buttons" as={Link} to="/data">{t("personal-page.personal-data")}</Button>
                        </Col>
                        <Col  
                        xs={6}
                         sm={6}
                         md={6}
                         lg={6}
                         xl={6}>
                        
                            <Card onClick={handlerToTravel}

                                text='white'
                                bg={theme.warning}
                                className="card_add fs-1 border-5 border-warning"
                            >
                                +

                            </Card>
                        </Col>

                    </Col>


                </Row>
                <Row>
                    <Col>
                        <CardsPersonalPage />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>

    )

}

export default PersonalPage;