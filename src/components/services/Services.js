import React from 'react';
import { Element } from 'react-scroll';
import './Services.css';

export default function Services(props) {
  const { title, services } = props.values.services;

  return (
    <Element name="services">
      <br />
      <br />
      <div className="pet_footprint serives-agile py-5" id="services">
        <div className="container py-xl-5 py-lg-3 mt-standard">
          <h1 className="text-center">{title}</h1>
          <div className="row welcome-bottom text-center pt-xl-4">
            {services.map(({ logo, title, description }, index) => (
              <div key={index} data-aos="fade-up" className="col-md-4 welcome-grid">
                <div className="logo-content">
                  <img src={require(`../../assets/img/service_logo/${logo}`)} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="line" />
                <p className="text-justify">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
  {
    /* <div className="container service-container">
      <div className="row">
        <Element name="services" className="col-12">
          <h1 className="text-center">{title}</h1>
        </Element>

        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="services col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center"
            >
              <br />
              <div className="logo-content">
                <img
                  className="logo-size"
                  src={require(`../../assets/img/service_logo/${service.logo}`)}
                  alt=""
                />
              </div>
              <h3>{service.serviceTitle}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div> */
  }
}
