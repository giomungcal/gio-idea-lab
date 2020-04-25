import React, { useState, useEffect } from 'react';
import ScrollOut from "scroll-out";

import fb from './imgs/fb.png';
import github from './imgs/github.png';
import linkedin from './imgs/linkedin.png';

import lowgrass from './imgs/lowgrass.png'
import smallgrass from './imgs/smallgrass.png'
import middlegrass from './imgs/middlegrass.png'
import tree from './imgs/tree.png'
import forest from './imgs/forest.png'

const App = () => {

  // Handles display of side navbar

  const [ nav, setNav ] = useState(true)

  const showNav = {
    opacity: "1",
    visibility: "visible",
    transform: "translateX(0px)"
  };

  const hideNav = {
    opacity: "0",
    visibility: "hidden",
    transform: "translateX(-30px)"
  };

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  }

  // Scroll Parallax 

  const [ scroll, setScroll ] = useState(0);

  const scrollListener = () => {
    setScroll(window.scrollY);
    console.log(scroll);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener )

    return () => {
      window.removeEventListener('scroll', scrollListener )
    }
  }, [scroll])

  let idealabStyle = {
    transform: "translateY(" + scroll * .65 + "px)"
  }

  let forestStyle = {
    transform: "translateY(" + scroll * .5 + "px)"
  }

  let midGrassStyle = {
    transform: "translate3d(" + -scroll * .03 + "px, " + scroll * .5 +"px, 0px)"
  }

  let smallGrassStyle = {
    transform: "translate3d(" + scroll * .12 + "px, " + scroll * .65 +"px, 0px)"
  }

  let lowGrassStyle = {
    transform: "translateY(" + scroll * .6 + "px)"
  }

  let treeStyle = {
    transform: "translateY(" + scroll * .5 + "px)"
  }

  let gioStyle = {
    transform: "translate3d(" + -scroll * .12 + "px, " + scroll * .68 +"px, 0px)"
  }

  // Scroll-out effect

  useEffect(() => {
    ScrollOut({
      targets: '.quotes, .about_1, .about_2, .about_3, .about_4, .about_gio'
    });
  }, [])

  return (
    <div>
      <header>
        <nav className="navbar" style={ nav ?  showNav : hideNav }>
              <ul>
                  <li><span onClick={handleNav}>hide</span></li>
                  <li><a href="#home">interests</a></li>
                  <li><a href="#about">about</a></li>
                  <li><a href="#home">home</a></li>
              </ul>
          </nav>
          <div className="show-nav" style={ nav ?  hideNav : showNav }>
              <span onClick={handleNav}>show</span>
          </div>
          <div className="links">
            <ul>
              <li><a href="https://www.messenger.com/t/gio.mungcal" target="_blank" rel="noopener noreferrer"><img src={fb} alt="fb" /></a></li>
              <li><a href="https://github.com/giomungcal" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a></li>
              <li><a href="https://www.linkedin.com/in/giomungcal" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
            </ul>
          </div>
      </header>

      <div className="hero" id="home">
          <img className="lowgrass" src={lowgrass} alt="lowgrass" style={lowGrassStyle}/>
          <img className="smallgrass" src={smallgrass} alt="smallgrass" style={smallGrassStyle}/>
          <img className="tree" src={tree} alt="tree" style={treeStyle}/>
          <p className="gio" style={gioStyle}>gio's</p>
          <h1 className="idealab" style={idealabStyle}>idea <span>lab</span></h1>
          <img className="middlegrass" src={middlegrass} alt="middlegrass" style={midGrassStyle} />
          <img className="forest" src={forest} alt="forest" style={forestStyle}/>
          <a href="#about"><div className="spinner"></div></a>
      </div>

      <div className="about" id="about">
          <span className="quotes">"</span>
          <span className="about_1">I created this page as a way</span>
          <span className="about_2">to constantly showcase</span>
          <span className="about_3">my skills in web designing</span>
          <span className="about_4">and development.</span>
          <span className="about_gio">-gio mungcal</span>
       </div>
      
    </div>
  );
}

export default App;
