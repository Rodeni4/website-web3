"use client";

import { useAccount } from "wagmi";

import { BaseContainer } from "@/components/base-container";
import { ConnectButtonEth6 } from "@/components/connect-button-eth6";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className={isConnected ? "page pageConnected" : "page pageStart"}>
      <ConnectButtonEth6 />

      {isConnected && (
        <BaseContainer className="mintCard">
          <div></div>
        </BaseContainer>
      )}
    </main>
  );
}