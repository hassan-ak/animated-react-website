// Imports
// React Imports
import React, { useRef } from 'react';
// Images Imports
import adidas from './adidas.png';
// Styles Imports
import './App.css';

// App Function
function App() {
  // Define useRef variables
  const card = useRef(null);

  // Function for moving animation when curser moving on the container
  function moveAnimations(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }

  // What to Display on the page
  return (
    // Div for enclosing the complete page
    <div className="container" 
         onMouseMove={(e)=>{moveAnimations(e)}}
    >
      {/* Div for card (actual content of the page) */}
      <div ref = {card} className="card">
        {/* Div For Displaying Sneeker */}
        <div className="sneaker">
          {/* A circle in the background of the sneaker */}
          <div className="circle"></div>
          {/* Sneakers image */}
          <img src={adidas} alt="adidas"/>
        </div>
        {/* div for info of the sneakers */}
        <div className="info">
          {/* Title or name of the item */}
          <h1>Adidas ZX</h1>
          {/* Item Description */}
          <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
          {/* Div for displaying different buttons showing different sizes */}
          <div className="sizes">
                <button>39</button>
                <button>40</button>
                <button className="active">42</button>
                <button>44</button>
          </div>
          {/* Div for purchase button */}
          <div className="purchase">
                <button>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
