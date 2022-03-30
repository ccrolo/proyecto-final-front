import  Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { themeContext } from "../../context/themeContext"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next";


function CardsTitle() {
    const { theme, updateTheme, changeTheme } = useContext(themeContext)
    const [input, setinput] = useState('')
    const [text, setText] = useState('')
    const [inputText, setinputText] = useState('')
    const [t, i18n] = useTranslation("global");

    const titleText = e => {
        e.preventDefault()
        setinput('disabled')
        setText(e.target.description.value)
        localStorage.setItem('title', e.target.description.value)

    }

    const getInputText = () => {
        const local = localStorage.getItem('text') 
        setinput('notDisabled')
        setinputText(local)
    }

    return (
       < Card bg="transparent" className="border-0 ">
        {input !== 'disabled' ? <Form onSubmit={titleText}>
    <Form.Control
        className="mt-3 border-0  focus"
        name="description"
        type="textarea"
        placeholder={t("title.placeholder")}
        defaultValue={text}

    /><Button type="submit">{t("title.title-button")}</Button>  </Form> : 
    <Card text="black" bg={'light'} style={{borderRadius:'20px'}} className="fs-4 border-5 border-warning justify-content-center ">{text}  <Card style={{ color: "white", borderRadius: "50%", width: "30px", height: "30px" }}
    bg={theme.warning}
    onClick={getInputText}
    className="ms-1 mb-1 pb-2 cursor ">✎
</Card></Card>}
</Card>
)
    
}

export default CardsTitle;