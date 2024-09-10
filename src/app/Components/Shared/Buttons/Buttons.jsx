import styles from "./Buttons.module.css";

const SocialButton = ({ socialIcon="/icons/Social icon.svg", handleClick, link }) => {
    return (
        <a 
            href={link} 
            className={styles.socialButtonWrap}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={socialIcon}
                alt="Social Icon"
            />
        </a>
    );
};

export default SocialButton;
