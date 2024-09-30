import styles from "./Home.module.css";
import SocialButton from '@/app/Components/Shared/Buttons/Buttons';

export const metadata = {
  title: 'Excite! Innovation Company',
  description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
  keywords: ['Digital Product Innovation', 'UIUX Research', 'Design', 'Software Engineering'],
  openGraph: {
    title: 'Excite! Innovation Company',
    description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    url: 'https://excite.company/',
    images: [
      {
        url: 'https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg',
        alt: 'Excite! Innovation Company',
      },
    ],
    siteName: 'Excite! Innovation Company',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excite! Innovation Company',
    description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    creator: '@ExciteCompany',
    site: '@ExciteCompany',
    images: ['https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg'],
  },
  alternates: {
    canonical: 'https://excite.company/',
  },
};

const HomePage = () => {
  return (
    <div className={styles.homePageWrap}>
      <div className={styles.mediaSection}>
        <video
          autoPlay
          playsInline
          preload="auto"
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
              <div className={styles.socialMediaCTA}>
                Follow us on our socials
              </div>
              <div className={styles.socialMediaIcons}>
                <SocialButton
                  socialIcon="/icons/LinkedIn.svg"
                  link={`https://www.linkedin.com/company/excitecompany`}
                />
                <SocialButton
                  socialIcon="/icons/Instagram.svg"
                  link={`https://www.instagram.com/ExciteCompany/`}
                />
                <SocialButton
                  socialIcon="/icons/Dribbble.svg"
                  link={`https://dribbble.com/ExciteCompany`}
                />
                <SocialButton
                  socialIcon="/icons/GitHub.svg"
                  link={`https://github.com/Excite-Innovation-Company`}
                />
                <SocialButton
                  socialIcon="/icons/X.svg"
                  link={`https://twitter.com/ExciteCompany`}
                />
                <SocialButton
                  socialIcon="/icons/YouTube.svg"
                  link={`https://www.youtube.com/@ExciteCompany`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
