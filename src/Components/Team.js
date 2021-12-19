import './Team.css'
import React from 'react'
import { Col, Container, Row, Button, Accordion } from 'react-bootstrap';
import Tesla from './img/Tesla.png'
import SpaceX from './img/SpaceX.png'
import Adobe from './img/Adobe.png'
import Microsoft from './img/Microsoft.png'


const Team = () => {
    return (
        <>

            <div className="partners Montserrat"><br />
                <h3>Team -e- Partners</h3>
                <h4>For the blockchain community, by the blockchain community</h4>
                <p>Telegraph Is an open source, global community dedicated to <br />the prof (unreadable text on the wireframe) the quick brown <br />fox jumped over the lazy dogs.</p>
            </div>

            <div className="connected-with">
                <Container>
                    <h5 className="Montserrat">Check out who we have connected with</h5>
                    <Row>
                        <Col>
                            <div className="social-st-media">
                                <div className="partner a Montserrat">
                                    <div className="e">
                                        <h4>Partner Name</h4>
                                    </div>
                                    <div>
                                        <img src={Tesla} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="social-media">
                                <div className="partner b Montserrat">
                                    <div className="e">
                                        <h4>Partner Name</h4>
                                    </div>
                                    <div>
                                        <img src={SpaceX} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="social-media">
                                <div className="partner c Montserrat">
                                    <div className="e">
                                        <h4>Partner Name</h4>
                                    </div>
                                    <div>
                                        <img src={Adobe} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="social-media">
                                <div className="partner d Montserrat">
                                    <div className="e">
                                        <h4>Partner Name</h4>
                                    </div>
                                    <div>
                                        <img src={Microsoft} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Team;