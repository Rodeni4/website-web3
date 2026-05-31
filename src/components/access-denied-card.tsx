import { AppButton } from "@/components/ui/app-button";
import { AppLabel } from "@/components/ui/app-label";
import { AppText } from "@/components/ui/app-text";
import { AppTitle } from "@/components/ui/app-title";

import styles from "./access-denied-card.module.css";

export function AccessDeniedCard() {
  return (
    <div className={styles.card}>
      <AppLabel>ACCESS DENIED</AppLabel>
      <AppTitle>Пропуск не найден</AppTitle>

      <div className={styles.card__textGroup}>
        <AppText>Этот раздел доступен только владельцам Vault Pass.</AppText>
        <AppText>Сминть NFT-пропуск, чтобы открыть доступ.</AppText>
      </div>

      <AppButton className={styles.card__button}>МИНТ</AppButton>
    </div>
  );
}
