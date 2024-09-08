import Head from 'next/head';
import styles from "./Home.module.css";

const HomePage = () => {
    return (
        <div className={styles.homePageWrap}>
            <Head>
                <title>Excite! Innovation Company</title>
                <meta name="description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
                <meta name="keywords" content="Digital Product Innovation, UIUX Research, Design, Software Engineering" />
                <meta property="og:title" content="Excite! Innovation Company" />
                <meta property="og:description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
                <meta property="og:image" content="/assets/ExciteLogo.svg" />
                <meta property="og:url" content="https://excite.company/" />
                <link rel="canonical" href="https://excite.company/" />
            </Head>
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
                <div className={styles.mediaSectionScrim}></div>
            </div>
            <div className={styles.detailsSection}>
                <div className={styles.pageDetails}>
                    <div className={styles.logo}>
                        <img
                            src="/assets/ExciteLogo.svg"
                            alt="Excite! Innovation Company Logo"
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
                        <div className={styles.cTAs}>
                            <div className={styles.socialMediaCTA}> Follow us on our socials </div>
                            <div className={styles.socialMediaIcons}>
                                Social Media Icons
                            </div>
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
