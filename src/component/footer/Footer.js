import React from "react";
import { MDBContainer, MDBFooter, MDBRow } from "mdbreact";

import "./Footer.scss";

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 foot">
      <MDBContainer fluid className="text-center text-md-left">
      <div className=" text-center py-3 footer-br">
        <MDBContainer fluid className="footer-fs">
          &copy; {new Date().getFullYear()} Copyright  Elszámolás 2000 Bt. 
        </MDBContainer>
      </div>
      </MDBContainer>
 <div >
        <MDBContainer fluid>
          <MDBRow center><a href="https://github.com/Pityubak" >Created by Pityubak</a> </MDBRow>  
        </MDBContainer>
      </div> 
    </MDBFooter>
  );
}

export default Footer;