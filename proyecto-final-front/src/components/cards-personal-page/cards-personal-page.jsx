import { useEffect, useState } from "react"
import 'leaflet/dist/leaflet.css'
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"
import Japan from "../../assets/japan.jpeg"
import Image from "react-bootstrap/Image"
import "./cards-personal-page.css"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Map, MapContainer, TileLayer, Marker, Polyline, Popup, useMap, useMapEvents } from "react-leaflet";
import L from 'leaflet';








function CardsPersonalPage() {

    const token = localStorage.getItem('token')
    const [tripCards, setTripCards] = useState([])

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });



    useEffect(() => {
        fetch('http://localhost:4000/travels', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`

            }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                setTripCards(data)

            })

    }, []
    )

    const coord = []
    const trip = tripCards.map(t => Object.values(t))
    const arraytrip = trip.map(c => c.map(p => Object.values(p)))
    const tripArr = arraytrip.map( c => c.pop())

    console.log(arraytrip)
    return (
        <Container className="container" fluid style={{ width: "100%" }}>
            <Row >

                {arraytrip.map(t =>
                    <Col
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}>

                        <Card
                            className="card_container mt-4 border-5 border-warning bottom-0"
                            xs={12}
                            sm={6}
                            md={6}
                            lg={12}
                            xl={12}>


                            <Card
                                style={{ width: "50%", height: "450px" }}
                                className="border-0"
                            >
                                <Carousel

                                    style={{ width: "100%", height: "450px" }}
                                    interval={null}
                                    className="mb-5  pb-4">

                                    <Carousel.Item>

                                        <Image className="card_img" src={Japan}></Image>

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card style={{ width: "100%", height: "450px" }} >
                                            {t.map(c => <Card.Text  >{c[1]}</Card.Text>)}

                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <Carousel.Caption>

                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Card>

                             <Card

                                style={{ width: "50%", height: "450px" }}>
                                 {t[0][3][0] !== undefined ?
                                     <MapContainer
                                        className="card_img"
                                        style={{ width: "100%", height: "450px" }}
                                        center={t[0][3][0]}
                                        zoom={5}
                                    >
                                        <TileLayer
                                            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                                        />
                                           
                                             {t.map(p => p=== null ?'': <Marker
                                            position={p[3][0]} > <Popup>{p[2]}. {p[1]}</Popup> </Marker>)}  
  
                                        <Polyline positions={t.map(p => p[3][0])}/>

                                    </MapContainer> : ''} 
                            </Card> 
                        </Card>
                        {/*  {t => t.map( c =>  <Card style={{ width: "100%", height: "450px" }} >{c.name}</Card> )}  */}

                    </Col>)}
            </Row>

        </Container>
    )


}

export default CardsPersonalPage