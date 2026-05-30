"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useRef } from "react";
import { formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi";

import styles from "./connect-button-eth6.module.css";

function formatEthBalance(value: bigint, decimals: number): string {
  const raw = formatUnits(value, decimals);
  const negative = raw.startsWith("-");
  const unsigned = negative ? raw.slice(1) : raw;
  const [intPart, fracPart = ""] = unsigned.split(".");
  const fraction = fracPart.padEnd(6, "0").slice(0, 6);

  return `${negative ? "-" : ""}${intPart}.${fraction} ETH`;
}

export function ConnectButtonEth6() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { address, chainId, isConnected } = useAccount();
  const { data: balance } = useBalance({ address, chainId });

  useEffect(() => {
    const root = containerRef.current;
    if (!root || !balance || balance.symbol !== "ETH") {
      return;
    }

    const formatted = formatEthBalance(balance.value, balance.decimals);

    const updateBalanceText = () => {
      const accountButton = root.querySelector('[data-testid="rk-account-button"]');
      const balanceNode = accountButton?.firstElementChild;
      if (balanceNode) {
        balanceNode.textContent = formatted;
      }
    };

    updateBalanceText();

    const observer = new MutationObserver(updateBalanceText);
    observer.observe(root, { subtree: true, childList: true, characterData: true });

    return () => observer.disconnect();
  }, [balance, address, chainId]);

  return (
    <div ref={containerRef}>
      <div
        className={`${styles.connectedWalletWrap} ${
          isConnected ? "" : styles.connectedWalletHidden
        }`}
      >
        <ConnectButton
          accountStatus="full"
          showBalance={{
            smallScreen: true,
            largeScreen: true,
          }}
        />
      </div>
      {!isConnected && (
        <div className={styles.connectWalletWrap}>
          <ConnectButton.Custom>
            {({ mounted, authenticationStatus, openConnectModal }) => {
              const ready = mounted && authenticationStatus !== "loading";

              return (
                <button
                  type="button"
                  className={styles.connectButton}
                  disabled={!ready}
                  onClick={openConnectModal}
                >
                  Connect Wallet
                </button>
              );
            }}
          </ConnectButton.Custom>
        </div>
      )}
    </div>
  );
}
