import styles from "./Select.module.css";

interface SelecttProps {
  text: string;
  name: string;
  options: { id: string; name: string }[];
}
function Select({ options, text, name }: SelecttProps) {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}: </label>
      <select name={name}>
        <option>Selectione uma opcao</option>
        {options.map((option) => {
          return (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ); //value={option.id} vai monitorar no backend
        })}
      </select>
    </div>
  );
}

export default Select;
