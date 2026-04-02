import React from "react";

function Log({ logs }) {
  return (
    <section id="log">
      <ul>
        {logs.map((log, index) => (
          <li
            key={index}
            className={`log--${log.isPlayer ? "player" : "monster"} ${
              log.isDamage ? "log--damage" : "log--heal"
            }`}
          >
            {log.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Log;