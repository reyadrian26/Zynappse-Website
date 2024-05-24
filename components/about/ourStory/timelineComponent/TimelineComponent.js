import React, { useState, useEffect, useRef } from "react";
import style from "./TimelineComponent.module.scss"

const TimelineComponent = () => {
  const [animateIcons, setAnimateIcons] = useState(false);
  const [clickedIcon, setClickedIcon] = useState(false);
  
  const handleMouseEnter = () => {
    setAnimateIcons(true);
  };

  const handleIconClick = () => {
    setClickedIcon(true);
  };
  return (
    <>
      <div className="timeline-container">
        <div id="timeline" className={`${animateIcons ? 'animateBefore' : ""}`}>
          <div className="timeline-item">
            <div className= {`timeline-icon-left icon-1 ${clickedIcon ? 'animateAfterLeft' : ""}`} onMouseEnter={handleMouseEnter} onClick={handleIconClick}>2014</div>
            <div className= {`timeline-content ${clickedIcon ? 'animateTimelineContentLeft' : ""}`}> 
              <h2 className="timeline-header">LOREM IPSUM</h2>
              <p className="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="p">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className={`timeline-icon-right icon-2 ${animateIcons ? 'animateIcon2' : ""} ${clickedIcon ? 'animateAfterRight' : ""}`} onClick={handleIconClick}>2016</div>
            <div className={`timeline-content right ${clickedIcon ? 'animateTimelineContentRight' : ""}`}>
              <h2 className="timeline-header">LOREM IPSUM</h2>
              <p className="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="p">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className={`timeline-icon-left icon-3 ${animateIcons ? 'animateIcon3' : ""} ${clickedIcon ? 'animateAfterLeft' : ""}`} onClick={handleIconClick}>2017</div>
            <div className= {`timeline-content ${clickedIcon ? 'animateTimelineContentLeft' : ""} `}>
              <h2 className="timeline-header">LOREM IPSUM</h2>
              <p className="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="p">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className={`timeline-icon-right icon-4 ${animateIcons ? 'animateIcon4' : ""} ${clickedIcon ? 'animateAfterRight' : ""}`} onClick={handleIconClick}>2019</div>
            <div className={`timeline-content right ${clickedIcon ? 'animateTimelineContentRight' : ""}`}>
              <h2 className="timeline-header">LOREM IPSUM</h2>
              <p className="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="p">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p >
            </div>
          </div>

          <div className="timeline-item">
            <div className={`timeline-icon-left icon-5 ${animateIcons ? 'animateIcon5' : ""} ${clickedIcon ? 'animateAfterLeft' : ""}`} onClick={handleIconClick}>2020</div>
            <div className= {`timeline-content ${clickedIcon ? 'animateTimelineContentLeft' : ""}`}>
              <h2 className="timeline-header">LOREM IPSUM</h2>
              <p className="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="p">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className={`timeline-icon-right icon-6 ${animateIcons ? 'animateIcon6' : ""} ${clickedIcon ? 'animateAfterRight' : ""}`} onClick={handleIconClick}>2023</div>
            <div className={`timeline-content right ${clickedIcon ? 'animateTimelineContentRight' : ""}`}>
              <h2 className="timeline-header">LOREM IPSUM</h2>
              <p className="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="p">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p >
              <p className="p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineComponent;
