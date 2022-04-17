import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function IniciarSesion() {

  const { theme, updateTheme, changeTheme, logName, setLogName } = useContext(themeContext)
  const [t, i18n] = useTranslation("global")

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    
    fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(d => d.json())
      .then((data) => {
        fetch('http://localhost:4000/users', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${data.access_token}` }
        })
          .then(r => r.json())
          .then(info => {
            setLogName(info)
            console.log(info)
            localStorage.setItem('token',data.access_token)
            localStorage.setItem('name',info.name)
            localStorage.setItem('email',info.email)
            navigate('/personal');
          })
        console.log(data.access_token)
      })

     
  }


  return (
    <Form
      onSubmit={handleSubmit}
      style={{ fontFamily: "Iron" }}
      className=" fs-3" >

      <Form.Label style={{ color: "#edebe3" }}> {t("iniciar-sesion.email")}</Form.Label>
      <Form.Control className="p-3" name="email " type="email" id="email" placeholder={t("iniciar-sesion.enterMail")} />

      <Form.Label style={{ color: "#edebe3" }} className="mt-5">{t("iniciar-sesion.password")}</Form.Label>
      <Form.Control className="p-3" name="password" type="password" id="password" placeholder={t("iniciar-sesion.enterPassword")} />

      <Button 
        style={{ marginTop: "250px", fontSize: "1.3rem" }}
        className=" p-3 mb-5   bottom-0"
        variant={theme.light}
        type="submit">

        {t("landing.sign-in")}
      </Button>
    </Form>
  )

}

export default IniciarSesion;