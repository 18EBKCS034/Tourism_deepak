import React from "react";
import style from "../style/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.Footer}>
      <div className="row">
        <div className="col-lg-4">
          <div className={style.FooterItem}>
            <h6 className={style.title}>About</h6>
            <div className="row">
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                Our mission is to fuel our partners’ growth through our unparalleled technology, travel supply and support services.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={style.FooterItem}>
            <h6 className={style.title}>GET IN TOUCH</h6>
            <div className="row">
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                <p>
                        <i class="fa fa-home w3-large"></i>&nbsp;&nbsp;&nbsp;25ES2-E,1st Floor,<br/>&nbsp;&nbsp;&nbsp;&nbsp;Sant Nagar, East of <br/>&nbsp;&nbsp;&nbsp;&nbsp;Kailash, New Delhi, <br/>&nbsp;&nbsp;&nbsp;&nbsp;Delhi, India 110065<br />
                        <i class="fa fa-envelope"></i>&nbsp;&nbsp;info@naini-tal<br />
                        <i class="fa fa-whatsapp"></i>&nbsp;&nbsp;+91 98765 43210
                        </p>
                </a>
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={style.FooterItem}>
            <h6 className={style.title}>HOST</h6>
            <div className="row">
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                        Online Demo
                        Mobile Apps
                        Our Services
                        Portfolio Analysis
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div
            className={`${style.FooterContent} justify-content-start justify-content-sm-center justify-content-lg-between`}
          >
            <div className="d-flex align-items-center flex-wrap">
              <h6>© 2021 Take A Trip, Inc. All rights reserved</h6>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="d-flex align-items-center mr-3 ">
                <i class="fas fa-globe mr-2"></i>
                <a href="" className="text">
                  English (US)
                </a>
              </div>
              <div className="d-flex align-items-center mx-3">
                <span className="mr-2">$</span>
                <a href="#">USD</a>
              </div>
              <div className="d-flex align-items-center ml-3">
                <a href="#" className="mx-2">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="mx-2">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" className="mx-2">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
