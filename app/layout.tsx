import "./globals.css"
import ClientLayout from "./clientLayout"

export const metadata = {
  title: 'FanFirst - Where True Fans Come First',
  description: 'The Ultimate Fan-Centric Ticketing Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-transparent">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
