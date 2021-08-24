import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import {faSyringe} from "@fortawesome/free-solid-svg-icons";

export default function Menu({
  changePic,
  growElementHandler,
  activeHandler,
  buttonDisplayHandler,
  carouselPositionHandler,
}) {
  return (
    <>
      <div class="menuContain center">
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
        <button
          onClick={() => {
            carouselPositionHandler("0%");
          }}
          class="menuButtons"
        >
          <FontAwesomeIcon
            style={{ display: buttonDisplayHandler() }}
            icon={faGlobeAmericas}
            size="2x"
          />
        </button>
        <button
          onClick={() => {
            carouselPositionHandler("100%");
          }}
          class="menuButtons"
        >
          <FontAwesomeIcon
            style={{ display: buttonDisplayHandler() }}
            icon={faNewspaper}
            size="2x"
          />
        </button>
        <button
          onClick={() => {
            carouselPositionHandler("200%");
          }}
          class="menuButtons"
        >
          <FontAwesomeIcon
            style={{ display: buttonDisplayHandler() }}
            icon={faSyringe}
            size="2x"
          />
        </button>
      </div>
    </>
  );
}
