import Footer from "../_components/Footer"
import "../_styles/global.css"
import Header from "../_components/Header/Header"
import { ThemeProvider } from "next-themes"
import { AuthProvider } from "../_lib/kinde/AuthProvider"

export const metadata = {
  title: 'mongo  auth',
  description: 'App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="es" suppressHydrationWarning>
        <body className="min-h-dvh sm:h-dvh w-full flex flex-col">
          <ThemeProvider>
            <Header />
            <main className="flex-1 flex flex-col py-12">

              {children}

            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}

