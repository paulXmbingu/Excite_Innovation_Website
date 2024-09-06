import styles from "./page.module.css";
import { BrandLogoHor } from "./BrandLogo";

export default function Home() {
  return (
    <div className={styles.page}>
      <BrandLogoHor height="120px" />
    </div>
  );
}
