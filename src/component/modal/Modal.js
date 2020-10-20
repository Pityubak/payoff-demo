import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter, MDBIcon } from
  'mdbreact';
import Netto from "../enums/Netto";
import NumberA from "../enums/NumberA";
import NumberOfB from "../enums/NumberOfB";
import NumberOfD from "../enums/NumberOfD";
import NumberF from "../enums/NumberF";
import "./Modal.scss";

class Modal extends Component {

  constructor() {
    super();
    this.state = {
      numberOfB: "1-50",
      numberOfF: "1",
      numberOfD: "1",
      numberOfA: "nem vagyok áfa adóalany",
      netto: "1-10 millióig",
      fix: "",
      other: "",
      type: "Egyéni vállalkozó",
      sum: 0,
      isVisible:false

    }
    this.handleChange = this.handleChange.bind(this);
    this.computeValue = this.computeValue.bind(this);
  }



  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  computeValue = (e) => {
    e.preventDefault();
    let sum = 0;
    const b = Object.keys(NumberOfB).find(name => name === this.state.numberOfB);
    const f = Object.keys(NumberF).find(name => name === this.state.numberOfF);
    const d = Object.keys(NumberOfD).find(name => name === this.state.numberOfD);
    const a = Object.keys(NumberA).find(name => name === this.state.numberOfA);
    const n = Object.keys(Netto).find(name => name === this.state.netto);
    sum += 4 * NumberOfB[b];
    sum += NumberF[f];
    sum += NumberOfD[d];
    sum += 3 * NumberA[a];
    sum += 3 * Netto[n];
    sum = this.sumCheck(sum);
    let fix = Number.parseInt(this.state.fix);
    let other = Number.parseInt(this.state.other);
    if (Number.isNaN(fix)) {
      fix = 0;
    }
    if (Number.isNaN(other)) {
      other = 0;
    }
    sum = this.typeCheck(sum);
    sum += fix * 1500 + other * 2000;
    this.setState({ sum: sum });
    this.setState({isVisible:true});

  }
  typeCheck(value) {
    if (this.state.type === "Bt.") {
      if (value < 10000) {
        return 10000;
      }
    }
    if (this.state.type === "Kft.") {
      if (value < 15000) {
        return 15000;
      }
    }
    return value;
  }



  sumCheck(value) {

    if (value < 14) {
      return 5000;
    } else if (value < 19) {
      return 10000;
    } else if (value < 23) {
      return 20000;
    } else if (value < 28) {
      return 50000;
    } else if (value < 32) {
      return 100000;
    } else if (value < 37) {
      return 150000;
    } else if (value < 42) {
      return 200000;
    } else {
      return 250000;
    }
  }

  render() {
    return (
      <MDBContainer fluid>
        <MDBModal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.props.toggle}>Könyvelési díj kalkulátor</MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <label> Bizonylatok száma havonta</label>
              <select className="browser-default custom-select" name="numberOfB" value={this.state.numberOfB} onChange={this.handleChange}>
                <option id="1">1-50</option>
                <option id="2">51-100</option>
                <option name="numberOfB">101-200</option>
                <option name="numberOfB">201-300</option>
                <option name="numberOfB">301 felett </option>
              </select>
              <label> Forintos bankszámlák száma</label>
              <select className="browser-default custom-select" name="numberOfF" value={this.state.numberOfF} onChange={this.handleChange} >
                <option name="numberOfF">1</option>
                <option name="numberOfF">2</option>
                <option name="numberOfF">3</option>
                <option name="numberOfF">4</option>
                <option name="numberOfF">5</option>
                <option name="numberOfF">6</option>
                <option name="numberOfF">7</option>
                <option name="numberOfF">8</option>
                <option name="numberOfF">9</option>
                <option name="numberOfF">10 felett</option>
              </select>
              <label> Devizás bankszámlák száma</label>
              <select className="browser-default custom-select" name="numberOfD" value={this.state.numberOfD} onChange={this.handleChange} >
                <option name="numberOfD">1</option>
                <option name="numberOfD">2</option>
                <option name="numberOfD" >3</option>
                <option name="numberOfD" >4</option>
                <option name="numberOfD" >5</option>
                <option name="numberOfD">6</option>
                <option name="numberOfD" >7</option>
                <option name="numberOfD" >8</option>
                <option name="numberOfD">9</option>
                <option name="numberOfD">10 felett</option>
              </select>
              <label> Áfa gyakorisága</label>
              <select className="browser-default custom-select" name="numberOfA" value={this.state.numberOfA} onChange={this.handleChange} >
                <option name="numberOfA">nem vagyok áfa adóalany</option>
                <option name="numberOfA">havi</option>
                <option name="numberOfA">negyedéves</option>
                <option name="numberOfA">éves</option>
              </select>
              <label> Éves nettó árbevétel</label>
              <select className="browser-default custom-select" name="netto" value={this.state.netto} onChange={this.handleChange} >
                <option name="netto">1-10 millióig</option>
                <option name="netto">11-50 millióig</option>
                <option name="netto">51-100 millióig</option>
                <option name="netto">100-500 millióig</option>
                <option name="netto">500 felett</option>
              </select>
              <label> A vállalkozás típusa</label>
              <select className="browser-default custom-select" name="type" value={this.state.type} onChange={this.handleChange} >
                <option >Egyéni vállalkozó</option>
                <option >Kft.</option>
                <option >Bt.</option>
                <option>Non-profit szervezet</option>
              </select>
              <MDBInput onChange={this.handleChange} name="fix" type="text" label="Bérszámfejtett fix havidjas"  group />
              <MDBInput onChange={this.handleChange} name="other" label="Egyéb bérszámfejtett"  group type="text" />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <div className="modal-ft">
              <MDBBtn color="unique" onClick={this.computeValue}>Számolás
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
                {this.state.isVisible &&  <div style={{ fontSize: "2rem" }}>Fizetendő: {this.state.sum} Forint</div>}
            </div>
          </MDBModalFooter>
        </MDBModal>

      </MDBContainer>
    );
  }
}

export default Modal;