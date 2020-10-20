import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBInput, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBListGroup, MDBListGroupItem, MDBCardFooter, MDBTable, MDBTableHead, MDBTableBody } from
  'mdbreact';
import Netto from "../enums/Netto";
import NumberA from "../enums/NumberA";
import NumberOfB from "../enums/NumberOfB";
import NumberOfD from "../enums/NumberOfD";
import "./Calculator.scss";
import Collapse from '../collapse/Collapse';
import Type from '../enums/Type';
import NumberFormat from 'react-number-format';
import withWindowSize from '../hoc/withWindowSize/withWindowSize';


class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      collapseKata: false,
      collapseMore: false,
      numberOfB: "1-50",
      numberOfD: "Nem",
      numberOfA: "nem vagyok áfa adóalany",
      netto: "0-10 millióig",
      fix: "",
      other: "",
      type: "",
      sum: 0,
      othersum: 0,
      kataSum: 0,
      isVisible: false,
      disabled: true,
      isKata: false,
      tableData: {
        columns: [
          {
            label: "#",
            field: "id",
            sort: "asc"
          },
          {
            label: "Tétel megnevezése",
            field: "name",
            sort: "asc"
          },
          {
            label: "Ár(bruttóban értendő)",
            field: "sum",
            sort: "asc"
          }
        ],
        rows: [
          {
            id: '1',
            name: "Könyvelési díj",
            sum: "0"
          },
          {
            id: '2',
            name: "Bérszámfejtési  díj",
            sum: "0"
          },
          {
            id: '3',
            name: "Összesen",
            sum: "0"
          },
        ]
      }


    }

    this.handleChange = this.handleChange.bind(this);
    this.computeValue = this.computeValue.bind(this);
    this.computeKata = this.computeKata.bind(this);
  }

  toggle = (e) => {
    const { name, value } = e.target;
    if (value === Type.BT || value === Type.EV) {
      this.setState({ collapseKata: true, [name]: value, isVisible: false, collapseMore: false, disabled: true, isKata: false });
    } else if (value === Type.NP) {
      this.createTable({ id: "1", sum: 8000 });
      this.createTable({ id: "2", sum: 0 });
      this.createTable({ id: "3", sum: 8000 });
      this.setState({ collapseKata: false, [name]: value, isVisible: true, collapseMore: false, disabled: false, isKata: true });

    }
    else {
      this.setState({ collapseKata: false, [name]: value, isVisible: false, collapseMore: true, isKata: false, disabled: false });
    }

  }

  createTable = (acc) => {
    const temp = this.state.tableData;
    temp.rows.map(e => {
      if (acc.id === e.id) {
        e.sum = <NumberFormat value={acc.sum} displayType={'text'} thousandSeparator={" "} renderText={value => <div>{value}  Forinttól</div>} />;
      }
    })

    this.setState({ tableData: temp });
  }



  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  activateMoreSelect = () => {

    this.setState({ collapseMore: !this.state.collapseMore, collapseKata: false, isVisible: false, disabled: false });
  }

  computeKata = () => {
    const value = this.state.type;
   
    if (value === Type.BT) {
      this.createTable({ id: "1", sum: 10000 });
      this.createTable({ id: "2", sum: 0 });
      this.createTable({ id: "3", sum: 10000 });
      this.setState({ kataSum: 10000, collapseKata: false, disabled: false, isKata: true, isVisible: true });
    } else if (value === Type.EV || value === Type.NP) {
      this.createTable({ id: "1", sum: 8000 });
      this.createTable({ id: "2", sum: 0 });
      this.createTable({ id: "3", sum: 8000 });
      this.setState({ kataSum: 8000, collapseKata: false, disabled: false, isKata: true, isVisible: true });
    }
    const anchor = document.querySelector("#table")
    anchor.scrollIntoView({ behavior: 'smooth' })

  }

  computeValue = (e) => {
    e.preventDefault();
  
    if (!this.state.isKata) {
      let sum = 0;
      let otherSum = 0;
      const b = Object.keys(NumberOfB).find(name => name === this.state.numberOfB);
      const d = Object.keys(NumberOfD).find(name => name === this.state.numberOfD);
      const a = Object.keys(NumberA).find(name => name === this.state.numberOfA);
      const n = Object.keys(Netto).find(name => name === this.state.netto);
      sum += NumberOfB[b];
      sum += NumberA[a];
      sum += Netto[n];
      sum *= NumberOfD[d];

      let fix = Number.parseInt(this.state.fix);
      let other = Number.parseInt(this.state.other);
      if (Number.isNaN(fix)) {
        fix = 0;
      }
      if (Number.isNaN(other)) {
        other = 0;
      }
      sum = this.typeCheck(sum);
      otherSum += fix * 1500 + other * 2000;
      this.createTable({ id: "1", sum: sum });
      this.createTable({ id: "2", sum: otherSum });
      this.createTable({ id: "3", sum: sum + otherSum });
      this.setState({ sum: sum });
      this.setState({ otherSum: otherSum });
      this.setState({ isVisible: true });
    } else {
      let sum = this.state.kataSum;
      let otherSum = 0;
      let fix = Number.parseInt(this.state.fix);
      let other = Number.parseInt(this.state.other);
      if (Number.isNaN(fix)) {
        fix = 0;
      }
      if (Number.isNaN(other)) {
        other = 0;
      }
      sum = this.typeCheck(sum);
      otherSum += fix * 1500 + other * 2000;
      this.createTable({ id: "1", sum: sum });
      this.createTable({ id: "2", sum: otherSum });
      this.createTable({ id: "3", sum: sum + otherSum });
      this.setState({ sum: sum });
      this.setState({ otherSum: otherSum });
      this.setState({ isVisible: true });
    }
    const anchor = document.querySelector("#table")
    anchor.scrollIntoView({ behavior: 'smooth' })

  }
  typeCheck(value) {
    if (this.state.type === Type.BT) {
      if (value < 10000) {
        return 10000;
      }
    }
    if (this.state.type === Type.EV || this.state.type === Type.NP) {
      if (value < 8000) {
        return 8000;
      }
    }
    if (this.state.type === Type.KFT) {
      if (value < 15000) {
        return 15000;
      }
    }
    return value;
  }


  render() {
    const cls = this.state.type === "" ? "browser-default custom-select spec-select" : "browser-default custom-select ";
    const col=this.props.windowWidth<703? "card-col card-col-pd":"card-col ";
    const fs=this.windowWidth<490 ?"fs":"";
    return (
      <MDBContainer fluid id={"calculator"} className={"calculator"} >

        <MDBRow center>
          <MDBCard>
            <MDBContainer fluid >
              <MDBCardHeader className={"calculator-h"}><div className="text-center calculator-title"  >Könyvelési díj kalkulátor</div>
                <div className={"calculator-header"}>
                  <div>Áraink tájékoztató jellegűek</div>
                  <span style={{ fontSize: ".8rem", color: "orangered", padding: "1rem",textAlign:"center" }}>
                    A fizetendő összeg nagyban változhat abban az esetben ha Ön pénzügyi előkészítést vállal a könyvelés számára</span></div>
              </MDBCardHeader>
              <MDBRow style={{ padding: "2rem " }} center>
                <MDBCol middle className={"card-col "}>
                  <MDBCard border="rgba-teal-strong" >

                    <MDBCardHeader>Bruttó áraink</MDBCardHeader>
                    <div style={{ textAlign: "center" }}>
                      <div className="fourth-s card-col--var"></div>
                      <MDBListGroup className={fs} >
                        <MDBListGroupItem  hover>Egyéni vállalkozás 8.000 Ft -tól /hó</MDBListGroupItem>
                        <MDBListGroupItem hover>Betéti társaság 10.000 Ft -tól/ hó</MDBListGroupItem>
                        <MDBListGroupItem  hover>Korlátolt felelősségű társaság 15.000 Ft -tól / hó</MDBListGroupItem>
                        <MDBListGroupItem  hover>Bérszámfejtés 1500 Ft-tól fő / hó</MDBListGroupItem>
                        <MDBListGroupItem  hover>Év végi zárás, beszámoló készítés  + 1 havi díjért</MDBListGroupItem>
                      </MDBListGroup>
                    </div>
                  </MDBCard>

                </MDBCol>

                <MDBCol className={col}>
                  <form className="mx-3 grey-text">
                    <label> Vállalkozása típusa</label>
                    <select className={cls} name="type" value={this.state.type} onChange={this.toggle} >
                      <option value="" selected disabled hidden>Kérjük válasszon...</option>
                      <option >Egyéni vállalkozó</option>
                      <option >Korlátolt felelősségű társaság</option>
                      <option >Betéti társaság</option>
                      <option>Nonprofit szervezet</option>
                    </select>
                    <Collapse collapse={this.state.collapseKata}>
                      <div className={"kata"}>
                        <h5>Ön vagy az Ön cége KATÁS?</h5>
                        <div>
                          <MDBBtn onClick={this.computeKata} icon="thumbs-up" >Igen
                          <MDBIcon icon="thumbs-up" className="ml-2" far /></MDBBtn>
                          <MDBBtn onClick={this.activateMoreSelect}>Nem <MDBIcon icon="thumbs-down" className="ml-2" far /></MDBBtn>
                        </div>
                      </div>
                    </Collapse>
                    <Collapse collapse={this.state.collapseMore}>
                      <label> Bizonylatok száma havonta(kp-s számlák, pénztár napi zárások, átutalásos számlák,bankszámlakivonatokon szereplő tételek )</label>
                      <select className="browser-default custom-select" name="numberOfB" value={this.state.numberOfB} onChange={this.handleChange}>
                        <option id="1">1-50</option>
                        <option id="2">51-100</option>
                        <option name="numberOfB">101-200</option>
                        <option name="numberOfB">201-300</option>
                        <option name="numberOfB">301-500 </option>
                        <option name="numberOfB">500 felett </option>
                      </select>
                      <label> Éves nettó árbevétel</label>
                      <select className="browser-default custom-select" name="netto" value={this.state.netto} onChange={this.handleChange} >
                        <option name="netto">0-10 millióig</option>
                        <option name="netto">11-50 millióig</option>
                        <option name="netto">51-100 millióig</option>
                        <option name="netto">101-500 millióig</option>
                        <option name="netto">500 millió felett</option>
                      </select>
                      <label> Áfa gyakorisága</label>
                      <select className="browser-default custom-select" name="numberOfA" value={this.state.numberOfA} onChange={this.handleChange} >
                        <option name="numberOfA">nem vagyok áfa adóalany</option>
                        <option name="numberOfA">havi</option>
                        <option name="numberOfA">negyedéves</option>
                        <option name="numberOfA">éves</option>
                      </select>
                      <label>Devizás forgalom</label>
                      <select className="browser-default custom-select" name="numberOfD" value={this.state.numberOfD} onChange={this.handleChange}>
                        <option name="numberOfD">Nem</option>
                        <option name="numberOfD">Igen, jelentős</option>
                        <option name="numberOfD">Igen, nem jelentős</option>

                      </select>

                    </Collapse>
                    <MDBInput onChange={this.handleChange} name="fix" type="text" label="Havidíjas alkalmazottak száma" group />
                    <MDBInput onChange={this.handleChange} name="other" label="Nem havidíjas alkalmazottak száma" group type="text" />
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBCardFooter>
              <div className="modal-ft" id={"table"}>
                <MDBBtn color="unique" disabled={this.state.disabled} onClick={this.computeValue}>Számolás
              <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
                {this.state.isVisible && <div className="calculator-sum">

                  <MDBTable striped responsive   >
                    <MDBTableHead color="special-color" textWhite columns={this.state.tableData.columns}></MDBTableHead>
                    <MDBTableBody rows={this.state.tableData.rows}></MDBTableBody>
                  </MDBTable>
                </div>}
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withWindowSize(Calculator);