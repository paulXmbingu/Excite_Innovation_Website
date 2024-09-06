import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.h1}> 404 </div>
      <div className={styles.p}> Our site is undergoing a transformation. </div>
      <div className={styles.br} > Please bear with us as we craft something extraordinary </div>
    </div>
  );
}
