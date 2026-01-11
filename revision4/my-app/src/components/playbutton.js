import "./playbutton.css";
import { useState } from "react";
function PLayButton({ message, children, onClick, onPlay }) {
  
  console.log('render playing');
  const [Playing,setPlaying] = useState(false); 
  function handleClick(e) {
    console.log(e);
    e.stopPropagation()
    e.preventDefault()
    if (Playing) onPlay();
    else onClick();

    setPlaying(!Playing);
  }
  return (
    <button onClick={handleClick}>
      {children} : {Playing ? "▶️" : "⏸️"}
    </button>
  );
}

export default PLayButton;
