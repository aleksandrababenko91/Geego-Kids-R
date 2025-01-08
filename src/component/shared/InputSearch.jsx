import clsx from "clsx";
import { useRef } from "react";
import "./InputSearch.css"; 



const InputSearch = ({ onChange, className, placeholder = "Haku sana", value }) => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    onChange({ target: { value: inputRef.current.value } });
  };

  const handleClear = () => {
    onChange({ target: { value: "" } }); 
    inputRef.current.focus();
  };

  return (
    <div className={clsx("wrapper-input", className)}>
      <input
        ref={inputRef}
        type="text"
        maxLength={300}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
      />
      <button
        type="button"
        className={clsx("close", value.length > 0 && "show")}
        onClick={handleClear}
      >
        <img alt="close btn image" src="image/close_black.svg" width={20} height={20} />
      </button>
      <button
        onClick={handleSearch}
        type="button"
        className="submit"
      >
        <img src="image/search.svg" width={18} height={18} alt="search btn" />
      </button>
    </div>
  );
};

export default InputSearch;
