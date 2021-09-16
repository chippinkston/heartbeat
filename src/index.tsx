// Base Requirements
import React from 'react';
import ReactDOM from 'react-dom';

// Global styles
import './index.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

// Project Code
import FetalDisplay from "./Charts/FetalDisplay";
import MotherDisplay from "./Charts/MotherDisplay";
import reportWebVitals from './reportWebVitals';
import FetalInputs from "./Fetal/FetalInputs";


ReactDOM.render(
    <React.StrictMode>
        <FetalDisplay />
        <MotherDisplay />
    </React.StrictMode>,
    document.getElementById('charts')
);

ReactDOM.render(
   <React.StrictMode>
        <FetalInputs />
  </React.StrictMode>,
  document.getElementById('appControls')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
