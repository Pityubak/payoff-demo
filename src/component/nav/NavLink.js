import React, { Component } from "react";

<<<<<<< HEAD
class NavLink extends Component{


    scrollToDiv = (id) => {
        const anchor = document.querySelector(id)
        anchor.scrollIntoView({ behavior: 'smooth',block: 'nearest', inline: 'end' })
    }

    render() {
        return (
            <div onClick={() => this.scrollToDiv("#" + this.props.to)} className={this.props.className}>
                {this.props.title}
            </div>
        );
    }
=======
const NavLink =(props)=>{

        return (
            <div onClick={props.onClick} className={props.className}>
                {props.title}
            </div>
        );
    
>>>>>>> 957a57a... first init

}

export default NavLink;