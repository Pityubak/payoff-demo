import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
    "mdbreact";

import FirstSlide from "../../assets/first.jpg";
import SecondSlide from "../../assets/second.jpg";
import Thirdlide from "../../assets/third.jpg";
import Card from "../../card/Card";
import { Slide } from "react-awesome-reveal";
import withWindowSize from "../hoc/withWindowSize/withWindowSize";

class Carousel extends Component {

    constructor() {
        super();
        this.state = {
            active: 1
        }

    }

    handleAnimation = () => {
        return (

            <div >

                <div>
                    <Slide direction={"left"} duration={3000}
                    >
<<<<<<< HEAD
                        <Card icon="briefcase"
=======
                        <Card icon="balance-scale"
>>>>>>> 957a57a... first init
                            title="Könyvelés"
                            text="Könyvviteli szolgáltatások Önre szabva" />
                    </Slide >
                </div>


                <div>
                    <Slide direction={"right"} duration={3000}
                    >
                        <Card icon="address-book"
                            title="Magas szintű szolgáltatások"
                            text="Ügyfeleink helyett mi tartjuk a kapcsolatot a NAV-val" />
                    </Slide  >
                </div>


                <div>
                    <Slide direction={"up"} duration={3000}
                    >
                        <Card icon="hand-holding-usd"
                            title="Kedvezmény új ügyfeleknek"
                            text="50% kedvezmény az első két hónapban a könyvelési díjból." />
                    </Slide >);
             </div>

            </div>);
    }


    render() {

        const active = this.handleAnimation();
        return (
            <div className="carousel">

                <MDBCarousel
                    interval={8000}
                    activeItem={1}
                    length={3}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1" >
                            <MDBView>
                                <img
                                    style={{ maxHeight: "100vh" }}
                                    className="d-block w-100"
                                    src={FirstSlide}
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-strong" className="flex-center" >
                                    {this.props.windowWidth < 1100 ? <Slide direction={"left"} duration={3000}
                                    >
                                        <Card icon="briefcase"
                                            title="Könyvelés"
                                            text="Könyvviteli szolgáltatások Önre szabva" />
                                    </Slide > : active}
                                </MDBMask>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView waves>
                                <img
                                    style={{ maxHeight: "100vh" }}
                                    className="d-block w-100"
                                    src={SecondSlide}
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" className="flex-center" >
                                    {this.props.windowWidth < 1100 ? <Slide direction={"right"} duration={3000}
                                    >
                                        <Card icon="address-book"
                                            title="Magas szintű szolgáltatások"
                                            text="Ügyfeleink helyett mi tartjuk a kapcsolatot a NAV-val" />
                                    </Slide  > : active}
                                </MDBMask>
                            </MDBView>

                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    style={{ maxHeight: "100vh" }}
                                    className="d-block w-100"
                                    src={Thirdlide}
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-strong" className="flex-center" >
                                    {this.props.windowWidth < 1100 ? <Slide direction={"up"} duration={3000}
                                    >
                                        <Card icon="hand-holding-usd"
                                            title="Kedvezmény új ügyfeleknek"
                                            text="50% kedvezmény az első két hónapban a könyvelési díjból." />
                                    </Slide > : active}
                                </MDBMask>
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>

            </div>
        );
    }

}

export default  withWindowSize(Carousel);