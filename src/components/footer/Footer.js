import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import CreditCard from "../../assets/creditcardicons.png";

import "./footer.scss";
function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow us</h3>

            <ul className="follow">
              <li className="hover-link center">
                <FaInstagram />
              </li>
              <li className="hover-link center ">
                <FaXTwitter />
              </li>
              <li className="hover-link center ">
                <CiFacebook />
              </li>
              <li className="hover-link center ">
                <CiMail />
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="title">Company</h3>
            <ul className="company">
              <li className="hover-link">Contact Us</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Returns And Exchange Policy</li>
              <li className="hover-link">Shipping Policy</li>
              <li className="hover-link">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="sub-footer center">
          <div className="credit-card-image">
            <img src={CreditCard} alt="credit-img" />
          </div>
        </div>

        <p>
          CopyRight {new Date().getFullYear()} <strong>Posterz</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
