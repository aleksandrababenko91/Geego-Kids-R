import React, { useRef } from "react";
import clsx from "clsx";
import "./InputSearch.css"; // Подключение обычного CSS

const InputSearch = ({ onChange, className, placeholder = "Haku sana", value }) => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    if (inputRef.current) {
      onChange({ target: { value: inputRef.current.value } });
    }
  };

  const handleClear = () => {
    onChange({ target: { value: "" } });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={clsx("wrapper", className)}>
      <input
        ref={inputRef}
        type="text"
        maxLength={300}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
      {value.length > 0 && (
        <button
          type="button"
          className={clsx("close", value.length > 0 && "show")}
          onClick={handleClear}
        >
          <img alt="Clear search" src="/image/close_black.svg" width={20} height={20} />
        </button>
      )}
      <button
        type="button"
        className="submit"
        onClick={handleSearch}
      >
        <img src="/image/search.svg" width={18} height={18} alt="Search" />
      </button>
    </div>
  );
};

export default InputSearch;
