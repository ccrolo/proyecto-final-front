import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import Form from "react-bootstrap/Form"
import "./card-route.css"
import { useState } from "react";
import Button from "react-bootstrap/Button"

function CardRoute(props) {
    const { theme, updateTheme, changeTheme, logName, setLogName,cardsText, setCardsText } = useContext(themeContext)
    const [input, setinput] = useState('')
    const [text, setText] = useState('')
    const [inputText, setinputText] = useState('') 

    const handleOnSubmit = e => {
        e.preventDefault()
        setinput('disabled')
        setText(e.target.description.value)
        localStorage.setItem('text', e.target.description.value)
        setCardsText(e.target.description.value)


    }

    const getInputText = () => {
        const local = localStorage.getItem('text') 
        setinput('notDisabled')
        setinputText(local)


    }

     console.log(cardsText)



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
                        className="ms-4 mt-2">
                        {props.number}
                    </Card>

                </Col>

                <Col
                    xs={7}
                    sm={7}
                    md={7}
                    lg={7}
                    xl={7}>
                    <Card className="ms-5 mt-2 border-0 bg-transparent">
                        {props.title}
                    </Card>
                </Col>
                <Col
                     className="d-inline-flex"
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}>
                    <Card style={{ color: "white", borderRadius: "50%", width: "30px", height: "30px" }}
                        bg={theme.warning}
                        onClick={getInputText}
                        className="me-1 mt-2 cursor">✎

                    </Card>
                    <Card style={{ color: "white", borderRadius: "50%", width: "30px", height: "30px" }}
                            bg={theme.warning}
                            onClick={props.delete}
                            className=" mt-2 cursor">✘

                        </Card>
                        <Card style={{ color: "white", borderRadius: "50%", width: "30px", height: "30px" }}
                            bg={theme.warning}
                            className="ms-1 mt-2 cursor">📄

                        </Card>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mt-2 border-0 bg-transparent">

                    </Card>
                    {input !== 'disabled' ?
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Control
                                className="mt-3 border-0 bg-transparent focus"
                                name="description"
                                type="textarea"
                                placeholder="Puedes escribir aquí"
                                defaultValue={inputText} 

                            /><Button type="submit">Guardar</Button>  </Form>
                        : <Card className="border-0 bg-transparent">{text}</Card>

                    }

                </Col>
            </Row>
        </Card >
    )

}

export default CardRoute