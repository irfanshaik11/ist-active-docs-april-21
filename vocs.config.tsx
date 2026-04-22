import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate',
  titleTemplate: '%s | Interstate',
  iconUrl: '/favicon.png',
  theme: {
    accentColor: '#6366f1',
    colorScheme: 'dark',
    variables: {
      color: {
        background: { dark: '#0b0d17', light: '#ffffff' },
        background2: { dark: '#111521', light: '#f9fafb' },
        background3: { dark: '#161a28', light: '#f3f4f6' },
        background4: { dark: '#1c2134', light: '#e5e7eb' },
        background5: { dark: '#262b42', light: '#d1d5db' },
        backgroundDark: { dark: '#0b0d17', light: '#ffffff' },
        backgroundDarkTint: { dark: '#0b0d17', light: '#fafafa' },
        border: { dark: 'rgba(99, 102, 241, 0.15)', light: '#e5e7eb' },
        border2: { dark: 'rgba(99, 102, 241, 0.22)', light: '#d1d5db' },
        textAccent: { dark: '#a5b4fc', light: '#4f46e5' },
      },
    },
  },
  head: {
    '/': (
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Landing page only: use full viewport width */
            html:has(.interstate-landing) #vocs-content,
            html:has(.interstate-landing) .vocs_DocsLayout_content,
            html:has(.interstate-landing) .vocs_Content {
              max-width: 100% !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
          `,
        }}
      />
    ),
  },
  topNav: [
    { text: 'Docs', link: '/getting-started/quickstart' },
    { text: 'App', link: 'https://app.interstate.so' },
  ],
  sidebar: [
    {
      text: 'Interstate',
      items: [
        { text: 'The Future of Trading', link: '/' },
        { text: 'FAQs', link: '/faqs' },
        { text: 'Support', link: '/support' },
      ],
    },
    {
      text: 'Getting Started',
      items: [
        { text: 'Quick Start (Signup)', link: '/getting-started/quickstart' },
        { text: 'Quick Start Tips', link: '/getting-started/quickstart-tips' },
        { text: 'Referral Program', link: '/getting-started/referral-program' },
        { text: 'Reward System', link: '/rewards' },
        { text: 'Point System (Arena)', link: '/points' },
        { text: 'Fees', link: '/fees' },
      ],
    },
    {
      text: 'Core Product',
      items: [
        { text: 'Buy Crypto', link: '/features/buy-crypto' },
        {
          text: 'Finding Tokens',
          collapsed: false,
          items: [
            { text: 'Pulse', link: '/features/pulse' },
            { text: 'Discover', link: '/features/discover' },
            { text: 'Similar Tokens', link: '/features/similar-tokens' },
            { text: 'Security Check', link: '/features/security-check' },
          ],
        },
        {
          text: 'Swap',
          collapsed: false,
          items: [
            { text: 'Trading System', link: '/features/trading' },
            { text: 'Limit Orders', link: '/automation/limit-orders' },
            { text: 'Migration Sniper', link: '/automation/sniper' },
            { text: 'Instant Trade', link: '/automation/instant-trade' },
          ],
        },
        { text: 'Portfolio', link: '/features/portfolio' },
        { text: 'Prediction Markets', link: '/features/predictions' },
        { text: 'UI Icons Legend', link: '/features/icons-legend' },
      ],
    },
    {
      text: 'Wallet',
      items: [
        { text: 'Multi-Wallet', link: '/wallet/multi-wallet' },
      ],
    },
    {
      text: 'Wallet Tracking',
      items: [
        { text: 'Tracking Wallets', link: '/analytics/wallet-tracker' },
        { text: 'Trader Scan', link: '/analytics/trader-scan' },
      ],
    },
    {
      text: 'Social Monitoring',
      items: [
        { text: 'Twitter / X Monitor', link: '/analytics/twitter-monitor' },
      ],
    },
    {
      text: 'Mobile & Bot',
      items: [
        { text: 'Telegram Bot', link: '/features/telegram-bot' },
      ],
    },
    {
      text: 'Advanced Analytics',
      items: [
        { text: 'Bundle & Sniper Detection', link: '/analytics/bundle-detection' },
      ],
    },
    {
      text: 'Information',
      items: [
        { text: 'Benefits & Risks', link: '/benefits-and-risks' },
        { text: 'Terms of Service', link: '/terms-of-service' },
        { text: 'Privacy Policy', link: '/privacy-policy' },
      ],
    },
  ],
})
