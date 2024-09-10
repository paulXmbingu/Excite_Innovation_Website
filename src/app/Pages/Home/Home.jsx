import styles from "./Home.module.css";
import SocialButton from '@/app/Components/Shared/Buttons/Buttons';

export const metadata = {
  title: 'Excite! Innovation Company',
  description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
  keywords: 'Digital Product Innovation, UIUX Research, Design, Software Engineering',
  openGraph: {
    title: 'Excite! Innovation Company',
    description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    images: [
      {
        url: 'https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg',
      },
    ],
    url: 'https://excite.company/',
    siteName: 'Excite! Innovation Company',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excite! Innovation Company',
    description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    images: ['https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg'],
    site: '@ExciteCompany',
    creator: '@ExciteCompany',
  },
  alternates: {
    canonical: 'https://excite.company/',
  },
  other: {
    'fb:app_id': 'Excite.Company',
  },
};

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
                                Premier Digital Product Innovation Company that Specializes in
                            </div>
                            <div className={styles.heroText}>
                                UIUX Research, Design & Software Engineering
                            </div>
                        </div>
                        <div className={styles.cTAs}>
                            <div className={styles.socialMediaCTA}> Follow us on our socials </div>
                            <div className={styles.socialMediaIcons}>
                                <SocialButton socialIcon="/icons/LinkedIn.svg" />
                                <SocialButton socialIcon="/icons/Instagram.svg" />
                                <SocialButton socialIcon="/icons/Dribbble.svg" />
                                <SocialButton socialIcon="/icons/GitHub.svg" />
                                <SocialButton socialIcon="/icons/X.svg" />
                                <SocialButton socialIcon="/icons/YouTube.svg" />
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
