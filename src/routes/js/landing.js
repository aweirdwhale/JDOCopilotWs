import React, { useEffect } from 'react';
import '../css/App.css';
import ReactDOM from "react-dom";
import Cloading from './component.loading';
import '../css/responsive.css';
const delay = ms => new Promise(res => setTimeout(res, ms));

export default function Landing() {
  const [splash, setSplash] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,?;.:/!@#$%^&*()_+<>&é~#'{([-|è`_ç^à@)]=}";

  const splashes = [
    "Alan Turing il est grave surcoté",
    "On est un peu mégalos mais ne vous inquiétez pas",
    "Kaneki sait faire du bon café !",
    "He had a vague sense that trees gave birth to dinosaurs",
    "HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  ]

  function randomSplash() {
    setSplash(Math.floor(Math.random() * splashes.length))
  }

  useEffect(() => {
    
    delay(2000)
    setLoading(false)



    randomSplash();

    ReactDOM.findDOMNode(document.getElementById("title")).onmouseover = event => {
    
      let iterations = 0;
      
        const interval = setInterval(() => {
          event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
              if(index < iterations) {
                return event.target.dataset.value[index];
              }
      
              return letters[Math.floor(Math.random() * 67)]
            })
            .join("");
      
          if(iterations >= event.target.dataset.value.length){
            clearInterval(interval);
          }
      
          iterations += 1 / 3;
        }, 45);
      }

  }, [])

  
    return (
      <div className="Container">
        <div className="landingPage">
          <div className='buttons'>
            <a href='./about' className='button'>About</a>
            <a href='./work' className='button'>Work</a>
          </div>
          <h3 id="title" data-value="ALBATROSS">ALBATROSS</h3>
          <p id="splash">{splashes[splash]}</p>
        </div>
      </div>
    );
  }
