/**
 *                Cities List
 * Actions to take:
 * - When start the app should load the cities from json file
 * - Add new city name from a textfield
 * - Delete city name when you click the name
 * - Validate no repeat city names and display an error message
 * - The way to call JSON with axios is:
 *      axios.get('cities.json')
 *
 * Nice to have:
 *
 * Filter the cities by name
 * Unit tests
 */

import "./styles.css";
import React, { useState } from "react";
// import axios from "axios";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div>
          <input type="text" placeholder="text a city name" />
          <button>Add</button>
        </div>
        <div className="filter">
          <input type="text" placeholder="filter by name" />
        </div>
      </div>
      <hr />
      {/* cities list here */}
    </div>
  );
};

export default App;
