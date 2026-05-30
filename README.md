# website-web3

Next.js template with RainbowKit, wagmi, and viem. The home page shows a centered wallet **Connect** button.

## Setup

```bash
npm install
```

Copy environment variables and add your WalletConnect project ID ([WalletConnect Cloud](https://cloud.walletconnect.com/)):

```bash
cp .env.example .env.local
```

Edit `.env.local`:

- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` — required for wallet connections
- `NEXT_PUBLIC_ENABLE_TESTNETS` — set to `true` to include Sepolia

Git hooks (strips `Co-authored-by` and similar trailers from commit messages) are enabled automatically via `npm install` (`prepare` script sets `core.hooksPath` to `.githooks`).

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cursor

- Rule: `.cursor/rules/git-commit-author-only.mdc` — commits without co-author trailers
- Slash command: `/commit` — commit workflow with the same rules

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |
