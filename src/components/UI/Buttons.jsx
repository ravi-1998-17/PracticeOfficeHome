import "./Buttons.css";

const Buttons = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Buttons;
