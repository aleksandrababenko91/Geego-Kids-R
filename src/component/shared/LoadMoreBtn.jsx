import React from "react";
import "./LoadMoreBtn.css"; 

const LoadMore = ({ onClick, className, disabled, text = "Load more" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`} 
      disabled={disabled}
      type="button"
    >
{text}
    </button>
  );
};

export default LoadMore;
