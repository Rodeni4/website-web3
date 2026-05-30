"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useRef } from "react";
import { formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi";

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
  const { address, chainId } = useAccount();
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
      <ConnectButton
        accountStatus="full"
        showBalance={{
          smallScreen: true,
          largeScreen: true,
        }}
      />
    </div>
  );
}
