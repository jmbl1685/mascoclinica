import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';

import { MenuBtnHandle, ScrollUp, ScrollAnimation, DisplayStyleValue } from '../../utils/utils';

import './Home.css';
import wallpaper from '../../assets/img/wallpaper.jpg';
import loadingGIF from '../../assets/img/loading.gif';
import video from '../../assets/video/video.mp4';
import logo from '../../assets/img/logoHD.png';
import BtnUp from '../../assets/img/service_logo/up.svg';
import logoWhatsapp from '../../assets/img/whatsapp_logo.svg';

export default function Home(props) {
  const { title, description, phone, options } = props.values.home;
  window.onscroll = () => {
    DisplayStyleValue(680, document.getElementById('btn-up'));
  };

  function handleClick(event) {
    document.querySelector('.bm-cross-button button').click();
    ScrollAnimation(event);
  }

  return (
    <div className="home-body">
      <div className="dark-background" />

      <Menu right>
        {options.map((opt, index) => {
          return (
            <h3 key={index} id={opt.classname} onClick={event => handleClick(event)}>
              {opt.name}
            </h3>
          );
        })}
      </Menu>

      <img
        className="hvr-pulse-grow"
        src="https://mascoclinica.now.sh/static/media/up.d8c5e468.svg"
        height="70"
        width="70"
        id="btn-up"
        alt=""
      />

      {/* <div className="menu-btn" onClick={() => MenuBtnHandle()}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div> */}

      <img src={BtnUp} height="70" width="70" id="btn-up" alt="" onClick={() => ScrollUp()} />

      <Element name="home" className="home center">
        <div id="loading" className="center">
          <img src={loadingGIF} alt="" />
        </div>
        <img id="mc_logo" src={logo} alt="" />
        <div>
          <h1 className="mc_title font-shadow yellow-text ">
            {title.part1}
            <b className="msc-green">{title.part2}</b>
            {title.part3}
          </h1>
          <p className="mc_description font-shadow">{description}</p>
          <p className="mc_description font-shadow">
            <br />
            <img id="logo-whatsapp" src={logoWhatsapp} alt="" />
            {phone}
          </p>
        </div>
      </Element>
      <video autoPlay loop muted playsInline id="video-background" poster={wallpaper}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
