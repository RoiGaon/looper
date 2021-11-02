import React from "react";
import { BsPauseCircleFill } from "react-icons/bs";

export const useAudio = (url) => {
  const [audio] = React.useState(new Audio(url));
  const [play, setPlay] = React.useState(false);

  const toggle = () => setPlay(!play);

  React.useEffect(() => {
    play ? audio.play() : audio.pause();
    audio.loop = true;
  }, [play, audio]);

  return [play, toggle, audio];
};

const KeyBoard = ({ freeze, url, icon, addToAudio, removeFromAudio }) => {
  const [play, toggle, audio] = useAudio(url);

  const set = () => {
    toggle();
    !play ? addToAudio(audio) : removeFromAudio(audio.src);
  };

  return (
    <button
      className="drum-pad clip"
      disabled={freeze ? true : false}
      onClick={set}
    >
      {play ? <BsPauseCircleFill /> : icon}
    </button>
  );
};

export default KeyBoard;