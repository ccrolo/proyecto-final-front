import React, { useContext, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import "./trip-route.css"
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import { useTranslation } from "react-i18next";
import { ReactFileInputCustom } from 'react-file-input-custom';
import { themeContext } from "../../context/themeContext";
import 'leaflet/dist/leaflet.css'
import { Map, MapContainer, TileLayer, Marker, Polyline, useMap, useMapEvents } from "react-leaflet";
import L from 'leaflet';
import Button from "react-bootstrap/Button";
import gif from "../../assets/gif3.gif"
import { use } from "i18next";
import CardRoute from "../../components/card-route/card-route"


// Hacer que cada viaje tenga su ruta:
// 1. Primero indicar en que lugar se va a hacer el viaje --> Posicionará el mapa
//  a) Crear Input donde incluimos nombre --> Buscar coordenadas con el nombre.
//  b) Primero probar dando directamente las coordenadas
// 2. Incluir un marcador en cada punto del viaje --> Debe guardarse en un array cada punto
//  a) Debemos encontrar ubicación según nombre
//  b) Debe incluir lat y lon para posicionarse
// 3. Debe guardarse el nombre de cada lugar en una lista numerada
// 4. Cuando se haga click o hover sobre un punto debe señalarse en el mapa.
// 5. Debe poderse incluir un archivo con los datos de reservas de ese punto.
// 6. Cada usuario debe tener todos los datos --> Objeto?
// 7. Deberá guardarse en BBDD según ID único de cada usuario

function MapChangeCenter({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}


function TripRoute() {

    const [t, i18n] = useTranslation("global")
    const [currentPosition, updateCurrentPosition] = useState()
    const [position, setPosition] = useState('');
    const [center, updateCenter] = useState(currentPosition)
    const [titleCard, titleCardUpdate] = useState([])
    const [marker, updateMarker] = useState([])
    const [nextCity, nextCityUpdate] = useState('')
    const [rute, ruteUpdate] = useState([])
    const [counter, setCounter] = useState(0)


    // Añadir marcadores haciendo click en el mapa
    const AddMarker = () => {

        useMapEvents({
            click: (e) => {
                updateMarker((marker) => [[e.latlng.lat ? e.latlng.lat : '', e.latlng.lng]]);
                /*  setPosition([e.latlng.lat ? e.latlng.lat : '', e.latlng.lng]); */
                /* updateMarker((marker) => [...marker, [e.latlng.lat, e.latlng.lng]]) */

                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
                    .then(d => d.json())
                    .then(data => {
                        console.log(data)
                        nextCityUpdate(data.address.county)
                        /* titleCardUpdate((titleCard) => [...titleCard, data.address.county]) */
                    })
            },

        });
        return position === '' ? '' : (
            <Marker position={position}></Marker>
        );
    };

    // Crear centro de mapa

    const handlePlace = e => {
        e.preventDefault()

        const firstCity = e.target.firstCity.value
        nextCityUpdate(firstCity)

        fetch(`http://api.positionstack.com/v1/forward?access_key=45c3db208fca50fb47eda23e4b198c24&query=${firstCity}`)
            .then(d => d.json())
            .then(data => {
                console.log(data)
                updateCenter([data.data[0].latitude, data.data[0].longitude])
                updateMarker((marker) => [...marker, [data.data[0].latitude, data.data[0].longitude]])
            })
    }

    // Añadir marcadores por input

    const handleMarker = e => {
        e.preventDefault()

        const nextCity = e.target.nextCity.value
        nextCityUpdate(nextCity)


        fetch(`http://api.positionstack.com/v1/forward?access_key=45c3db208fca50fb47eda23e4b198c24&query=${nextCity}`)
            .then(d => d.json())
            .then(data => {
                console.log(data)
                /* updateMarker((marker) => [...marker, [data.data[0].latitude, data.data[0].longitude]]) */
                updateMarker((marker) => [[data.data[0].latitude, data.data[0].longitude]])

            })

    }

    const addPlace = e => {
        const cityObj = {
            name: nextCity,
            number: counter + 1,
            positions: marker
        }
        titleCardUpdate((titleCard) => [...titleCard, cityObj])
        ruteUpdate([...rute, marker])
        setCounter(e => e + 1)

        /* titleCardUpdate((titleCard) =>[titleCard.pop()])
          updateMarker((marker) => [marker.pop()]) */

    }

    console.log(rute)
    console.log(titleCard)

    // Marcadores
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    return (

        <React.Fragment>
            <Header />
            <Container fluid style={{ width: "100%" }} className="trip_bg">
                <Row
                    className="justify-content-center"
                    style={{ width: "100%" }}>
                    <Col
                        className="m-auto mb-5"
                        xs={{ span: 10, offset: 0 }}
                        sm={{ span: 10, offset: 0 }}
                        md={{ span: 8, offset: 2 }}
                        lg={{ span: 5, offset: 0 }}
                        xl={{ span: 5, offset: 0 }}>

                        <Card
                            className="mt-5 border-0 mb-1 ms-3 me-3 pt-5 pb-5  text-center"
                            style={{ backgroundColor: "rgb(58, 74, 61,0.6)", width: "100%", height: "100vh" }}>

                            <Row className="justify-content-center">
                                <Col
                                    xs={{ span: 9, offset: 0 }}
                                    sm={{ span: 9, offset: 0 }}
                                    md={{ span: 9, offset: 0 }}
                                    lg={{ span: 9, offset: 0 }}
                                    xl={{ span: 9, offset: 0 }}>

                                    <Form onSubmit={handlePlace}>
                                        <Row>
                                            <Col >
                                                <Form.Label
                                                    style={{ backgroundColor: "rgb(252, 250, 244, 0.6)", borderRadius: "10px" }}
                                                    className="mt-1 p-2" >Donde empieza tu viaje?</Form.Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                xs={7}
                                                sm={7}
                                                md={8}
                                                lg={8}
                                                xl={8}>
                                                <Form.Control
                                                    className="mt-3"
                                                    name="firstCity"
                                                    type="text"
                                                    placeholder="Introduce una ciudad"
                                                />
                                            </Col>
                                            <Col>
                                                <Button className=" add_button mt-3 mb-3" type="submit">Buscar</Button>
                                            </Col>
                                        </Row>
                                    </Form>

                                    <Form onSubmit={handleMarker}>
                                        <Row>
                                            <Col >
                                                <Form.Label
                                                    style={{ backgroundColor: "rgb(252, 250, 244, 0.6)", borderRadius: "10px" }}
                                                    className="mt-1 p-2" >Tu siguiente parada?</Form.Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                xs={7}
                                                sm={7}
                                                md={8}
                                                lg={8}
                                                xl={8}>
                                                <Form.Control
                                                    className="mt-3"
                                                    name="nextCity"
                                                    type="text"
                                                    placeholder="Introduce un lugar"
                                                />
                                            </Col>
                                            <Col>
                                                <Button className="add_button mt-3 mb-3" type="submit">Buscar</Button>
                                            </Col>
                                        </Row>
                                    </Form>

                                    {/*  <ReactFileInputCustom /> */}

                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col
                                    xs={{ span: 9, offset: 0 }}
                                    sm={{ span: 9, offset: 0 }}
                                    md={{ span: 9, offset: 0 }}
                                    lg={{ span: 9, offset: 0 }}
                                    xl={{ span: 9, offset: 0 }}>
                                    <Card
                                        style={{ backgroundColor: "rgb(252, 250, 244, 0.2)", borderRadius: "10px", width: "100%", height: "350px" }}
                                        className="p-2 border-0 scroll">
                                        {titleCard.map(c => c === undefined ? '' : <CardRoute title={c.name} number={c.number} /* {SetCounter([...counter,counter.length + 1])} */ />)}

                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col
                        className=" m-auto mb-5"
                        xs={{ span: 10, offset: 1 }}
                        sm={{ span: 10, offset: 1 }}
                        md={{ span: 8, offset: 2 }}
                        lg={{ span: 5, offset: 0 }}
                        xl={{ span: 5, offset: 0 }}>

                        <Card
                            className="mt-5 border-0 mb-1 ms-3 me-3 p-3  text-center"
                            style={{ backgroundColor: "rgb(58, 74, 61,0.6)", width: "100%", height: "100vh" }}>
                            <Card
                                className="border-0 mb-2"
                                style={{ backgroundColor: "rgb(252, 250, 244, 0.7)", height: "7%" }}>
                                < Card.Text className="mt-2 ">{nextCity}
                                    <Button
                                        onClick={addPlace}
                                        className="border-0"
                                        style={{ marginLeft: "150px", backgroundColor: "rgb(58, 74, 61,0.8)" }}>
                                        Añadir
                                    </Button>
                                </Card.Text>

                            </Card>
                            {center !== undefined ?
                                <MapContainer
                                    style={{ width: "100%", height: "100%" }}
                                    center={center}
                                    zoom={5}
                                >
                                    <TileLayer
                                        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}

                                    />
                                    <MapChangeCenter center={center} zoom={5} />

                                    {marker.map(m => <Marker
                                        position={m} />)}

                                    {rute !== null ? '' : rute.map(r => <Marker position={r[0]} />)}
                                    < AddMarker />

                                    <Polyline positions={rute} />

                                </MapContainer> : <Image className="gif" src={gif} />}
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default TripRoute;