import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css"


const FooterPagePro = () => {
  return (
    <MDBFooter color="elegant-color-dark dark lighten-5" className="font-large pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol  md="12" className="py-5">
            <div  className="mb-5 flex-center">
              <a  className="fb-ic botaoFooter">
                <i className="fab fa-facebook-f fa-lg elegant-color-dark-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg elegant-color-dark-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg elegant-color-dark-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg elegant-color-dark-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg elegant-color-dark-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg elegant-color-dark-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="fab fa-lg elegant-color-dark-text">Mrs.Gringa</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;