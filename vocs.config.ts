import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate',
  titleTemplate: '%s | Interstate',
  topNav: [
    { text: 'Docs', link: '/terms-of-service' },
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
      text: 'Terms of Service',
      link: '/terms-of-service',
    },
  ],
})
