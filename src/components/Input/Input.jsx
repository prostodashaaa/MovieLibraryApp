import "./Input.css";

function Input({ placeholder, className }) {
  const cl = className ? " " + className : "";

  return (
    <div className="input-field">
      <div className={cl}>
        <input
          className="input-field__text"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
