import styles from "./Home.modules.css"

const HomePage = () => {
    return(
        <div className={styles.homePageWrap}>
            <div className={styles.mediaSection}>
                Media Section
            </div>
            <div className={styles.detailsSection}>
                Detail Section
            </div>
        </div>
    );
};

export default HomePage;
