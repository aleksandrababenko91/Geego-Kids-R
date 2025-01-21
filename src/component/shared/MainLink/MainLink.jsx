import React from "react";
import clsx from "clsx";
import "./MainLink.css"; 
import linkTypes from "./constants";

const MainLink = ({
  url,
  name,
  children,
  type = linkTypes.DEFAULT,
  className,
  openInNewTab,
  ...rest
}) => {

  const isActive = (name) => {
    const pathname = window.location.pathname;
    if (pathname === "/" && name === "main") {
      return true;
    }
    return pathname.split("/").includes(name);
  };


  const handleClick = (event) => {
    if (type === linkTypes.HELP || type === linkTypes.DOCS || type === linkTypes.MODAL) {
      event.preventDefault();
      return;
    }
    if (url === "/contacts") {
      event.preventDefault();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const linkProps = {
    className: clsx(
      "link",
      `link--${type}`,
      isActive(name) && "active",

      className
    ),
    onClick: handleClick,
    ...rest,
  };

  if (openInNewTab) {
    linkProps.target = "_blank";
    linkProps.rel = "noopener noreferrer";
  }

  if (type === linkTypes.HELP || type === linkTypes.DOCS || type === linkTypes.MODAL) {
    return (
      <button {...linkProps}>
        {children}
      </button>
    );
  }

  return (
    <a href={url} {...linkProps}>
      {children}
    </a>
  );
};

export default MainLink;
