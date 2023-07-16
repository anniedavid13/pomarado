import React, { useState } from 'react';
import audio from '../audio/rain2.wav';

const RainSounds = () => {
  const [isRainSoundsOn, setIsRainSoundsOn] = useState(false);
  const [volume, setVolume] = useState(50);

  const handleRainSoundsToggle = () => {
    setIsRainSoundsOn(!isRainSoundsOn);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const audioRef = React.useRef(null);

  return (
    <div>
      <label htmlFor="rainSoundsToggle" className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <br />
        <input
          type="checkbox"
          id="rainSoundsToggle"
          className="sr-only"
          checked={isRainSoundsOn}
          onChange={handleRainSoundsToggle}
        />
        <span className="label flex items-center text-sm font-medium text-white">
          Off
        </span>
        <span className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full bg-black p-1 duration-200 ${isRainSoundsOn ? 'bg-gray-500' : ''}`}>
          <span className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isRainSoundsOn ? 'transform translate-x-[32px]' : ''}`}></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-white">
          On
        </span>
      </label>
      {isRainSoundsOn && (
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="sliderVolume"
          />
          <audio ref={audioRef} src={audio} autoPlay loop />
        </div>
      )}
    </div>
  );
};

export default RainSounds;
