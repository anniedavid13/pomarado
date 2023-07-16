import React, { useState } from 'react';
import { UilRedo } from '@iconscout/react-unicons';

const Timer = () => {
  const [timer, setTimer] = useState('25:00');
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (time, button) => {
    setTimer(time);
    setActiveButton(button);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-3/5 w-3/5 flex flex-col justify-center items-center">
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 text-white rounded-full ${
              activeButton === 'Work' ? 'bg-white text-black ' : 'bg-transparent border-white border'
            }`}
            onClick={() => handleButtonClick('25:00', 'Work')}
          >
            Work
          </button>
          <button
            className={`px-4 py-2 text-white rounded-full ${
              activeButton === 'Short Break' ? 'bg-white text-black ' : 'bg-transparent border-white border'
            }`}
            onClick={() => handleButtonClick('5:00', 'Short Break')}
          >
            Short Break
          </button>
          <button
            className={`px-4 py-2 text-white rounded-full ${
              activeButton === 'Long Break' ? 'bg-white text-black ' : 'bg-transparent border-white border'
            }`}
            onClick={() => handleButtonClick('10:00', 'Long Break')}
          >
            Long Break
          </button>
        </div>
        <div className="text-9xl font-bold text-white">{timer}</div>
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2  border border-white bg-white text-black rounded-full hover:text-white hover:border-white hover:bg-transparent transition-colors duration-300">
            Start
          </button>
          <UilRedo className="w-9 h-9 text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Timer;
