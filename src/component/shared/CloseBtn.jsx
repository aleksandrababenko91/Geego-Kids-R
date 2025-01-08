import './CloseBtn.css';



export default function CloseButton({ ariaLabel, onClick, className }) {
  return <button 
    type='button' 
    aria-label={ariaLabel} 
    onClick={onClick} 
    className="btn">
      <img alt="close" src="/image/close_black" width={40} height={40} />
  </button>
}