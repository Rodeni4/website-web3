"use client";

import { useState } from "react";

import { AccessDeniedCard } from "@/components/access-denied-card";
import { BaseContainer } from "@/components/base-container";
import { PromoImage } from "@/components/promo-image";

export function MintAccessSection() {
  const [isMintMode, setIsMintMode] = useState(false);

  return (
    <>
      <BaseContainer className="promoCard promoCard--access">
        <AccessDeniedCard onMintClick={() => setIsMintMode(true)} />
      </BaseContainer>

      <BaseContainer className="promoCard" variant="clear">
        {!isMintMode ? (
          <PromoImage src="/assets/mint-chest.png" alt="Сундук NFT" />
        ) : (
          <div className="mintModeTest">
            <div className="mintModeTest__label">MINT MODE</div>
            <div className="mintModeTest__title">Vault Pass Mint</div>

            <button
              className="mintModeTest__button"
              type="button"
              onClick={() => setIsMintMode(false)}
            >
              BACK
            </button>
          </div>
        )}
      </BaseContainer>
    </>
  );
}