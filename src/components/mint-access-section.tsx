"use client";

import { useState } from "react";

import { AccessDeniedCard } from "@/components/access-denied-card";
import { BaseContainer } from "@/components/base-container";
import { PromoImage } from "@/components/promo-image";

export function MintAccessSection() {
  const [isMintMode, setIsMintMode] = useState(false);

  return (
    <>
      <BaseContainer className="promoCard promoCard--access mintMoveCard">
        <div
          className={`mintMoveCardTrack ${
            isMintMode ? "mintMoveCardTrack--active" : ""
          }`}
        >
          <div
            className={`mintFlipInner ${
              isMintMode ? "mintFlipInner--active" : ""
            }`}
          >
            <div className="mintFlipFace mintFlipFront">
              <AccessDeniedCard onMintClick={() => setIsMintMode(true)} />
            </div>

            <div className="mintFlipFace mintFlipBack">
              <div className="mintFlipBackContent">
                <div className="mintFlipBackContent__label">MINT MODE</div>
                <div className="mintFlipBackContent__title">Vault Pass Mint</div>

                <button
                  className="mintFlipBackContent__button"
                  type="button"
                  onClick={() => setIsMintMode(false)}
                >
                  BACK
                </button>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>

      <BaseContainer
        className={`promoCard mintChestCard ${
          isMintMode ? "mintChestCard--hidden" : ""
        }`}
        variant="clear"
      >
        <PromoImage src="/assets/mint-chest.png" alt="Сундук NFT" />
      </BaseContainer>
    </>
  );
}