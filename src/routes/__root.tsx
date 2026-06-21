import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Rajmata Enterprise - Disposable & Cleaning Products Supplier' },
      { name: 'description', content: 'Rajmata Enterprise - Quality disposable items, cleaning products, grocery bags, tissue papers, wooden spoons, phenyl, air fresheners and packaging materials at wholesale prices in Hyderabad.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  )
}
