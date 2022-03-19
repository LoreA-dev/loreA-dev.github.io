import React from "react";

function Svgs() {
    return(
        <div id="wavesContainer">
            <svg className="wave" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M-2.54,147.53 C391.92,169.23 128.94,-22.20 569.13,17.27 L501.41,-3.45 L-0.27,-6.41 Z"
                    style={{"stroke": "none", "fill": "#fff1f0"}}></path>
            </svg>
            <div className="circleDecoration">
                <svg height="150" width="150">
                    <circle cx="100" cy="100" r="80" stroke="green" stroke-width="0" fill="#fff1f0" />
                </svg> 
            </div>
        </div>
    )
}

export default Svgs;