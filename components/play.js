import { useState, useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

const Player2 = ({ src }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoRef.current) {
      const newPlayer = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        sources: [{ src }],
      });

      setPlayer(newPlayer);
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src]);

  useEffect(() => {
    if (player) {
      player.on('play', () => {
        console.log('Playing');
      });

      player.on('pause', () => {
        console.log('Paused');
      });

      player.on('timeupdate', () => {
        console.log('Current time:', player.currentTime());
      });
    }
  }, [player]);

  return (
    <div style={{ width: '400px', height: '250px' }}>
    <video ref={videoRef} className="video-js vjs-default-skin" style={{ borderRadius: '5px',width: '400px', height: '250px' }} />
  </div>
  
  
  );
};

export default Player2;
