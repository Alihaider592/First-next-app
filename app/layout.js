import './globals.css'

export const metadata = {
  title: 'My Next.js App',
  description: 'Tailwind setup example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
