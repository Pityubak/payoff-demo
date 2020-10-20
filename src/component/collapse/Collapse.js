import React from "react";
import { MDBCollapse } from "mdbreact";

const Collapse = (props) => {

    return (
        <MDBCollapse isOpen={props.collapse}>
            {props.children}
        </MDBCollapse>
    );
}

export default Collapse;