"use client";

import { useState } from "react";

import { AccessDeniedCard } from "@/components/access-denied-card";
import { BaseContainer } from "@/components/base-container";
import { PromoImage } from "@/components/promo-image";
import { AppButton } from "@/components/ui/app-button";

const PRICE_ETH = 0.0025;
const SUPPLY_TOTAL = 200_000;
const MINTED = 0;

function formatEth(value: number) {
  return `${value.toFixed(4)} ETH`;
}

export function MintAccessSection() {
  const [isMintMode, setIsMintMode] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const totalEth = quantity * PRICE_ETH;
  const progressPercent = (MINTED / SUPPLY_TOTAL) * 100;

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

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
                <div className="mintPanel__header">
                  <div className="mintFlipBackContent__label">MINT MODE</div>
                  <div className="mintFlipBackContent__title">Vault Pass Mint</div>
                </div>

                <div className="mintPanel__body">
                  <div className="mintPanel__row">
                    <span className="mintPanel__rowLabel">Supply</span>
                    <span className="mintPanel__rowValue">
                      {SUPPLY_TOTAL.toLocaleString("en-US")} total
                    </span>
                  </div>

                  <div className="mintPanel__row">
                    <span className="mintPanel__rowLabel">Minted</span>
                    <span className="mintPanel__rowValue">
                      {MINTED.toLocaleString("en-US")} / {SUPPLY_TOTAL.toLocaleString("en-US")}
                    </span>
                  </div>

                  <div className="mintPanel__progressWrap">
                    <div className="mintPanel__progress">
                      <div
                        className="mintPanel__progressFill"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="mintPanel__progressPct">
                      {progressPercent.toFixed(1)}%
                    </span>
                  </div>

                  <div className="mintPanel__row">
                    <span className="mintPanel__rowLabel">Price</span>
                    <span className="mintPanel__rowValue">{formatEth(PRICE_ETH)}</span>
                  </div>

                  <div className="mintPanel__row">
                    <span className="mintPanel__rowLabel">Quantity</span>
                    <div className="mintPanel__quantity">
                      <button
                        type="button"
                        className="mintPanel__quantityBtn"
                        onClick={decreaseQuantity}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="mintPanel__quantityValue">{quantity}</span>
                      <button
                        type="button"
                        className="mintPanel__quantityBtn"
                        onClick={increaseQuantity}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mintPanel__row">
                    <span className="mintPanel__rowLabel">Total</span>
                    <span className="mintPanel__rowValue">{formatEth(totalEth)}</span>
                  </div>
                </div>

                <div className="mintPanel__actions">
                  <AppButton className="mintPanel__mintBtn" type="button">
                    MINT VAULT PASS
                  </AppButton>
                  <button
                    type="button"
                    className="mintPanel__back"
                    onClick={() => setIsMintMode(false)}
                  >
                    ← Back
                  </button>
                </div>
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