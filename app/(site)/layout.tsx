import Layout from '@components/Layout'

import './../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
