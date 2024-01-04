import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./AtSchool.css";

const AtSchool = () => {
  return (
    <div className="AtSchool">
        <Link to="/Challenges">
          <Button
            imgUrl="/image/ikoni_haasteet@3x.png"
            name="CHALLENGES"
            bgColor="#6B377C"
            bgColor2="rgb(124 54 147 / 30%)"
            description="Encourage school-age children to test the skills and find out their limits."
          />
        </Link>        
        <Link to="/Skills">
          <Button
            imgUrl="/image/ikoni_koulut.png"
            name="SKILLS"
            bgColor="#0074AC"
            bgColor2="rgb(31 130 178 / 30%)"
            description="Teach school-age children basic physical and motor skills."
          />
        </Link>
    </div>
  );
};

export default AtSchool;
