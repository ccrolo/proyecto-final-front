import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import passport from "../../assets/passport.jpeg"



function Footer() {
    const [t, i18n] = useTranslation("global")
    const { theme, updateTheme, changeTheme } = useContext(themeContext)

    return (
        <React.Fragment>
          
        <Navbar 
        style={{ fontFamily: "Iron",height:"100px" }}        
        bg={theme.warning}        
        className="sticky-bottom"
        
        >
            <Container fluid className="mt-5" >
                
            </Container>
        </Navbar>
    </React.Fragment>
    )
    
}

export default Footer;