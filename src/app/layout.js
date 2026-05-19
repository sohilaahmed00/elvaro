import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ELVARO | Building the Future with Precision",
  description: "Premium engineering and construction solutions, built with precision and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body style={{ fontFamily: 'inherit' }}>
        <AuthProvider>
          <Header />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

