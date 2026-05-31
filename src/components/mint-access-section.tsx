"use client";

import { useState } from "react";

import { AccessDeniedCard } from "@/components/access-denied-card";
import { BaseContainer } from "@/components/base-container";
import { PromoImage } from "@/components/promo-image";
import { AppButton } from "@/components/ui/app-button";

export function MintAccessSection() {
  const [isMintMode, setIsMintMode] = useState(false);

  return (
    <>
      <BaseContainer className="promoCard promoCard--access mintMoveCard">
        <div className={`mintNftPreview ${isMintMode ? "mintNftPreview--visible" : ""}`}>
          <div className="mintNftPreview__imageWrap">
            <img
              className="mintNftPreview__image"
              src="/assets/vault-pass-nft.gif"
              alt="Vault Pass NFT"
            />
          </div>

          <div className="mintNftPreview__label">VAULT PASS NFT</div>
        </div>

        <div className={`mintMoveCardTrack ${isMintMode ? "mintMoveCardTrack--active" : ""}`}>
          <div className={`mintFlipInner ${isMintMode ? "mintFlipInner--active" : ""}`}>
            <div className="mintFlipFace mintFlipFront">
              <AccessDeniedCard onMintClick={() => setIsMintMode(true)} />
            </div>

            <div className="mintFlipFace mintFlipBack">
              <div className="mintFlipBackContent">
                <div className="mintFlipBackContent__label">MINT MODE</div>
                <div className="mintFlipBackContent__title">Vault Pass Mint</div>

                <AppButton
                  className="mintFlipBackContent__button"
                  type="button"
                  onClick={() => setIsMintMode(false)}
                >
                  BACK
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>

      <BaseContainer
        className={`promoCard mintChestCard ${isMintMode ? "mintChestCard--hidden" : ""}`}
        variant="clear"
      >
        <PromoImage src="/assets/mint-chest.png" alt="Сундук NFT" />
      </BaseContainer>
    </>
  );
}