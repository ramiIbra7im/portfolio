// app/[locale]/layout.js
import "../globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nProvider } from '../../i18n/context';
import { use } from "react";
import BootstrapClient from "@/components/BootstrapClient";
export async function generateMetadata({ params }) {
  const { locale } = await params;

  // بيانات الميتا داتا
  const metaData = {
    en: {
      title: "Ramy Ibrahim - Frontend Developer",
      description: "Frontend Developer specializing in React, Next.js, and modern web technologies. Building responsive and user-friendly web applications.",
    },
    ar: {
      title: "رامي إبراهيم - مطور واجهات أمامية",
      description: "مطور واجهات أمامية متخصص في React و Next.js وتقنيات الويب الحديثة. أبني تطبيقات ويب متجاوبة وسهلة الاستخدام.",
    }
  };

  const currentMeta = metaData[locale] || metaData.en;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: ["Frontend Developer", "React", "Next.js", "JavaScript", "Web Development", "Portfolio"],
    icons: {
      icon: '/favicon.ico', // غيرت لـ favicon.ico
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      type: "website",
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: "https://rb-ramy.vercel.app/",
      siteName: "Ramy Ibrahim Portfolio",
      images: [
        {
          url: "/Images/logo.png", // تأكد إن الصورة موجودة في public/
          width: 1200,
          height: 630,
          alt: currentMeta.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: currentMeta.title,
      description: currentMeta.description,
      images: ["/Images/logo.png"], // غيرت لـ logo.png بدل og-image.jpg
    },

    alternates: {
      canonical: "https://rb-ramy.vercel.app", // أزلت الـ / الأخيرة
      languages: {
        'en': 'https://rb-ramy.vercel.app/en',
        'ar': 'https://rb-ramy.vercel.app/ar',
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children, params }) {
  const { locale } = use(params);

  return (
    <html lang={locale} dir={locale === 'en' ? 'rtl' : 'ltr'}>
      <body>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
          <BootstrapClient />
        </I18nProvider>
      </body>
    </html>
  );
}