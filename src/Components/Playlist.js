import React from 'react';

const PlaylistEmbed = () => {
  return (
    <div
      className="fixed bottom-0 left-0 rounded-lg p-2"
      style={{ borderRadius: '12px', width: '400px', height: '200px' }}
    >
      <iframe
        src="https://open.spotify.com/embed/playlist/0ffnLxCftwLzmXDO7DJEXc?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default PlaylistEmbed;
