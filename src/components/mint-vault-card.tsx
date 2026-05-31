import { AppButton } from "@/components/ui/app-button";
import { AppText } from "@/components/ui/app-text";
import { AppTitle } from "@/components/ui/app-title";

import styles from "./mint-vault-card.module.css";

export function MintVaultCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <AppTitle className={styles.card__title}>Vault Pass Mint</AppTitle>

        <AppText className={styles.card__text}>
          Mint your pass to unlock the vault.
        </AppText>

        <div className={styles.card__quantity} aria-label="Mint quantity">
          <span className={styles.card__quantityValue}>1</span>
          <span className={styles.card__quantityLabel}>Vault Pass</span>
        </div>
      </div>

      <div className={styles.card__actions}>
        <AppButton className={styles.card__button}>MINT NOW</AppButton>
      </div>
    </div>
  );
}
