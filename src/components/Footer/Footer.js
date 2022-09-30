import React from "react";
import Facebook from "../files/facebook.png";
import Instagram from "../files/instagram.png";
import Twitter from "../files/twitter.png";
import Youtube from "../files/youtube.png";
import Pinterest from "../files/pinterest.png";
import Logo from "../files/LogoWhite.png";
import "./Footer.css";

const Footer = () => {
  const icons = [Facebook, Instagram, Twitter, Youtube, Pinterest];

  return (
    <div className="footer">
      <div className="icons">
        <img className="logo" src={Logo} alt="easybank" />
        <br />
        <div>
          {icons.map((icon) => {
            return <img src={icon} alt={icon} />;
          })}
        </div>
      </div>
      <div className="links">
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Support</p>
        <p>Privacy Policy</p>
      </div>
      <div className="invite">
        <button className="gradient">Request Invite</button>
        <span>© Easybank. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
