const Button = (props) => {
  const { className, type = "button", name, onClickTask } = props;

  return (
    <button className={className} type={type} onClick={onClickTask}>
      {name}
    </button>
  );
};

export default Button;
