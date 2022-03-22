import "./card-registro.css"
import { useTranslation } from "react-i18next"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Nav from "react-bootstrap/Nav"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/esm/Button"
import IniciarSesion from "../../components/iniciar-sesion/iniciar-sesion";
import { Link } from "react-router-dom"
import { useContext } from "react"
import { themeContext } from "../../context/themeContext"


function CardRegistro() {
    const [t, i18n] = useTranslation("global")
    const { theme, updateTheme, changeTheme } = useContext(themeContext)

    return (
        <Card

            className=" bg-opacity-75  border-4 p-5 pt-4 pb-4 card_style"
            sm={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
        >
            
            <Row>
                <Col
                    sm={{ span: 12, offset: "auto" }}
                    md={{ span: 12, offset: "auto" }}
                    xl={{ span: 12, offset: "auto" }}>

                    <Card
                        className=" border-0 mb-1 ms-3 me-3 pt-5  text-center"
                        style={{backgroundColor:"rgba(0,0,0,0.0)"}}
>
                        <Card.Text>
                            <IniciarSesion />

                        </Card.Text>

                       
                    </Card>

                </Col>

            </Row>
       
        </Card >
    )

}

export default CardRegistro