import styles from "./Input.module.css";

interface InputModuls {
  type: string;
  text: string;
  placeholder: string;
  handleOnChange: string | any;
  name: string;
}
function Input({ type, text, name, placeholder, handleOnChange }: InputModuls) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}: </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
