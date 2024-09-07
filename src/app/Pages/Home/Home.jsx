import styles from "./Home.modules.css"

const HomePage = () => {
    return(
        <div className={styles.homePageWrap}>
            <div className={styles.mediaSection}>
                <video autoPlay muted loop className={styles.video}>
                    <source src="https://res.cloudinary.com/excit3/video/upload/v1725643817/Excite%20Company%20Website/Next-Gen_Fintech_and_Banking_Products_Showreel_2023_by_Financial_UX_Design_Agency_UXDA_hrm7d3.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.detailsSection}> Details Section </div>
        </div>
    );
};

export default HomePage;
