import React, { Component } from "react";
import Carousel from "../carousel/Carousel";
import withWindowSize from "../hoc/withWindowSize/withWindowSize";
import "./Welcome.scss";

class Welcome extends Component {

    render() {
        return (<div className="welcome" id={"welcome"}>
            <Carousel isWideEnough={true} />
        </div>)
    }
}

export default withWindowSize(Welcome);