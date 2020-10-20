import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBIcon } from 'mdbreact';
import Logo from "../../assets/logo.jpg";
import "./Header.scss";


import withWindowSize from '../hoc/withWindowSize/withWindowSize';
import NavLink from '../nav/NavLink';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

<<<<<<< HEAD
  render() {
    const cls = this.props.windowWidth > 1396 ? "header-item " :
      "header-item header-item--lg" ;
    
      
=======
  scrollToDiv = (id) => {
    const anchor = document.querySelector(id)
    anchor.scrollIntoView({    behavior: 'smooth', 
    block: 'start' ,inline: "nearest" })
    // if (id !== "#welcome"){
    //   this.setState({
    //     collapse: !this.state.collapse
    //   });
    
  }

  render() {
    const cls = this.props.windowWidth > 1396 ? "header-item " :
      "header-item header-item--lg";


>>>>>>> 957a57a... first init

    return (
      <MDBContainer fluid>
        <header>
<<<<<<< HEAD
          <MDBNavbar className={this.state.collapse&& this.props.windowWidth<400 && "navbar-color"}  color="stylish-color" fixed="top" dark expand="lg" scrolling transparent>
            <MDBNavbarBrand >
            <img src={Logo} alt="logo" width={this.props.windowWidth<600 ? "30px":"50px"} />
            <strong style={this.props.windowWidth<600? { marginLeft: "7px",fontSize:"1rem" }:{ marginLeft: "10px" }}>Elszámolás 2000 Bt.</strong>
            </MDBNavbarBrand>
           <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse  isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right >
                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="home" /><NavLink title="Kezdőlap" to="welcome" className="header-item--link" /> </div>
                </MDBNavItem>
                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="info-circle" /><NavLink title="Bemutatkozás" to="home" className="header-item--link" /></div>
                </MDBNavItem>
                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="chart-pie" /><NavLink title="Szolgáltatásaink" to="service" className="header-item--link" /> </div>
                </MDBNavItem>
                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="headphones-alt" /><NavLink title="Kapcsolat" to="contact" className="header-item--link" /> </div>
=======
          <MDBNavbar className={this.state.collapse && this.props.windowWidth < 400 && "navbar-color"} color="stylish-color" fixed="top" dark expand="lg" scrolling transparent>
            <MDBNavbarBrand >
              <NavLink onClick={() => this.scrollToDiv("#welcome")} title={<div style={{ cursor: "pointer" }}>
                <img src={Logo} alt="logo" width={this.props.windowWidth < 600 ? "30px" : "50px"} />
                <strong style={this.props.windowWidth < 600 ? { marginLeft: "7px", fontSize: "1rem" } : { marginLeft: "10px" }}>Elszámolás 2000 Bt.</strong>
              </div>} ></NavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right >

                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="info-circle" /><NavLink onClick={() => this.scrollToDiv("#home")}
                    title="Bemutatkozás" className="header-item--link" /></div>
                </MDBNavItem>
                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="chart-pie" /><NavLink onClick={() => this.scrollToDiv("#service")}
                    title="Szolgáltatásaink" className="header-item--link" /> </div>
                </MDBNavItem>
                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="calculator" /><NavLink title="Könyvelési díj kalkulátor" onClick={() => this.scrollToDiv("#calculator")}
                    className="header-item--link" /> </div>
                </MDBNavItem>
                <MDBNavItem>
                  <div className={cls}><MDBIcon icon="headphones-alt" /><NavLink title="Kapcsolat" onClick={() => this.scrollToDiv("#contact")}
                    className="header-item--link" /> </div>
>>>>>>> 957a57a... first init
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </MDBContainer>
    );
  }
}

export default withWindowSize(Header);