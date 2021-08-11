import React from 'react'
import aliveCorona from "./alive-corona.png";
import deadCorona from "./dead-corona.png";


export default function Menu({changePic, growElementHandler, activeHandler}) {
    return (
        <div class="center">
            <button onClick={activeHandler} class="button button-expand">
                <img id="aliveCorona" onClick={growElementHandler}  src={changePic()}></img>
            </button>
        </div>
    )
}
