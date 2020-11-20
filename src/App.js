// Imports
// React Imports
import React from 'react';
// Images Imports
import adidas from './adidas.png';
// Styles Imports
import './App.css';

// App Function
function App() {

  // What to Display on the page
  return (
    // Div for enclosing the complete page
    <div>
      {/* Div for card (actual content of the page) */}
      <div>
        {/* Div For Displaying Sneeker */}
        <div>
          {/* A circle in the background of the sneaker */}
          <div></div>
          {/* Sneakers image */}
          <img src={adidas} alt="adidas"/>
        </div>
        {/* div for info of the sneakers */}
        <div>
          {/* Title or name of the item */}
          <h1>Adidas ZX</h1>
          {/* Item Description */}
          <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
          {/* Div for displaying different buttons showing different sizes */}
          <div>
                <button>39</button>
                <button>40</button>
                <button>42</button>
                <button>44</button>
          </div>
          {/* Div for purchase button */}
          <div>
                <button>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
