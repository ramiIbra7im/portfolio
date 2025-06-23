import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from './components/BootstrapClient';
export const metadata = {
  title: "portfolio",
  description: "Ramy Ibrahim portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
