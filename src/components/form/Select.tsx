import styles from "./Select.module.css";

interface SelecttModuls {
  type: string;
  text: string;
  handleOnChange: string | any;
  name: string;
}
function Select({ type, text, name, handleOnChange }: SelecttModuls) {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}: </label>
      <select name={name}>
        <option>Selectione uma opcao</option>
      </select>
    </div>
  );
}

export default Select;
