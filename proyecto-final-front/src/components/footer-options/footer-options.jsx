import React from "react"
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import travel from "../../assets/travel-book.png";
import billete from "../../assets/billete.png";
import punto from "../../assets/point.png";
import maleta from "../../assets/maleta.png"

function FooterOptions() {

    const [t, i18n] = useTranslation("global")
    const { theme, updateTheme, changeTheme, footer } = useContext(themeContext)


    return (
        <React.Fragment>

            <Card
                className="mt-5"
                /*  bg={theme.primary} */
                style={{ backgroundColor: footer }}

                fluid>
                <Row>
                    <Col
                        sm={{ span: "auto", offset: 1 }}
                        md={{ span: "auto", offset: 1 }}
                        lg={{ span: "auto", offset: 1 }}
                        xl={{ span: "auto", offset: 1 }}>
                        <Card
                            text={theme.info}
                            className="border-0 bg-transparent">
                            <Card.Text className="txt_options mt-3 fs-1 op-0">
                            {t("footer-options.title")}
                            </Card.Text>
                        </Card>
                    </Col>

                </Row>
                <Row
                    className="justify-content-between mb-5"
                    style={{ width: "93%" }}
                >
                    <Col
                        className="txt_options fs-3 mt-3"
                        xs={{ span: 8, offset: 2 }}
                        sm={{ span: 4, offset: 1 }}
                        md={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 2, offset: 1 }}>
                        <Card text={theme.info} bg="transparent" className="border-0">
                            <Card.Text
                                className="ms-3 mb-3"
                                text={theme.info}>
                                {t("footer-options.option1")}
                            </Card.Text>
                        </Card>
                        <Card
                            className="mb-5 h-75  rounded-circle "
                            bg={theme.dark}>
                            <Image className="w-75 m-auto" src={punto} />
                        </Card>
                    </Col>
                    <Col
                        className="txt_options fs-3 mt-3"
                        sx={{ span: 8, offset: 2 }}
                        sm={{ span: 4, offset: 1 }}
                        md={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 2, offset: 1 }}>
                        <Card text={theme.info} bg="transparent" className="border-0">
                            <Card.Text
                                className=" mb-3"
                            >
                                 {t("footer-options.option2")}
                            </Card.Text>
                        </Card>
                        <Card
                            className="mb-5 h-75  rounded-circle "
                            bg={theme.dark}>
                            <Image className="w-75 m-auto" src={billete} />
                        </Card>
                    </Col>
                    <Col
                        className="txt_options fs-3 mt-3"
                        sx={{ span: 8, offset: 2 }}
                        sm={{ span: 4, offset: 1 }}
                        md={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 2, offset: 1 }}>
                        <Card text={theme.info} bg="transparent" className="border-0">
                            <Card.Text
                                className="m-auto mb-3"
                                text={theme.info}>
                                {t("footer-options.option3")}
                            </Card.Text>
                        </Card>
                        <Card
                            className="mb-5 h-75  rounded-circle "
                            bg={theme.dark}>
                            <Image className="w-75 m-auto" src={travel} />
                        </Card>
                    </Col>
                    <Col
                        className="txt_options fs-3 mt-3"
                        sx={{ span: 8, offset: 2 }}
                        sm={{ span: 4, offset: 1 }}
                        md={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 2, offset: 1 }}>
                        <Card text={theme.info} bg="transparent" className="border-0">
                            <Card.Text
                                className="m-auto mb-3"
                                text={theme.info}>
                                 {t("footer-options.option4")}
                            </Card.Text>
                        </Card>
                        <Card
                            className="mb-5 h-75  rounded-circle "
                            bg={theme.dark}>
                            <Image className="w-75 m-auto" src={maleta} />
                        </Card>
                    </Col>
                </Row>
            </Card>

        </React.Fragment >
    )

}

export default FooterOptions;