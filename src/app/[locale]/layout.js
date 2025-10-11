import "../globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nProvider } from '../../i18n/context';
import { use } from "react";

export default function RootLayout({ children, params }) {
  const { locale } = use(params);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <title>Portfolio - Ramy Ibrahim</title>
        <meta name="description" content="Ramy Ibrahim portfolio" />
      </head>
      <body>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
