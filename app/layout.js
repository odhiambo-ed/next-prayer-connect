import './globals.css'

export const metadata = {
  title: 'Prayer App',
  description: 'A place for sharing and receiving prayers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
