import React from 'react';
import BackgroundChanger from './Components/BackgroundChanger';
import PlaylistEmbed from './Components/Playlist';
const App = () => {
  return (
    <div className="h-screen flex justify-center items-center">
     <BackgroundChanger />
     <PlaylistEmbed />
    </div>
  );
};

export default App;
