import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleBackgroundChange = (event) => {
    setBackgroundImage(event.target.value);
  };

  return (
    <div className={`bg-cover bg-center bg-${backgroundImage}`}>
      <select
        className="p-2 bg-white"
        onChange={handleBackgroundChange}
        defaultValue=""
      >
        <option value="" disabled>
          Select a background
        </option>
        <option value="image1.jpg">Image 1</option>
        <option value="image2.jpg">Image 2</option>
        <option value="image3.jpg">Image 3</option>
      </select>
    </div>
  );
};

export default BackgroundChanger;
