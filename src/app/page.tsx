"use client";

import { useAccount } from "wagmi";

import { BaseContainer } from "@/components/base-container";
import { ConnectButtonEth6 } from "@/components/connect-button-eth6";
import { PromoImage } from "@/components/promo-image";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className={isConnected ? "page pageConnected" : "page pageStart"}>
      <ConnectButtonEth6 />

      {isConnected && (
        <BaseContainer className="mintCard">
          <BaseContainer className="promoCard">
            <div></div>
          </BaseContainer>

          <BaseContainer className="promoCard" variant="clear">
            <PromoImage src="/assets/mint-chest.png" alt="Сундук NFT" />
          </BaseContainer>
        </BaseContainer>
      )}
    </main>
  );
}