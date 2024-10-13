import React from 'react';
import "./btn.css"

function btn() {
    return (
        <div className="btn4">
            <a href="">
                <button>
                    S T A R T
                    <div id="clip">
                        <div id="leftTop" class="corner"></div>
                        <div id="rightBottom" class="corner"></div>
                        <div id="rightTop" class="corner"></div>
                        <div id="leftBottom" class="corner"></div>
                    </div>
                    {/* <span id="rightArrow" class="arrow"></span>
                    <span id="leftArrow" class="arrow"></span> */}
                </button>
            </a>
        </div>
    )
}

export default btn