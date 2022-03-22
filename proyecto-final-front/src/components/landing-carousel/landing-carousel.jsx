import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import "./landing-carousel.css"
import { useContext } from "react"
import { themeContext } from "../../context/themeContext"
import Image from "react-bootstrap/esm/Image"
import Japan from "../../assets/japan.jpeg"
import Islandia from "../../assets/islandia.jpeg"
import Marruecos from "../../assets/marruecos.jpeg"


function LandingCarousel() {

  const { theme, updateTheme, changeTheme } = useContext(themeContext)

  return (
    <Carousel
      style={{ height: "736px" }}
      bg={theme.primary}
      className="shadow-lg  mb-5 bg-body   pb-4 card_style_carousel">
      <Carousel.Item>
        <Card

          sm={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          xl={{ span: 4, offset: 1 }}
          style={{ height: "736px" }}
          className="shadow-lg bottom-0"
         
        >
          <Image className="image_card" src={Japan}></Image>
        </Card>
        <Carousel.Caption className="bottom-0 position_title">
          <h1>Kyoto</h1>
          <h3>5 días</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Card
          style={{ height: "736px" }}
          bg={theme.primary}
        >
          <Image className="image_card" src={Islandia}></Image>
        </Card>
        <Carousel.Caption className="bottom-0 position_title">
          <h1>Islandia</h1>
          <h3>15 días</h3>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <Card
          style={{ height: "736px" }}
          bg={theme.secondary}
        >
          <Image className="image_card" src={Marruecos}></Image>
        </Card>
        <Carousel.Caption className="bottom-0 position_title">
          <h1>Marruecos</h1>
          <h3>10 días</h3>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  )

}

export default LandingCarousel