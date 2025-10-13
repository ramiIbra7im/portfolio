// app/[locale]/layout.js
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientLayout from "./ClientLayout";

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
      icon: '/favicon.ico',
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
          url: "/Images/logo.png",
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
      images: ["/Images/logo.png"],
    },

    alternates: {
      canonical: "https://rb-ramy.vercel.app",
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
  const { locale } = params;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientLayout params={params}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}