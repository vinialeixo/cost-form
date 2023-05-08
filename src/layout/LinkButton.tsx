import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

interface LinkButon {
  to: string;
  text: string;
}
function LinkButton({ to, text }: LinkButon) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}

export default LinkButton;
