import Navbar from "./navbar"

export const metadata = {
  title: 'Next.js app',
  description: 'Generated by Next.js',
}

export default function RootLayout({ header , children}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
        </div>
        {/* Page Heading */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>

        {/* Page Content */}
        <main className="main">{children}</main>
      </body>
    </html>
  )
}
