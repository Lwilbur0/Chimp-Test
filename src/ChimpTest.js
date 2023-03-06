// import React from 'react'
import React, { useEffect, useState } from "react"; 
import './ChimpTest.css';
import { createClient } from 'pexels';
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


export default function ChimpTest() {
  const client = createClient('jAv5LK8pT5QHPSP6yeXZouIgmkDe6qsEThcuCFarJepUVb0iPikKEcM8');
  const query = 'Monkey';
  var image = '';
  const numbers = Array.from({length: 20}, (_, i) => i + 1);
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  const uniqueNums = numbers.slice(0, 20);

  client.photos.search({ query, per_page: 30 }).then(photos => {
    try {
      console.log(photos.photos[0].src.original)
      image = `
        <img src="${photos.photos[uniqueNums[0]].src.original}" width="250" height="250" style= "position: absolute; top: 85px; left: 2%; border: 2px solid white;"/>
        <img src="${photos.photos[uniqueNums[1]].src.original}" width="250" height="250" style="position: absolute; top: 365px; left: 2%; border: 2px solid white;"/>
        <img src="${photos.photos[uniqueNums[2]].src.original}" width="250" height="250" style= "position: absolute; top: 85px; right: 2%; border: 2px solid white;"/>
        <img src="${photos.photos[uniqueNums[3]].src.original}" width="250" height="250" style="position: absolute; top: 365px; right: 2%; border: 2px solid white;"/>
      `;
      document.querySelector('#images').innerHTML = image;
    } catch (error) {
      console.error('Error:', error);
    }
  });
  const [monkeyMode, setMonkeyMode] = useState(false);

  const handleMonkeyModeClick = () => {
    setMonkeyMode(!monkeyMode);
  }
  return (
    <>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <header className="header">
      <h1 className="header-title">Chimp Test</h1>
      <nav className="header-nav">
        <a onClick={handleMonkeyModeClick}>{monkeyMode ? 'Monkey Mode: ON' : 'Monkey Mode: OFF'}</a>
        {/* <a href="#services">Services</a>
        <a href="#contact">Contact</a> */}
      </nav>
    </header>
    <div className="board"></div>
    {monkeyMode && (
    <div id = "images">
      {/* <img src = "https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg" width = "200" height = "200"></img> */}
    </div>
    )}
    <div className="description">
        <div className="video-block">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Zz7ShiQqLQg?start=14" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="description-block">
          <div className ="card">
          <h2>Chimpanzee Ability</h2>
          <hr/>
          <p>Chimpanzees have the innate ability to memorize patterns much faster than any human can. The following video displays the true dominance of chimpanzee mental capabilities. These chimps are capable of completing each round of the chimp test in seconds, failing only less than 10% of the time.</p>
          </div>
        </div>
      </div>
    </>
  )
}
