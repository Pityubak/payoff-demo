import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {
    render() {
        return (
            <MDBNotification
                show
                fade
                autohide={6000}
                className={this.props.className}
                iconClassName="text-primary"
                title={this.props.title}
                message={this.props.message}
                icon={this.props.icon}
                style={{
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    zIndex: 9999
                }}
            />
        );
    }
}

export default Notification;