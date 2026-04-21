import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate',
  titleTemplate: '%s | Interstate',
  iconUrl: '/favicon.png',
  topNav: [
    { text: 'Docs', link: '/faqs' },
    { text: 'Launch App', link: 'https://app.interstate.so' },
  ],
  sidebar: [
    {
      text: 'FAQs',
      link: '/faqs',
    },
    {
      text: 'Rewards',
      link: '/rewards',
    },
    {
      text: 'Support',
      link: '/support',
    },
    {
      text: 'Points',
      link: '/points',
    },
    {
      text: 'Terms of Service',
      link: '/terms-of-service',
    },
  ],
})
