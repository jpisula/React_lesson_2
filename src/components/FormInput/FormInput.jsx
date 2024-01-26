const FormInput = ({ type, label, name, id }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} />
    </>
  );
};

export default FormInput;
