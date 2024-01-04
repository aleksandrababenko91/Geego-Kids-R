import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./AtNurseries.css";
import "../index.css";

const AtNurseries = () => {
  return (
    <div className="AtNurseries">
      <Link to="/Toddlers">
        <Button
          imgUrl="/image/ikoni_tenavat.png"
          name="TODDLERS"
          bgColor2="rgb(235, 106, 57 / 30%)"
          bgColor="#EB6A39"
          description="Get kindergarten-age children moving and learning new skills."
        />
      </Link>
    </div>
  );
};

export default AtNurseries;
