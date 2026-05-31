"use client";

import { useState } from "react";

import { AccessDeniedCard } from "@/components/access-denied-card";
import { BaseContainer } from "@/components/base-container";
import { PromoImage } from "@/components/promo-image";
import { AppButton } from "@/components/ui/app-button";

const PRICE_ETH = 0.0025;
const SUPPLY_TOTAL = 200_000;

function formatEth(value: number) {
  return `${value.toFixed(4)} ETH`;
}

export function MintAccessSection() {
  const [isMintMode, setIsMintMode] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [mintedCount, setMintedCount] = useState(0);

  const totalEth = quantity * PRICE_ETH;
  const progressPercent = (mintedCount / SUPPLY_TOTAL) * 100;
  const isSoldOut = mintedCount >= SUPPLY_TOTAL;

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => {
      const remaining = SUPPLY_TOTAL - mintedCount;
      if (remaining <= 0) {
        return current;
      }
      return Math.min(current + 1, remaining);
    });
  };

  const handleMintDemo = () => {
    console.log("mint");
    setMintedCount((current) => Math.min(SUPPLY_TOTAL, current + quantity));
    setQuantity(1);
  };

  return (
    <>
      <BaseContainer className="promoCard promoCard--access mintMoveCard">
        <div className={`mintNftPreview ${isMintMode ? "mintNftPreview--visible" : ""}`}>
          <div className="mintNftPreview__imageWrap">
            <img
              className="mintNftPreview__image"
              src="/assets/vault-pass-nft.png"
              alt="Vault Pass NFT"
            />
          </div>

          <div className="mintNftPreview__buttonWrap">
            <AppButton
              className="mintNftPreview__button"
              type="button"
              onClick={handleMintDemo}
              disabled={isSoldOut}
            >
              MINT VAULT PASS
            </AppButton>
          </div>
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
                      {mintedCount.toLocaleString("en-US")} /{" "}
                      {SUPPLY_TOTAL.toLocaleString("en-US")}
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
                        disabled={isSoldOut}
                      >
                        −
                      </button>
                      <span className="mintPanel__quantityValue">{quantity}</span>
                      <button
                        type="button"
                        className="mintPanel__quantityBtn"
                        onClick={increaseQuantity}
                        aria-label="Increase quantity"
                        disabled={isSoldOut || quantity >= SUPPLY_TOTAL - mintedCount}
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
                  <button
                    className="mintPanelBackLink"
                    type="button"
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
