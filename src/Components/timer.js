import React, { useState } from 'react';
import { UilRedo } from '@iconscout/react-unicons';

const Timer = () => {
  const [timer, setTimer] = useState('25:00');
  const [activeButton, setActiveButton] = useState('Work'); // Set 'Work' as the initial active button

  const handleButtonClick = (time, button) => {
    setTimer(time);
    setActiveButton(button);
  };
//change white to stone-300
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-3/5 w-3/5 flex flex-col justify-center items-center">
        <div className="flex gap-12 mb-12"> {/* Increase the gap from 8 to 12 */}
          <button
            className={`px-6 py-3 text-white rounded-full ${
              activeButton === 'Work' ? 'bg-white text-black ' : 'bg-transparent border-white border'
            }`}
            onClick={() => handleButtonClick('25:00', 'Work')}
            style={{ transform: 'scale(1.3)' }}
          >
            Work
          </button>
          <button
            className={`px-6 py-3 text-white rounded-full ${
              activeButton === 'Short Break' ? 'bg-white text-black ' : 'bg-transparent border-white border'
            }`}
            onClick={() => handleButtonClick('5:00', 'Short Break')}
            style={{ transform: 'scale(1.3)' }}
          >
            Short Break
          </button>
          <button
            className={`px-6 py-3 text-white rounded-full ${
              activeButton === 'Long Break' ? 'bg-white text-black' : 'bg-transparent border-white border'
            }`}
            onClick={() => handleButtonClick('10:00', 'Long Break')}
            style={{ transform: 'scale(1.3)' }}
          >
            Long Break
          </button>
        </div>
        <div className="text-9xl font-bold text-stone-300" style={{ transform: 'scale(1.7)' }}> {/* Increase the size by 50% */}
          {timer}
        </div>
        <div className="flex gap-12 mt-12"> {/* Increase the gap from 8 to 12 */}
          <button
            className="px-6 py-3 border border-white bg-white text-black rounded-full hover:text-white hover:border-white hover:bg-transparent transition-colors duration-300"
            style={{ transform: 'scale(1.3)' }}
          >
            Start
          </button>
          <UilRedo className="w-12 h-12 text-white cursor-pointer" style={{ transform: 'scale(1.3)' }} /> {/* Increase the size by 30% */}
        </div>
      </div>
    </div>
  );
};

export default Timer;
