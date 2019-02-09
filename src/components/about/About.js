import React from 'react';
import { Element } from 'react-scroll';

import './About.css';
import logoAbout from '../../assets/img/about.png';
import logoMision from '../../assets/img/service_logo/1207838.svg';
import logoVision from '../../assets/img/service_logo/1168654.svg';

export default function About(props) {
  const { title, description, mision, vision, message } = props.values.about;
  return (
    <Element name="about">
      <div className="about container mt-40" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="text-center">{title}</h1>
              <div className="text-justify">
                <p>{description}</p>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={logoAbout} alt="news image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: '#34BF49', padding: '50px' }}
        className="about container-fluid mt-40"
        id="about"
      >
        <div className="container white">
          <div className="row">
            <div className="col-lg-6 text-center">
              <img className="logo-size" src={logoVision} alt="" />
              <h1 className="font-shadow text-center white">{vision.title}</h1>
              <div className="text-justify">
                <p>{vision.description}</p>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img className="logo-size" src={logoMision} alt="" />
              <h1 className="font-shadow text-center white">{mision.title}</h1>
              <div className="text-justify">
                <p>{vision.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about a-fluit container-fluid mt-40" id="about">
        <div className="container">
          <div className="row text-center">
            <div data-aos="fade-right" className="col-lg-6">
              <img className="logo-size" src={logoMision} alt="" />
              <h1 className="text-center font-shadow white">{mision.title}</h1>
              <div className="text-justify">
                <p>{mision.description}</p>
              </div>
            </div>
            <div data-aos="fade-left" className="col-lg-6">
              <img className="logo-size" src={logoVision} alt="" />
              <h1 className="text-center font-shadow white">{vision.title}</h1>
              <div className="text-justify">
                <p>{vision.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-40" />

      <div className="center" id="presentation-div">
        <div className="container img-msg">
          <h1 data-aos="zoom-in" className="black-margin white">
            {message}
          </h1>
        </div>
      </div>
    </Element>
  );
}
