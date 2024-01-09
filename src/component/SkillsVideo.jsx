import React from 'react';
import "./Video.css";

const SkillsVideo = (props) => {
    return (props.trigger) ?
    (<div className="Video" style={{ display: props.display }}>
        <div className="dummy-block"></div>
        <video controls loop> {/* Added loop attribute here */}
          <source src={props.video} type="video/mp4" />
        </video>
        <div>
          <button 
              className="closeButton" 
              onClick={() => props.setTrigger(false)}>SULJE
          </button>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    ) : ("");
};

export default SkillsVideo;
