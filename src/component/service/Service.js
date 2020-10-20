import React, { Component } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardHeader,
    MDBRow, MDBContainer, MDBCol, MDBListGroup, MDBListGroupItem, MDBBtn
} from "mdbreact";

import "./Service.scss";
<<<<<<< HEAD
import Modal from '../modal/Modal';
=======
import Modal from '../calculator/Calculator';
>>>>>>> 957a57a... first init
import { AttentionSeeker, Fade, Slide } from 'react-awesome-reveal';

class Service extends Component {

    constructor() {
        super();
        this.state = {
            modal: false
        }
    }

    openModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {

        return (
<<<<<<< HEAD
            <MDBContainer id={"service"} >
                <Modal isOpen={this.state.modal} toggle={this.openModal} />
=======
            <MDBContainer id={"service"} className={"pd"} >
                {/* <Modal isOpen={this.state.modal} toggle={this.openModal} /> */}
>>>>>>> 957a57a... first init
                <MDBRow >
                    <AttentionSeeker effect="jello">
                        <MDBCard border="rgba-teal-strong" className="service">

                            <MDBCardHeader >Könyvelés</MDBCardHeader>
                            <MDBCardBody className="text-info">
                               
                                    <div className="fancy-box">
                                        <div className="first-s"></div>
                                        <MDBListGroup >
                                            <MDBListGroupItem hover>  Kettős könyvvitel: kimenő, bejövő számlák (devizában is),
                                            pénztárbizonylatok könyvelése (igény esetén kiállítása),
bankbizonylatok, vegyes bizonylatok, tárgyi eszközök nyilvántartása</MDBListGroupItem>
                                            <MDBListGroupItem hover>Pénztárkönyv vezetése</MDBListGroupItem>
                                            <MDBListGroupItem hover>Naplófőkönyv</MDBListGroupItem>
                                            <MDBListGroupItem hover>Adóbevallások elkészítése (havi, negyedéves, éves)</MDBListGroupItem>
                                            <MDBListGroupItem hover>Év végi zárás készítése</MDBListGroupItem>
                                            <MDBListGroupItem hover>Analitikák készítése</MDBListGroupItem>
                                            <MDBListGroupItem hover>Adatszolgáltatás hitelkérelemhez, pályázatokhoz</MDBListGroupItem>
                                            <MDBListGroupItem hover>Kapcsolattartás az adóhatósággal (adófolyószámla, egyeztetés, képviselet)</MDBListGroupItem>
                                        </MDBListGroup>
                                    </div>
                              
                            </MDBCardBody>
                        </MDBCard>
                    </AttentionSeeker>

                </MDBRow>
<<<<<<< HEAD
                <MDBRow>
                    <Slide direction={"right"}  duration={3000} delay={1000} >
=======
                <MDBRow center>
                <AttentionSeeker effect="jello">
>>>>>>> 957a57a... first init
                        <MDBCol className="md-4">
                            <MDBCard border="rgba-teal-strong"className="service" >
                                <MDBCardHeader >Munkaügyi feladatok, szabályzatok  és beszámoló elkészítése</MDBCardHeader>
                                <MDBCardBody className="text-info">
                                   
                                        <div className="fancy-box">
                                            <div className="second-s"></div>
                                            <MDBListGroup >
                                                <MDBListGroupItem hover>Bérszámfejtés</MDBListGroupItem>
                                                <MDBListGroupItem hover>Dolgozók ki- és bejelentése</MDBListGroupItem>
                                                <MDBListGroupItem hover>Munkaügyi nyilvántartások vezetése</MDBListGroupItem>
                                            </MDBListGroup>
                                        </div>
                                   
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
<<<<<<< HEAD
                    </Slide>
                    <Slide direction={"left"}  duration={3000} delay={1000} >
=======
                    </AttentionSeeker>
                    <AttentionSeeker effect="jello">
>>>>>>> 957a57a... first init
                        <MDBCol className="md-4">
                            <MDBCard border="rgba-teal-strong" className="service" >
                                <MDBCardHeader >Szabályzatok  és beszámoló elkészítése</MDBCardHeader>
                                <MDBCardBody className="text-info">
                                    
                                        <div className="fancy-box">
                                            <div className="third-s"></div>
                                            <MDBListGroup >
                                                <MDBListGroupItem hover>Számviteli szabályzatok készítése, aktualizálása</MDBListGroupItem>
                                                <MDBListGroupItem hover>Évközi és év végi mérleg</MDBListGroupItem>
                                                <MDBListGroupItem hover>Kiegészítő melléklet készítés</MDBListGroupItem>
                                            </MDBListGroup>
                                        </div>
                                   
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
<<<<<<< HEAD
                        </Slide>
                </MDBRow>
            
                <MDBRow center>
                    <Fade  duration={3000} delay={1000} >
                    <MDBCard border="rgba-teal-strong" className="service">
                        <MDBCardHeader  >Havi nettó alapdíjaink </MDBCardHeader>
                        <MDBCardBody className="text-info text-center">
                           
                                <div className="fancy-box">
                                    <div className="fourth-s"></div>
                                    <MDBListGroup >
                                        <MDBListGroupItem hover>Egyéni vállalkozás 5.000 Ft -tól</MDBListGroupItem>
                                        <MDBListGroupItem hover>Betéti társaság 10.000 Ft -tól</MDBListGroupItem>
                                        <MDBListGroupItem hover>Korlátolt felelősségű társaság 15.000 Ft -tól</MDBListGroupItem>
                                        <MDBListGroupItem hover>Bérszámfejtés 1500 Ft fő</MDBListGroupItem>
                                        <MDBListGroupItem hover>Év végi zárás, beszámoló készítés  + 1 havi díjért</MDBListGroupItem>
                                    </MDBListGroup>
                                </div>
                           
                            <MDBBtn className="service-btn" onClick={this.openModal}>Könyvelési díj kalkulátor</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    </Fade>
                </MDBRow >
                
=======
                        </AttentionSeeker>
                </MDBRow>           
>>>>>>> 957a57a... first init
            </MDBContainer >
        );
    }
};

export default Service;