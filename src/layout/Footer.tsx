import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <AiFillFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <AiFillLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
