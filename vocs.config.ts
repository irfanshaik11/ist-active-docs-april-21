import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate',
  titleTemplate: '%s | Interstate',
  iconUrl: '/favicon.png',
  topNav: [
    { text: 'Docs', link: '/getting-started/what-is-interstate' },
    { text: 'Launch App', link: 'https://app.interstate.so' },
  ],
  sidebar: [
    {
      text: 'Getting Started',
      items: [
        { text: 'What is Interstate', link: '/getting-started/what-is-interstate' },
        { text: 'Invite-only access & signup', link: '/getting-started/signup' },
        { text: 'Your first trade', link: '/getting-started/first-trade' },
        { text: 'Waitlist', link: '/access/waitlist' },
      ],
    },
    {
      text: 'Trading',
      items: [
        {
          text: 'Solana Spot',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/trading/solana-spot/overview' },
            { text: 'Market orders', link: '/trading/solana-spot/market-orders' },
            { text: 'Limit orders', link: '/trading/solana-spot/limit-orders' },
            { text: 'Quick-buy presets', link: '/trading/solana-spot/quick-buy-presets' },
            { text: 'Slippage & priority fees', link: '/trading/solana-spot/slippage-priority-fees' },
            { text: 'Migration buy / sell', link: '/trading/solana-spot/migration-buy-sell' },
            { text: 'Sniper', link: '/trading/solana-spot/sniper' },
            { text: 'Pool discovery', link: '/trading/solana-spot/pool-discovery' },
          ],
        },
        { text: 'Monad (Beta)', link: '/trading/monad' },
        { text: 'Perpetual Futures', link: '/trading/perpetuals' },
        { text: 'Prediction Markets', link: '/trading/prediction-markets' },
        { text: 'Order execution', link: '/trading/order-execution' },
        { text: 'MEV protection', link: '/trading/mev-protection' },
      ],
    },
    {
      text: 'Discovery & Intelligence',
      items: [
        { text: 'Pulse', link: '/discovery/pulse' },
        { text: 'Pulse lifecycle', link: '/discovery/pulse-lifecycle' },
        { text: 'Discover tabs', link: '/discovery/discover-tabs' },
        { text: 'Trending', link: '/discovery/trending' },
        { text: 'DexScreener trending', link: '/discovery/dexscreener-trending' },
        { text: 'OHLC charts', link: '/discovery/ohlc-charts' },
        { text: 'Token analytics', link: '/discovery/token-analytics' },
        { text: 'Duplicate image detection', link: '/discovery/duplicate-image-detection' },
        { text: 'Top traders & holders', link: '/discovery/top-traders-holders' },
        { text: 'Watchlist', link: '/discovery/watchlist' },
        { text: 'Bundle checker', link: '/discovery/bundle-checker' },
        { text: 'Token search', link: '/discovery/token-search' },
      ],
    },
    {
      text: 'Monitors & Automation',
      items: [
        { text: 'Wallet tracker overview', link: '/monitors/wallet-tracker-overview' },
        { text: 'Adding wallets', link: '/monitors/adding-wallets' },
        { text: 'Live feed mechanics', link: '/monitors/live-feed-mechanics' },
        { text: 'Historical trades', link: '/monitors/historical-trades' },
        { text: 'Twitter / X monitor', link: '/monitors/twitter-monitor' },
        { text: 'Telegram monitor', link: '/monitors/telegram-monitor' },
        { text: 'Sniper automation', link: '/automation/sniper' },
      ],
    },
    {
      text: 'Airdrop Genesis & Rewards',
      items: [
        { text: 'Airdrop Genesis overview', link: '/arena/overview' },
        { text: 'Credits, Ranks & Rewards', link: '/credits' },
        { text: 'Referrals', link: '/arena/referrals' },
        { text: 'Leaderboard', link: '/arena/leaderboard' },
        { text: 'Ranks & Cashback reference', link: '/arena/airdrop-genesis' },
      ],
    },
    {
      text: 'Funding & Account',
      items: [
        { text: 'Deposits', link: '/funding/deposits' },
        { text: 'Withdrawals', link: '/funding/withdrawals' },
        { text: 'Onramp', link: '/funding/onramp' },
        { text: 'Convert', link: '/funding/convert' },
        { text: 'Multi-wallet management', link: '/funding/multi-wallet-management' },
        { text: 'Multi-wallet trading', link: '/funding/multi-wallet-trading' },
        { text: 'Wallet import / export', link: '/funding/wallet-import-export' },
        { text: 'Turnkey wallet security', link: '/account/turnkey-wallet-security' },
      ],
    },
    {
      text: 'Telegram Bot',
      items: [
        { text: 'Overview', link: '/telegram-bot/overview' },
        { text: 'Setup', link: '/telegram-bot/setup' },
        { text: 'Quick buy (paste CA)', link: '/telegram-bot/quick-buy-paste-ca' },
        { text: 'Sell by percentage', link: '/telegram-bot/sell-by-percentage' },
        { text: 'Portfolio & assets', link: '/telegram-bot/portfolio-assets' },
        { text: 'Limit orders in bot', link: '/telegram-bot/limit-orders-bot' },
        { text: 'Wallet in bot', link: '/telegram-bot/wallet-bot' },
        { text: 'Settings', link: '/telegram-bot/settings' },
        { text: 'Multi-language', link: '/telegram-bot/multi-language' },
        { text: 'Error messages', link: '/telegram-bot/error-messages' },
      ],
    },
    {
      text: 'Help & Legal',
      items: [
        { text: 'FAQs', link: '/faqs' },
        { text: 'Fees', link: '/fees' },
        { text: 'Support', link: '/support' },
        { text: 'Terms of Service', link: '/terms-of-service' },
        { text: 'Privacy Policy', link: '/privacy-policy' },
      ],
    },
  ],
})
