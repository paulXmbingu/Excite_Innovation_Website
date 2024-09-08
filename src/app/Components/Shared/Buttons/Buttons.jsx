import styles from "./Buttons.module.css";

const SocialButton = ({ socialIcon="/icons/Social icon.svg", handleClick }) => {
    return (
        <button className={styles.socialButtonWrap}>
            <img
                src={socialIcon}
                alt="Social Icon"
                onClick={handleClick}
            />
        </button>
    );
};

export default SocialButton;
