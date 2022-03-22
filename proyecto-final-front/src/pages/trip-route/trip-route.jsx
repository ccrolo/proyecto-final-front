import React, { useEffect } from "react";
import Button from "react-bootstrap/Button"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card"
import { useState } from "react";
import "./trip-route.css"
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import add from "../../assets/add.png"
import Form from "react-bootstrap/Form"
import { useTranslation } from "react-i18next";
import { ReactFileInputCustom } from 'react-file-input-custom';

import { themeContext } from "../../context/themeContext";
import { useContext } from "react";

function TripRoute() {
    const [user, updateUser] = useState([])
    const { theme, updateTheme, changeTheme } = useContext(themeContext)
    const [t, i18n] = useTranslation("global");

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    console.log(token)


    return (
        <React.Fragment>
            <Header />
            <Container fluid style={{ width: "100%" }} className="trip_bg">
                <Row>
                    <Col 
                     sm={{ span: 10, offset: 1 }}
                     md={{ span: 8, offset: 2 }}
                     lg={{ span: 4, offset: 1 }}
                     xl={{ span: 4, offset: 'auto'}}>
                         
                        <Card
                            className="mt-5 border-0 mb-1 ms-3 me-3 pt-5  text-center"
                            style={{ backgroundColor: "rgba(0,0,0,0.4)",width:"100%",height:"100vh" }}>

                            <Card.Text>
                          {/*       <Form>
                                    <Form.Label className="mt-4"><Image src={add}/></Form.Label>
                                    <Form.Control 
                                        className="input"
                                        name="file"
                                        type="file"
                                       
                                    />
                                   

                                </Form> */}
                                <ReactFileInputCustom />
                            </Card.Text>
                            
                        </Card>
                    </Col>
                    <Col 
                     sm={{ span: 10, offset: 1 }}
                     md={{ span: 8, offset: 2 }}
                     lg={{ span: 4, offset: 1 }}
                     xl={{ span: 5, offset: 'auto' }}>
                         
                        <Card
                            className=" mt-5 border-0 mb-1 ms-3 me-3 pt-5  text-center"
                            style={{ backgroundColor: "rgba(0,0,0,0.4)",width:"100%",height:"100vh" }}>

                            <Card.Text>
                        
                            </Card.Text>
                            
                        </Card>
                    </Col>


                </Row>
            </Container>
            <Footer />
        </React.Fragment>

    )

}

export default TripRoute;