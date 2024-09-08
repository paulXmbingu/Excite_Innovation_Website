import styles from "./Home.module.css";

const HomePage = () => {
    return (
        <div className={styles.homePageWrap}>
            <div className={styles.mediaSection}>
                <video 
                    autoPlay 
                    muted
                    loop
                    height="100%"
                    className={styles.media}
                >
                    <source
                        src="https://res.cloudinary.com/excit3/video/upload/v1725643817/Excite%20Company%20Website/Next-Gen_Fintech_and_Banking_Products_Showreel_2023_by_Financial_UX_Design_Agency_UXDA_hrm7d3.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className={styles.detailsSection}>
                <div className={styles.pageDetails}>
                    <div>
                        <img
                            src="/assets/ExciteLogo.svg"
                            alt="Excite! Innovation Company Logo"
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.textCTA}>
                        <div className={styles.subTextHeroText}> 
                            <div className={styles.subText}>
                                Premier Digital Product Innovation Company that Specializes in
                            </div>
                            <div className={styles.heroText}>
                                UIUX Research, Design & Software Engineering
                            </div>
                        </div>
                        <div>
                            CTAs
                        </div>
                    </div>
                    <div className={styles.legalFinePrint}>
                        © 2010 - 2024 Excite! Innovation Company. Other IPs belong to their respective owners.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
