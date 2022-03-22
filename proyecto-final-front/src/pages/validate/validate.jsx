import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Header from "../../components/header/header";
import "./validate.css"
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";



function Validate() {
    const [queryParams] = useSearchParams();
    const params = queryParams.get('token')
    const { theme, updateTheme, changeTheme, footer } = useContext(themeContext);
    const [t, i18n] = useTranslation("global");


    useEffect(() => {
        fetch(`http://localhost:4000/auth/validate?token=${params}`)
            .then(d => d.json())
            .then(data => console.log(data))

    }, []);


    return (
        
        <React.Fragment>
            <Header />
            <Container fluid style={{ width: "100%" }} className="validate_bg">

                <Row>
                    <Col
                    sm={{ span: 10, offset: 1 }}
                    md={{ span: 10, offset: 1 }}
                    xl={{ span: 4, offset: 4 }}>
                        <Card
                            style={{backgroundColor:footer}}
                            className="p-5 fs-3 bg-opacity-75  border-4 p-5 pt-4 pb-4 validate_card"
                            sm={{ span: 10, offset: 1 }}
                            md={{ span: 10, offset: 1 }}
                            xl={{ span: 4, offset: 1 }}
                        >
                            <Card.Text>
                            
                                Dale a volver para iniciar sesión
                            </Card.Text>


                            <Button as={Link} to="/" >Volver</Button>


                        </Card >
                    </Col>
                </Row>


            </Container>
            <Footer />

        </React.Fragment>
    )
}

export default Validate;