import React from "react";
// Styles
import "./index.css";
// Data
import { keys } from "./dummy-data";
// Components
import KeyBoard from "./components/KeyBoard";

const App = () => {
  const [playingAudio, setPlayingAudio] = React.useState([]);
  const [freeze, setFreeze] = React.useState(false);

  React.useEffect(() => {
    playingAudio.forEach((audio) => (audio.currentTime = 0));
  }, [playingAudio]);

  function addToAudio(audio) {
    setPlayingAudio((prev) => [...prev, audio]);
  }

  function removeFromAudio(src) {
    const allPlayingAudios = playingAudio.filter((audio) => audio.src !== src);
    setPlayingAudio(() => [...allPlayingAudios]);
  }

  function stopAudio() {
    playingAudio.forEach((audio) => audio.pause());
    setFreeze(!freeze);
    setPlayingAudio([]);
  }

  return (
    <div id="drum-machine">
      <div className="wrapper">
        <div className="keyboard">
          {keys.map((key) => (
            <KeyBoard
              key={key.id}
              url={key.url}
              icon={key.icon}
              id={key.id}
              addToAudio={addToAudio}
              removeFromAudio={removeFromAudio}
              freeze={freeze}
            />
          ))}
        </div>
        <div className="controle">
          <h2>The New Looper!</h2>
          <label className="switch">
            <input type="checkbox" id="togBtn" onChange={stopAudio} />
            <div className="slider round">
              <span className="on">ON</span>
              <span className="off">OFF</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
