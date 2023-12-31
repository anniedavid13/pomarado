import React, { useState, useEffect } from 'react';
import { UilRedo } from '@iconscout/react-unicons';

const Timer = () => {
  const [timer, setTimer] = useState('25:00');
  const [activeButton, setActiveButton] = useState('Work');
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let countdownInterval;

    if (isRunning && !isPaused) {
      const totalTime = parseInt(timer.split(':')[0]) * 60 + parseInt(timer.split(':')[1]);
      let remainingTime = totalTime;

      countdownInterval = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
        const seconds = (remainingTime % 60).toString().padStart(2, '0');
        setTimer(`${minutes}:${seconds}`);

        if (remainingTime === 0) {
          setIsRunning(false);
        } else {
          remainingTime--;
        }
      }, 800);
    }

    return () => clearInterval(countdownInterval);
  }, [isRunning, isPaused, timer]);

  const handleButtonClick = (button) => {
    let time;
    if (button === 'Work') {
      time = '25:00';
    } else if (button === 'Short Break') {
      time = '05:00';
    } else if (button === 'Long Break') {
      time = '10:00';
    }
    setTimer(time);
    setActiveButton(button);
    setIsRunning(false);
    setIsPaused(false);
  };

  const handleStartButtonClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsPaused(false);
    } else {
      setIsPaused(!isPaused);
    }
  };

  const handleResetButtonClick = () => {
    let time;
    if (activeButton === 'Work') {
      time = '25:00';
    } else if (activeButton === 'Short Break') {
      time = '05:00';
    } else if (activeButton === 'Long Break') {
      time = '10:00';
    }
    setTimer(time);
    setIsRunning(false);
    setIsPaused(false);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-3/5 w-3/5 flex flex-col justify-center items-center">
        <div className="flex gap-12 mb-12">
        <button
            className={`px-6 py-3 rounded-full ${
              activeButton === 'Work' ? 'bg-white text-black' : 'bg-transparent text-white border-white border'
            }`}
            onClick={() => handleButtonClick('Work')}
            style={{ transform: 'scale(1.3)' }}
          >
            Work
          </button>
          <button
            className={`px-6 py-3 rounded-full ${
              activeButton === 'Short Break' ? 'bg-white text-black' : 'bg-transparent text-white border-white border'
            }`}
            onClick={() => handleButtonClick('Short Break')}
            style={{ transform: 'scale(1.3)' }}
          >
            Short Break
          </button>
          <button
            className={`px-6 py-3  rounded-full ${
              activeButton === 'Long Break' ? 'bg-white text-black' : 'bg-transparent text-white border-white border'
            }`}
            onClick={() => handleButtonClick('Long Break')}
            style={{ transform: 'scale(1.3)' }}
          >
            Long Break
          </button>
        </div>
        <div className="text-9xl font-bold text-stone-300" style={{ transform: 'scale(1.7)' }}>
          {timer}
        </div>
        <div className="flex gap-12 mt-12">
        <button
  className={`px-6 py-3 border ${
    isRunning ? 'text-black bg-white hover:text-black hover:bg-transparent' : 'hover:text-black hover:bg-white'
  } ${
    isRunning && isPaused ? 'text-black bg-white' : 'text-black bg-white hover:text-black hover:bg-transparent'
  } rounded-full transition-colors duration-300 ${
    isRunning && isPaused ? 'hover:text-black hover:bg-transparent' : 'hover:text-black hover:bg-white'
  }`}
  onClick={handleStartButtonClick}
  style={{ transform: 'scale(1.3)' }}
>
  {isRunning ? (isPaused ? 'Resume' : 'Pause') : 'Start'}
</button>




          <UilRedo
            className={`w-12 h-12 text-white cursor-pointer transition-colors duration-300 ${
              isRunning ? 'opacity-80 ' : 'hover:text-white'
            }`}
            style={{ transform: 'scale(1.3)' }}
            onClick={handleResetButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
