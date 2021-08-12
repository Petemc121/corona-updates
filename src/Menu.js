import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";

export default function Menu({
  changePic,
  growElementHandler,
  activeHandler,
  buttonDisplayHandler,
}) {
  return (
    <>
      <div class="center">
        <button onClick={activeHandler} class="button button-expand">
          <img
            id="aliveCorona"
            style={{ transform: growElementHandler() }}
            src={changePic()}
            alt=""
          ></img>
        </button>
      </div>
      <div class="center">
        <button class="menuButtons">
          <FontAwesomeIcon
            style={{ display: buttonDisplayHandler() }}
            icon={faGlobeAmericas}
            size="3x"
          />
        </button>
        <button class="menuButtons">
          <FontAwesomeIcon
            style={{ display: buttonDisplayHandler() }}
            icon={faNewspaper}
            size="3x"
          />
        </button>
        <button class="menuButtons">
          <FontAwesomeIcon
            style={{ display: buttonDisplayHandler() }}
            icon={faSignal}
            size="3x"
          />
        </button>
      </div>
    </>
  );
}
