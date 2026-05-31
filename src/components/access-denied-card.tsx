import { AppButton } from "@/components/ui/app-button";
import { AppLabel } from "@/components/ui/app-label";
import { AppText } from "@/components/ui/app-text";
import { AppTitle } from "@/components/ui/app-title";

import styles from "./access-denied-card.module.css";

export function AccessDeniedCard() {
  return (
    <div className={styles.card}>
      <AppLabel className={styles.card__label}>ACCESS LOCKED</AppLabel>

      <div className={styles.card__content}>
        <AppTitle>Mint Required</AppTitle>

        <div className={styles.card__textGroup}>
          <AppText>You need a Vault Pass NFT to enter this area.</AppText>
          <AppText>Mint your Vault Pass and unlock access.</AppText>
        </div>
      </div>

      <AppButton className={styles.card__button}>MINT VAULT PASS</AppButton>
    </div>
  );
}