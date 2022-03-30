import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import passport from "../../assets/passport.jpeg"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card"



function Footer() {
    const [t, i18n] = useTranslation("global")
    const { theme, updateTheme, changeTheme } = useContext(themeContext)

    return (
        <React.Fragment>
          
        <Navbar 
        style={{ fontFamily: "Iron",height:"100px", marginTop: "auto" }}        
        bg={theme.warning}        
        className="sticky-bottom"
        
        >
            <Container fluid className="mt-5 justify-content-center" >
                <Card className="mb-5 border-0" bg="transparent" text="white" as={Link} to={'/privacity'}>Privacity</Card>
                <Card className="mb-5 ms-5 border-0" bg="transparent" text="white" as={Link} to={'/cookies'}>Cookies</Card>
                <Card className="mb-5 ms-5 border-0" bg="transparent" text="white" as={Link} to={'/terminos'}>Terms&Conditions</Card>
                
            </Container>
        </Navbar>
    </React.Fragment>
    )
    
}

export default Footer;