import React from "react";
import "./Emotes.css";

function Emotes() {
  const emojis = [
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "☺️",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
  ];

  function handleChange(e) {
    console.log("hovers");
    e.currentTarget = emojis[Math.floor(Math.random() * emojis.length)];
  }

  return (
    <button onMouseOver={handleChange} id="emoji">
      😀
    </button>
  );
}

export default Emotes;
