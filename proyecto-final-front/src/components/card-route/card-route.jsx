import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import Form from "react-bootstrap/Form"
import "./card-route.css"

function CardRoute(props) {
    const { theme, updateTheme, changeTheme, logName, setLogName } = useContext(themeContext)

    return (


        <Card
            style={{ backgroundColor: "rgb(252, 250, 244, 0.6)", borderRadius: "10px", width: "97%" }}
            className="m-1 pt-1 pb-5">
            <Row>
                <Col
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    xl={1}

                >
                    <Card
                        style={{ color: "white", borderRadius: "50%", width: "30px", height: "30px" }}
                        bg={theme.warning}
                        className="ms-2 mt-2">
                        {props.number}
                    </Card>

                </Col>

                <Col>
                    <Card className="mt-2 border-0 bg-transparent">
                        {props.title}
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card  className="mt-2 border-0 bg-transparent">

                </Card>
                    <Form.Control
                       /*  style={{ outline: "none", }} */
                        className="mt-3 border-0 bg-transparent focus"
                        name="description"
                        type="textarea"
                        placeholder="Pues escribir aquí"
                    />

                </Col>
            </Row>
        </Card >
    )

}

export default CardRoute