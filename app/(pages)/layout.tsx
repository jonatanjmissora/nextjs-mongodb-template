import Footer from "../_components/Footer"
import "../_styles/global.css"
import Header from "../_components/Header/Header"
import { ThemeProvider } from "next-themes"
import { AuthProvider } from "../_lib/kinde/AuthProvider"
import { Toaster } from "react-hot-toast"

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
              
              <Toaster
                position="top-right"
                toastOptions={{
                  style: {
                    background: '#888',
                    color: '#fff',
                    padding: "1rem 3rem",
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  },
                  success: {
                    duration: 2000,
                    style: {
                      background: '#5a5',
                      border: '2px solid green',
                    },
                  },
                  error: {
                    duration: 4000,
                    style: {
                      background: '#a55',
                      border: '2px solid darkred',
                    },
                  },
                }}
             />
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}

