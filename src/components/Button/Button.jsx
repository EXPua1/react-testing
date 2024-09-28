const Button = ({ btnName, toggleModal }) => {
  return (
    <>
      <button onClick={toggleModal} type="button">
        {btnName}
      </button>
    </>
  );
};

export default Button;
