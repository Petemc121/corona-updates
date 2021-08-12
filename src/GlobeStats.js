import React from 'react'

export default function GlobeStats() {
    return (

     
                
<>
            <div id="pieChart" class="center">
                <svg class="progress-circle" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
                    <svg class="progress-circle" width="200px" height="200px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle class="progress-circle-back"
                            cx="100" cy="100" r="90" ></circle>
                    </svg>
                    <svg class="progress-circle" width="200px" height="200px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle class="progress-circle-mid"
                            cx="100" cy="100" r="70" ></circle>
                    </svg>
                    <circle class="progress-circle-prog"
                        cx="100" cy="100" r="80"></circle>
                </svg>
                </div>
                <div id="pieNumbers" class="center">
                <div class="textStats" data-progress="0"><p class="title">Recovery rate</p><p id="RR"></p></div>
                <div class="textStats" data-progress="0"><p class="title">Death rate</p><p id="DR"></p></div>
                </div>
</>
                )
}
