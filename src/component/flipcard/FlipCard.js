import { MDBCard, MDBCardBody, MDBIcon, MDBCardText } from 'mdbreact';
import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import "./FlipCard.scss";

class FlipCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip   isFlipped={this.state.isFlipped} flipDirection="vertical">
<<<<<<< HEAD
                <MDBCard onClick={this.handleClick} className={"flip "+this.props.className}>
                    <MDBCardBody style={{ textAlign: "center" }} >
                        <MDBIcon icon={this.props.icon} size="3x" />
                    </MDBCardBody>
                </MDBCard>

                <MDBCard onClick={this.handleClick} className={"flip "+this.props.className}>
=======
                <MDBCard   className={"flip "+this.props.className}>
                    <MDBCardBody onMouseEnter={this.handleClick} style={{ textAlign: "center" ,border:"2px solid red"}} >
                        <MDBIcon onMouseEnter={this.handleClick} icon={this.props.icon} size="3x" />
                    </MDBCardBody>
                </MDBCard>

                <MDBCard  className={"flip "+this.props.className}>
>>>>>>> 957a57a... first init
                    <MDBCardText style={{ padding: "2rem" }}>
                        {this.props.text}
                    </MDBCardText>
                </MDBCard>
            </ReactCardFlip>

        )
    }
}

export default FlipCard;