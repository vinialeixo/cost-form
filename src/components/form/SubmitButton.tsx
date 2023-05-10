import styles from "./SubmitButton.module.css";

interface ButtonModels {
  text: string;
}
function SubmitButton({ text }: ButtonModels) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
