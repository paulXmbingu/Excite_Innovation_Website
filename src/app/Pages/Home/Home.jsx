import Head from 'next/head';
import styles from "./Home.module.css";
import SocialButton from '@/app/Components/Shared/Buttons/Buttons';

const HomePage = () => {
    return (
        <div className={styles.homePageWrap}>
            <Head>
                <title>Excite! Innovation Company</title>
                <meta name="description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
                <meta name="keywords" content="Digital Product Innovation, UIUX Research, Design, Software Engineering" />
                <meta property="og:title" content="Excite! Innovation Company" />
                <meta property="og:description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
                <meta property="og:image" content="https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg" />
                <meta property="og:url" content="https://excite.company/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Excite! Innovation Company" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Excite! Innovation Company" />
                <meta name="twitter:description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
                <meta name="twitter:image" content="https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg" />
                <meta name="twitter:site" content="@ExciteCompany" />
                <meta name="twitter:creator" content="@ExciteCompany" />
                <meta property="fb:app_id" content="Excite.Company" />
                <link rel="canonical" href="https://excite.company/" />
            </Head>
            <div className={styles.mediaSection}>
                <video 
                    autoPlay
                    playsInline
                    preload='auto'
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
                        <img
                            src="/assets/ExciteLogo.svg"
                            alt="Excite! Innovation Company Logo"
                            className={styles.logo}
                        />
                    <div className={styles.textCTA}>
                        <div className={styles.subTextHeroText}> 
                            <div className={styles.subText}>
                                Premier Digital Product Innovation Company Specializing in
                            </div>
                            <div className={styles.heroText}>
                                UIUX Research, Design & Software Engineering
                            </div>
                        </div>
                        <div className={styles.cTAs}>
                            <div className={styles.socialMediaCTA}> Follow us on our socials </div>
                            <div className={styles.socialMediaIcons}>
                                <SocialButton socialIcon="/icons/LinkedIn.svg" link={`https://www.linkedin.com/company/excitecompany`}/>
                                <SocialButton socialIcon="/icons/Instagram.svg" link={`https://www.instagram.com/ExciteCompany/`} />
                                <SocialButton socialIcon="/icons/Dribbble.svg" link={`https://dribbble.com/ExciteCompany`} />
                                <SocialButton socialIcon="/icons/GitHub.svg" link={`https://github.com/Excite-Innovation-Company`} />
                                <SocialButton socialIcon="/icons/X.svg" link={`https://twitter.com/ExciteCompany`} />
                                <SocialButton socialIcon="/icons/YouTube.svg" link={`https://www.youtube.com/@ExciteCompany`} />
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.legalFinePrint}>
                        © 2010 - 2024 Excite! Innovation Company. Other IPs belong to their respective owners.
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
