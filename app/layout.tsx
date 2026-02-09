import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mahi IT Services | Online Govt & IT Solutions in Mumbai & Thane',
  description: 'Fast online government services (PAN, Passport, GST), Laptop repair, and complete IT solutions in Mumbai and Thane.',
  keywords: 'IT services Mumbai, PAN card online, Passport consultant Thane, Laptop repair Govandi, GST registration Mumbai, Mahi IT Services',
  authors: [{ name: 'Mahi IT Services' }],
  openGraph: {
    title: 'Mahi IT Services – Your Digital Hub',
    description: 'Fast and reliable IT & Government services including PAN card, passport, laptop repair, and more.',
    type: 'website',
    url: 'https://mahiitservices.in/',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dg4wzx8c8/image/upload/v1770368880/app_images/qffsb4ibdrphjb6ir7jw.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#001a4d',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: "#0066cc",
                    brandDark: "#001a4d",
                    accent: "#f97316",
                  },
                  fontFamily: {
                    display: ["Playfair Display", "serif"],
                    sans: ["Plus Jakarta Sans", "sans-serif"],
                  },
                },
              },
            };
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { font-family: 'Plus Jakarta Sans', sans-serif; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
            body { background-color: #f8f9fa; }
            #sidebar { transition: transform 300ms ease, visibility 300ms; }
            .sidebar-hidden { transform: translateX(110%); visibility: hidden; }
            .sidebar-visible { transform: translateX(0); visibility: visible; }
            .service-card { transition: all 0.3s ease; }
            .service-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,26,77,0.15); }
            .btn-premium { transition: all 0.3s ease; }
            .btn-premium:hover { transform: translateY(-2px); }
            .fade-in { animation: fadeIn 0.6s ease-in; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          `
        }} />
      </head>
      <body className="text-slate-900">
        {children}
      </body>
    </html>
  )
}
