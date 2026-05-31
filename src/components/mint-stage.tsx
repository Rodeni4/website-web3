"use client";

import { useCallback, useState } from "react";

import { AccessDeniedCard } from "@/components/access-denied-card";
import { BaseContainer } from "@/components/base-container";
import { MintVaultCard } from "@/components/mint-vault-card";
import { NftPreviewCard } from "@/components/nft-preview-card";
import { PromoImage } from "@/components/promo-image";

import styles from "./mint-stage.module.css";

export function MintStage() {
  const [isMintMode, setIsMintMode] = useState(false);

  const enterMintMode = useCallback(() => {
    setIsMintMode(true);
  }, []);

  const exitMintMode = useCallback(() => {
    setIsMintMode(false);
  }, []);

  return (
    <div
      className={`${styles.stage} ${isMintMode ? styles.stageMintMode : ""}`.trim()}
      data-mint-mode={isMintMode ? "true" : "false"}
    >
      {isMintMode && (
        <button type="button" className={styles.stageBack} onClick={exitMintMode}>
          Back
        </button>
      )}

      <div
        className={`${styles.nftLayer} ${isMintMode ? styles.nftLayerVisible : ""}`.trim()}
        aria-hidden={!isMintMode}
      >
        <BaseContainer className={`promoCard promoCard--image ${styles.promoShell}`}>
          <NftPreviewCard />
        </BaseContainer>
      </div>

      <div
        className={`${styles.flipSlot} ${isMintMode ? styles.flipSlotMint : ""}`.trim()}
      >
        <BaseContainer className={`promoCard promoCard--access ${styles.promoShell}`}>
          <div className={styles.flipInner}>
            <div className={styles.flipFace}>
              <AccessDeniedCard onMintClick={enterMintMode} />
            </div>
            <div className={`${styles.flipFace} ${styles.flipFaceBack}`}>
              <MintVaultCard />
            </div>
          </div>
        </BaseContainer>
      </div>

      <div
        className={`${styles.chestSlot} ${isMintMode ? styles.chestSlotHidden : ""}`.trim()}
        aria-hidden={isMintMode}
      >
        <BaseContainer
          className={`promoCard ${styles.promoShell} ${styles.chestPromo}`}
          variant="clear"
        >
          <PromoImage src="/assets/mint-chest.png" alt="Сундук NFT" />
        </BaseContainer>
      </div>
    </div>
  );
}
