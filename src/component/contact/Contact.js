import React, { Component } from "react";
import {
    MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader
} from 'mdbreact';
import "./Contact.scss";
<<<<<<< HEAD
import { Slide } from "react-awesome-reveal";
=======
import { AttentionSeeker, Slide } from "react-awesome-reveal";
>>>>>>> 957a57a... first init

import emailjs from "emailjs-com"
import apiKeys from "../../api/Apikeys";
import Notification from "../notification/Notification";


class Contact extends Component {

    constructor() {
        super();
        this.state = {
            success: false,
            failed: false,
            from_name: "",
            email: "",
            subject: "",
            content: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ success: false });
        this.setState({ failed: false });
        e.target.className += " was-validated";
<<<<<<< HEAD
        emailjs.sendForm(apiKeys.SERVICE_ID , apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then(() => {
                this.setState({ success: true });
            },
                (error) => {
                    this.setState({ failed: true });
                }
            )
        this.setState({ from_name: '' });
        this.setState({ email: '' });
        this.setState({ subject: '' });
        this.setState({ content: '' });
=======
        if (e.target.reportValidity()) {
            emailjs.sendForm(apiKeys.SERVICE_ID , apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
                .then(() => {
                    this.setState({ success: true });
                },
                    () => {
                        this.setState({ failed: true });
                    }
                )
            this.setState({ from_name: '' });
            this.setState({ email: '' });
            this.setState({ subject: '' });
            this.setState({ content: '' });
        }

>>>>>>> 957a57a... first init
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (

            <MDBContainer fluid id={"contact"} className="contact contact-bg" >
                {this.state.success && <Notification icon="check-circle"
                    title="Sikeres üzenetküldés"
                    message="Üzenetét elküldtük. Hamarosan fel vesszük Önnel a kapcsolatot." />}
                {this.state.failed && <Notification icon="times-circle"
                    title="Sikertelen üzenetküldés"
                    message="Hiba lépett fel, próbálja meg később." />}

<<<<<<< HEAD
                <Slide direction={"right"} duration={3000}  >
                    <MDBRow center >
                        <MDBCol lg="8">
                            <form onSubmit={this.onSubmit} className="needs-validation" noValidate>

                                <p className="h5 text-center mb-4">Írjon nekünk</p>
                                <div className="grey-text">

                                    <MDBInput label="Az Ön neve" icon="user" group type="text" name="from_name" id="defaultFormRegisterNameEx"
                                        className="form-control" qq
                                        success="right" required value={this.state.from_name} onChange={this.onChange} />

                                    <MDBInput label="Az Ön email címe" icon="envelope" group type="email" validate error="wrong" name="email"
                                        success="right" required value={this.state.email} onChange={this.onChange} />
                                    <MDBInput onChange={this.onChange} value={this.state.subject} label="Tárgy" icon="tag" group type="text" validate error="wrong" success="right" name="subject" required />
                                    <MDBInput onChange={this.onChange} value={this.state.content} type="textarea" rows="2" label="Az Ön üzenete" icon="pencil-alt" name="content" required />
                                </div>
                                <div className="text-center">

                                    <MDBBtn type="submit" outline color="secondary">
                                        Küldés
                                     <MDBIcon far icon="paper-plane" className="ml-1" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>

                    </MDBRow>
                </Slide>
                <Slide direction={"left"} duration={3000} delay={1000} >
=======
                <AttentionSeeker effect="tada">
>>>>>>> 957a57a... first init
                    <MDBRow center className="contact">
                        <MDBCol lg="6" >
                            <MDBCard className="contact-card" >
                                <MDBCardHeader>Elérhetőségeink</MDBCardHeader>
                                <MDBCardBody className="text-info">
                                    <MDBCardTitle tag="h5">Cégnév:</MDBCardTitle>
                                    <MDBCardText>
                                        Elszámolás 2000 Bt.
                                     </MDBCardText>
                                    <MDBCardTitle tag="h5">Székhely:</MDBCardTitle>
                                    <MDBCardText>
                                        3300 Eger, Veres Péter út 3. Fszt 3.
                                     </MDBCardText>
                                    <MDBCardTitle tag="h5">Adószám:</MDBCardTitle>
                                    <MDBCardText>
                                        20955067-1-10
                                     </MDBCardText>
                                    <MDBCardTitle tag="h5">E-mail:</MDBCardTitle>
                                    <MDBCardText>
                                        elszamolas2000bt@gmail.com
                                     </MDBCardText>
                                    <MDBCardTitle tag="h5">Telefonszám</MDBCardTitle>
                                    <MDBCardText>
                                        +36/30-8696-420
                                    </MDBCardText>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
<<<<<<< HEAD
                </Slide>
=======
                </AttentionSeeker>

                <AttentionSeeker effect="rubberBand" style={{paddingTop:"8rem"}}>
                    <MDBRow center >
                        <MDBCol lg="8">
                            <form onSubmit={this.onSubmit} className="needs-validation" noValidate>

                                <p className="h5 text-center mb-4">Írjon nekünk</p>
                                <div className="grey-text">

                                    <MDBInput label="Az Ön neve" icon="user" group type="text" name="from_name"
                                        className="form-control"
                                        success="right" required value={this.state.from_name} onChange={this.onChange} />

                                    <MDBInput label="Az Ön email címe" icon="envelope" group type="email" validate error="wrong" name="email"
                                        success="right" required value={this.state.email} onChange={this.onChange} />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                    <MDBInput onChange={this.onChange} value={this.state.subject} label="Tárgy" icon="tag" group type="text" validate error="wrong" success="right" name="subject" required />
                                    <MDBInput onChange={this.onChange} value={this.state.content} type="textarea" rows="4" label="Az Ön üzenete" icon="pencil-alt" name="content" required />
                                </div>
                                <div className="text-center">

                                    <MDBBtn type="submit" outline color="secondary">
                                        Küldés
                                     <MDBIcon far icon="paper-plane" className="ml-1" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>

                    </MDBRow>
                </AttentionSeeker>

>>>>>>> 957a57a... first init


            </MDBContainer>

        );
    }
}

export default Contact;