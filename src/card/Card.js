import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBCardTitle, MDBCol, MDBIcon, MDBView, } from 'mdbreact';
import "./Card.scss";
import withWindowSize from '../component/hoc/withWindowSize/withWindowSize';
import { Hinge } from 'react-awesome-reveal';

class Card extends Component {

    constructor() {
        super();
        this.state = {
            isHinge: false
        }
    }

    changeHinge = () => {
        this.setState({ isHinge: !this.state.isHinge });
    }

    render() {
        const card = this.state.isHinge ? <Hinge triggerOnce={true} duration={2000}>
            <MDBCard className="text-center card-transparent">
                <MDBCardHeader className="card-transparent"  >    <MDBView>
                    <MDBIcon icon={this.props.icon} size="3x" className="logo-color " />
                </MDBView></MDBCardHeader>
                <MDBCardBody className="card-black">
                    {this.props.windowWidth > 496 &&
                        <MDBCardTitle >{this.props.title}</MDBCardTitle>}

                    <MDBCardText className="card-text--size">
                        {this.props.windowWidth > 496 ? this.props.text : this.props.title}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </Hinge> : <MDBCard className="text-center card-transparent">
                <MDBCardHeader className="card-transparent"  >    <MDBView>
                    <MDBIcon icon={this.props.icon} size="3x" className="logo-color " />
                </MDBView></MDBCardHeader>
                <MDBCardBody className="card-black">
                    {this.props.windowWidth > 496 &&
                        <MDBCardTitle >{this.props.title}</MDBCardTitle>}

                    <MDBCardText className="card-text--size">
                        {this.props.windowWidth > 496 ? this.props.text : this.props.title}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        return (

            <MDBCol>
                <div onClick={this.changeHinge}>
                    {card}
                </div>
            </MDBCol>
        )
    }
}

export default withWindowSize(Card);