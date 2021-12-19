import React from "react";
import './Home.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import  Code from './img/Group 10.png'
import  group1 from './img/Group1.png'
import  group2 from './img/Group2.png'
import  group3 from './img/Group3.png'
import  socialOne from './img/social-one.png'
import  socialTwo from './img/social-two.png'
import  socialThree from './img/social-three.png'
import  socialFour from './img/social-four.png'

const Home = () => {
    return (
        <>
            <div className="home-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="banner-box animate__animated animate__zoomInUp ">
                                <h3 className="Montserrat">Communicate with <br />over 3 blockchains <br />with just a few lines <br />of code</h3>
                                <p className="Montserrat">Telegraph Is a decentralized, lightweight <br />messaging oracle that allows developers to <br />easily access external blockchains from their <br />smart contracts</p>
                                <div>
                                    <Button variant="primary" className="justify-content-end blue-btn Montserrat e">Develop With Telegraph</Button>
                                    <Button variant="primary" className="justify-content-end white-btn Montserrat">Run a Node</Button>
                                </div>
                            </div>
                            <div className="nft-box">
                                <div className="nft-sale Montserrat">
                                    <p>Participate in our NFT sale</p>
                                    <Button variant="primary" className="justify-content-end gredient-btn Montserrat">NFT Sale Link</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        <p className="intero-p Montserrat">Interoperability has never<br />been this easy</p>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <img src={Code}/>
                    </Col>
                        
                    <Col>
                    <div className="introp-links Poppins">
                        <div>
                            <a href="">Send Message</a>
                        </div>
                        <div>
                            <a href="">Receive Message</a>
                        </div>
                        <div>
                            <a href="">Create External Wallet</a>
                        </div>
                        <div>
                            <a href="">Create Wallet Listener</a>
                        </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><p className="big-font Montserrat">A versatile bridge with big plans</p></Col>
                </Row>
                
            </Container>
            <Container className="slide-top-bottom">
                <div className="line-slide"></div>
            <Row>
                    <Col>
                    </Col>
                    <Col>
                        <div className="bridge-one animate__animated animate__backInRight">
                            <div className="one-d Montserrat">
                                <img src={group1} />
                                <div>
                                    <h5>Onchain Verification Only</h5>
                                    <p>Telegraph nodes operate trustlessly, with all verification mechanisms occurring on each supported blockchain</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <div className="bridge-two animate__animated animate__backInLeft">
                            <div className="one-e Montserrat">
                                <div>
                                    <h5>Extremely Cheap Fees</h5>
                                    <p>Your smart contract users only have to pay the gas fees +$1</p>
                                </div>
                                <img src={group2} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <div className="bridge-one animate__animated animate__backInRight">
                            <div className="one-d Montserrat">
                                <img src={group3} />
                                <div>
                                    <h5>CCIP Companies</h5>
                                    <p>Telegraph intends to adopt the chainlink cross chain interoperability protocol to strengthen the security of it’s network</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="tele_you Montserrat">
                <h3>Telegraph + You = Family</h3>
                <p>Join our global community to discuss development, news,<br/> and bug bounties</p>
                <Container>
                    <Row>
                        <Col>
                            <div className="social-st-media">
                                <div className="discord">
                                    <div className="e">
                                        <img src={socialOne} />
                                        <h4>Discord</h4>
                                    </div>
                                    <div>
                                        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z" fill="#D0D5F4"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="social-media">
                                <div className="telegram">
                                    <div className="e">
                                        <img src={socialTwo} />
                                        <h4>Telegram</h4>
                                    </div>
                                    <div>
                                        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z" fill="#D0D5F4"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="social-media">
                                <div className="twitter">
                                    <div className="e">
                                        <img src={socialThree} />
                                        <h4>Twitter</h4>
                                    </div>
                                    <div>
                                        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z" fill="#D0D5F4"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="social-media">
                                <div className="github">
                                    <div className="e">
                                        <img src={socialFour} />
                                        <h4>Github</h4>
                                    </div>
                                    <div>
                                        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z" fill="#D0D5F4"/>
                                        </svg>
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
export default Home;