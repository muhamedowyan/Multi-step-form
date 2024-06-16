import React, { useContext } from 'react';
import './App.css';
import GetPersonalInfo from './Steps/Step_1';
import SelectPlan from './Steps/Step_2.js';
import AddOns from './Steps/Step_3.js';
import Summary from './Steps/Step_4.js';
import SuccessMessage from './Steps/SuccessMessage.js';
import { FormContext } from './Steps/FormContext.js';

function App() {
  const { currentPage } = useContext(FormContext);
  const pages = [<GetPersonalInfo />, <SelectPlan />, <AddOns />, <Summary />,<SuccessMessage/>];

  return (
    <div className="App">
      <div className="container">
        {/* Sidebar start */}
        <div className="SideBar">
          <div className="step">
            <span className={currentPage === 0 ? "counter active" : "counter"}>1</span>
            <div className="stepInfo">
              <span className="stepNumber">Step 1</span>
              <span className="stepTitle">Your info</span>
            </div>
          </div>

          <div className="step">
            <span className={currentPage === 1 ? "counter active" : "counter"}>2</span>
            <div className="stepInfo">
              <span className="stepNumber">Step 2</span>
              <span className="stepTitle">Select plan</span>
            </div>
          </div>

          <div className="step">
            <span className={currentPage === 2 ? "counter active" : "counter"}>3</span>
            <div className="stepInfo">
              <span className="stepNumber">Step 3</span>
              <span className="stepTitle">Add-ons</span>
            </div>
          </div>

          <div className="step">
            <span className={currentPage === 3||currentPage>3 ? "counter active" : "counter"}>4</span>
            <div className="stepInfo">
              <span className="stepNumber">Step 4</span>
              <span className="stepTitle">Summary</span>
            </div>
          </div>
        </div>
        {/* Sidebar end */}

        {/* Render the current step here */}
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default App;
