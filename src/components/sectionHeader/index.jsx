import styles from "./sectionHeader.module.css";

const SectionHeader = ({
    sectionHeaderTitle,
    sectionHeaderDescription,
    sectionHeaderImage,
    sectionHeaderImageAlt,
}) => {
    return (
        <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderImageContainer}>
                <img
                    src={sectionHeaderImage}
                    alt={sectionHeaderImageAlt}
                    className={styles.sectionHeaderImage}
                />
            </div>
            <div className={styles.sectionHeaderContent}>
                <h2 className={styles.sectionHeaderTitle}>{sectionHeaderTitle}</h2>
                <p className={styles.sectionHeaderDescription}>
                    {sectionHeaderDescription}
                </p>
            </div>
        </div>
    );
};

export default SectionHeader;
