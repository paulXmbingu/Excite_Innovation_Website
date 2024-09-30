import styles from "./Buttons.module.css";

interface SocialButtonProps {
    socialIcon?: string;
    handleClick?: () => void;
    link: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ 
    socialIcon = "/icons/Social icon.svg", 
    handleClick, 
    link 
}) => {
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
