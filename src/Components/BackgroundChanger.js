import React, { useState } from 'react';
import Timer from './timer';
const BackgroundChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleBackgroundChange = (event) => {
    setBackgroundImage(event.target.value);
  };

  return (
    <div
      className="h-screen w-full flex flex-col justify-start items-end"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="mt-8 mr-8">
        <select
          className="p-2 bg-white"
          onChange={handleBackgroundChange}
          defaultValue=""
        >
          <option value="" disabled>
            Select a background
          </option>
          <option value="https://i.pinimg.com/originals/7d/07/a2/7d07a255678962d30d8717dcf5dbd266.gif">Image 1</option>
        <option value="https://i.pinimg.com/originals/05/f1/7d/05f17d6e87ad18f65940f896f4cf11a4.gif">Image 2</option>
        <option value="https://i.pinimg.com/originals/75/8f/ce/758fce66508ff38809b308e1cf329679.gif">Image 3</option>
        <option value="https://i.pinimg.com/originals/e0/8b/81/e08b81b6002a70fffa46136386310b13.gif">Image 4</option>
        <option value="https://i.pinimg.com/originals/91/1c/ce/911cce5aa7cd315e6cc5bd5e7edca55d.gif">Image 5</option>
        <option value="https://i.pinimg.com/originals/c6/63/51/c663519f69f1fae3c74aacf80a6ad6e2.gif">Image 6</option>
        </select>
      </div>
      <Timer />
    </div>
  );
};

export default BackgroundChanger;
