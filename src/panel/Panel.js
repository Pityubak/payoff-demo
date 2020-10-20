import { MDBCard, MDBCardBody, MDBCardText, MDBIcon } from "mdbreact";
import React, { Component } from "react";
import "./Panel.scss";

class Panel extends Component {

    constructor(){
        super();
        this.state={
            pause:false
        }
    }

    onPause=()=>{
        this.setState({pause:!this.state.pause});
    }
    render() {
        let cls=this.state.pause ? "circle ":"circle pause ";
        cls+=this.props.color;
        return (
            <MDBCard className={"panel " + this.props.className} onClick={this.onPause}>
                <MDBCardBody  >
                    <div className="pcontainer">
                        <MDBIcon className={"panel-img"} icon={this.props.icon} size="3x" />
                        <div className={cls} style={{ animationDelay: "-3s" }}></div>
                        <div className={cls} style={{ animationDelay: "-2s" }}></div>
                        <div className={cls} style={{ animationDelay: "-1s" }}></div>
                        <div className={cls} style={{ animationDelay: "0s" }}></div>
                    </div>

                    <MDBCardText style={{ color: "white" }}>
                        {this.props.content}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default Panel;