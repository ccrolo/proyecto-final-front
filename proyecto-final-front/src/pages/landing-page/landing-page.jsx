import { useTranslation } from "react-i18next"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import "./landing-page.css"
import Header from "../../components/header/header";
import { Link } from "react-router-dom"
import { useContext } from "react"
import { themeContext } from "../../context/themeContext"
import Button from "react-bootstrap/esm/Button"
import Image from "react-bootstrap/Image"
import Nav from "react-bootstrap/Nav"
import CardRegistro from "../../components/card-registro/card-registro"
import LandingCarousel from "../../components/landing-carousel/landing-carousel"
import Sello from "../../assets/sello.png"
import FooterOptions from "../../components/footer-options/footer-options"
import Footer from "../../components/footer/footer"


function LandingPage() {

    const [t, i18n] = useTranslation("global")
    const { theme, updateTheme, changeTheme } = useContext(themeContext)


    return (
        <Container className="p-0  container_bg" fluid style={{ width: "100%"}}>
            <Header />
            <Row >
            
                <Col 
                    sm={{ span: 10, offset: 1 }}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 4, offset: 1 }}
                    xl={{ span: 4, offset: 1 }}>

                    <CardRegistro />
                </Col>
                <Col 
                    sm={{ span: 10, offset: 1 }}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 4, offset: 2 }}
                    xl={{ span: 4, offset: 2 }}>

                    <LandingCarousel />
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
               
                   <FooterOptions/>
                </Col>
            </Row>
            <Footer />

        </Container >
    )


}

export default LandingPage;