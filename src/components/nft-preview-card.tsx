import styles from "./nft-preview-card.module.css";

export function NftPreviewCard() {
  return (
    <div className={styles.preview}>
      <div className={styles.preview__glow} aria-hidden="true" />
      <div className={styles.preview__frame}>
        <div className={styles.preview__art} aria-hidden="true">
          <span className={styles.preview__emblem}>VP</span>
        </div>
        <p className={styles.preview__caption}>Vault Pass</p>
      </div>
    </div>
  );
}
