import React from 'react'
import "./Timeline.css";

function TimeLine() {
    return (
        <div className="timeline__container">
            <div className="timeline__buttons__container">
                <div className="timeline__button">LIVE</div>
                <div className="timeline__button">1D</div>
                <div className="timeline__button active">1W</div>
                <div className="timeline__button">3M</div>
                <div className="timeline__button">1Y</div>
                <div className="timeline__button">ALL</div>                                                                                
            </div>
        </div>
    )
}

export default TimeLine
