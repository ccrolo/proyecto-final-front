import notfound from "../../assets/crash.png"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import React from "react"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Card from "react-bootstrap/Card"

function NotFound() {

    return (
        <React.Fragment>
            <Header/>
            <Container style={{heigth:"100vh"}} fluid>
                <Card bg="transparent" className="border-0 text-center mt-5 " style={{"min-heigth":"100vh", marginLeft:"200px", fontSize:"3rem"}} >
                    <Card.Text  style={{fontFamily:"Iron", }}> Crash!</Card.Text>
             <Image  style={{width:"50%", marginLeft:"200px"}}  src={notfound}></Image> 
            </Card>
            </Container>
           


        </React.Fragment>
    )


}

export default NotFound