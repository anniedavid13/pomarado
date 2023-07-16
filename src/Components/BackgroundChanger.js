import React, { useState } from 'react';
import Timer from './timer';
import RainSounds from './RainSounds';

const BackgroundChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    'https://i.pinimg.com/originals/c6/63/51/c663519f69f1fae3c74aacf80a6ad6e2.gif'
  );

  const handleBackgroundChange = (event) => {
    setBackgroundImage(event.target.value);
  };

  return (
    <div
      className="h-screen w-full flex flex-col justify-start items-end"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
    
<div className="mt-8 mr-8">
<h5 className='text-white text-sm text-center'>Change Theme</h5>
  <select
    className="p-2 bg-black bg-opacity-50 text-white rounded-lg"
    onChange={handleBackgroundChange}
    defaultValue="https://i.pinimg.com/originals/c6/63/51/c663519f69f1fae3c74aacf80a6ad6e2.gif"
  >
    <option value="" disabled>
      Select a background
    </option>
    <option value="https://i.pinimg.com/originals/f6/49/63/f64963406a06807126a176734bc741a7.gif">Lofi Blue Room</option>
    <option value="https://i.pinimg.com/originals/05/f1/7d/05f17d6e87ad18f65940f896f4cf11a4.gif">Pixel WorkSpace</option>
    <option value="https://i.pinimg.com/originals/3e/fc/f1/3efcf1e9a5f2c3354714699b321221b4.gif">Coding Setup</option>
    <option value="https://i.pinimg.com/originals/65/29/c3/6529c3147d4e79e3722bf3c600f591ae.gif">Rain</option>
    <option value="https://i.pinimg.com/originals/1a/f6/89/1af689d42bdb7686df444f22925f9e89.gif">Coffee Shop</option>
    <option value="https://i.pinimg.com/originals/c6/63/51/c663519f69f1fae3c74aacf80a6ad6e2.gif">In the Car</option>
    <option value="https://i.pinimg.com/originals/99/79/28/997928c735a38cec76c3ba48c5604f1e.gif">Cozy Room</option>
    <option value="https://i.pinimg.com/originals/ac/f4/e5/acf4e57bd778d573200d48ff9d52f5ae.gif">Curbside</option>
  </select>
</div>

      <div className='p-5'>
      <h5 className='text-white text-sm text-center'>Rain Sounds</h5>
      <RainSounds />
      </div>
      <Timer />
    </div>
  );
};

export default BackgroundChanger;
