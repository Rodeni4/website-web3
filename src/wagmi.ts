import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http, type Transport } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

const chains = [
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
] as const;

const rpcUrls: Record<number, string> = {
  [mainnet.id]: "https://ethereum.publicnode.com",
  [polygon.id]: "https://polygon-bor.publicnode.com",
  [optimism.id]: "https://optimism.publicnode.com",
  [arbitrum.id]: "https://arbitrum-one.publicnode.com",
  [base.id]: "https://base.publicnode.com",
  [sepolia.id]: "https://ethereum-sepolia.publicnode.com",
};

const transports = Object.fromEntries(
  chains.map((chain) => [chain.id, http(rpcUrls[chain.id])]),
) as Record<number, Transport>;

export const config = getDefaultConfig({
  appName: "website-web3",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "",
  chains: [...chains],
  ssr: true,
  transports,
});
