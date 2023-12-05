import { Container, Row, Col } from "react-bootstrap";
import NRS from "../images/nrs1.jpg.png";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon3.svg";
import GitIcon from "../images/gitIcon.jpg";
import Twitter from "../images/twitter.jpg"
import MailchimpForm from "./MailChimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={NRS} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Nafiz132" target="blank"><img src={GitIcon} alt="Git" /></a>
              <a href="https://www.linkedin.com/in/nafizur-rahman-b0417a18a/" target="blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/nafiz.sizan" target="blank"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/nafiz_sizan/" target="blank"><img src={navIcon3} alt="Twitter" /></a>
              <a href="https://twitter.com/SizanNafiz" target="blank"><img src={Twitter} alt="twitter"/></a>
            </div>
            <p>@Nafiz Sizan <br />Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer