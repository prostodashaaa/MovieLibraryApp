import "./CardButton.css";

function CardButton({ children }) {
  return <div role="button" tabIndex="0" className="card-button">{children}</div>;
}

export default CardButton;
