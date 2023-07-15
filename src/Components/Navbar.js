import React, { useState } from 'react';
import BackgroundChanger from './BackgroundChanger';
const Navbar = ({ onBackgroundChange, onRadioChange }) => {
  const [radioOption, setRadioOption] = useState('option1');

  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
    onRadioChange(event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gray-200">

      <div>
        <label className="mr-2">
          <input
            type="radio"
            value="option1"
            checked={radioOption === 'option1'}
            onChange={handleRadioChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={radioOption === 'option2'}
            onChange={handleRadioChange}
          />
          Option 2
        </label>
      </div>
      <BackgroundChanger onBackgroundChange={onBackgroundChange} />
    </div>
  );
};

export default Navbar;
