const Field = (props) => {
  const { id, placeholder, type = "text" } = props;

  return <input type={type} id={id} placeholder={placeholder} />;
};

export default Field;
