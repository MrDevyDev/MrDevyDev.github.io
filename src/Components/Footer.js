import React from "react";
import "./CSS/Footer.css";
import "./CSS/MediaHome.css";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sub-footer">
          <div className="footer_icon">
            <a href="https://github.com/MrDevyDev" target="_blank">
              <ImGithub id="foot-icon" />
            </a>
          </div>
          <div className="copy-right">
            <p>All rights reserved &copy; 2024</p>
          </div>
          <div className="footer-name">
            <p id="developer_name">Developed by Rocky!</p>
          </div>
        </div>
      </div>
    </>
  );
}
