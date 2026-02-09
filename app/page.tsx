'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [services, setServices] = useState<any[]>([]);

  const translations = {
    en: {
      tagline: "Premium IT & Government Solutions",
      heroTitle: "Your Trusted Partner for IT & Govt Services",
      heroDesc: "Fast, secure, and reliable digital solutions for all your Government Documentation, IT Services, and Cyber Security needs across Mumbai & Thane.",
      inquireBtn: "Inquire Now",
      callBtn: "Call Expert",
      contactBtnText: "Contact",
      menuTitle: "Menu",
      callNowText: "Call Now",
      servicesTitle: "Our Services",
      govLabel: "Government",
      itLabel: "IT Services",
      cyberLabel: "Cyber Security",
      customServiceTitle: "Don't see what you need?",
      customServiceDesc: "Tell us your requirement and our expert team will get back to you instantly with a customized solution.",
      askBtn: "Ask Expert",
      footerTitle: "Mahi IT Services",
      footerDesc: "Your trusted partner for Government, IT, and Cyber solutions across Mumbai & Thane.",
      hoursTitle: "Hours & Contact",
      hoursLabel: "Opening Hours",
      proprietorLabel: "Proprietor",
      phoneLabel: "Phone",
      locationsTitle: "Service Locations"
    },
    hi: {
      tagline: "प्रीमियम आईटी और सरकारी समाधान",
      heroTitle: "आपका आईटी और सरकारी सेवाओं के लिए विश्वसनीय साथी",
      heroDesc: "मुंबई और ठाणे में सरकारी दस्तावेज़, आईटी सेवाओं और साइबर सुरक्षा की सभी आवश्यकताओं के लिए तेज़, सुरक्षित और विश्वसनीय डिजिटल समाधान।",
      inquireBtn: "अभी पूछताछ करें",
      callBtn: "विशेषज्ञ से कॉल करें",
      contactBtnText: "संपर्क करें",
      menuTitle: "मेनू",
      callNowText: "अभी कॉल करें",
      servicesTitle: "हमारी सेवाएं",
      govLabel: "सरकारी",
      itLabel: "आईटी सेवा",
      cyberLabel: "साइबर सुरक्षा",
      customServiceTitle: "क्या आपको जरूरत की चीज़ नहीं मिली?",
      customServiceDesc: "अपनी आवश्यकता बताएं और हमारी विशेषज्ञ टीम आपको तुरंत एक अनुकूलित समाधान के साथ वापस आएगी।",
      askBtn: "विशेषज्ञ से पूछें",
      footerTitle: "माही आईटी सेवाएं",
      footerDesc: "मुंबई और ठाणे में सरकारी, आईटी और साइबर समाधानों के लिए आपका विश्वसनीय साथी।",
      hoursTitle: "समय और संपर्क",
      hoursLabel: "खुलने का समय",
      proprietorLabel: "मालिक",
      phoneLabel: "फोन",
      locationsTitle: "सेवा स्थान"
    }
  };

  const serviceTranslations = {
    en: {
      "Government": "Government",
      "IT": "IT Services",
      "Cyber": "Cyber Security",
      "New PAN Card": "New PAN Card",
      "PAN Card Correction": "PAN Card Correction",
      "Passport (Fresh/Renew)": "Passport (Fresh/Renew)",
      "GST Registration": "GST Registration",
      "Shop Act / Gumasta": "Shop Act / Gumasta",
      "Ration Card Services": "Ration Card Services",
      "Income Certificate": "Income Certificate",
      "Gazette (Name Change)": "Gazette (Name Change)",
      "Laptop/PC Repair": "Laptop/PC Repair",
      "Windows OS Install": "Windows OS Install",
      "Web Development": "Web Development",
      "CCTV Installation": "CCTV Installation",
      "SSD / RAM Upgrade": "SSD / RAM Upgrade",
      "Digital Signature (DSC)": "Digital Signature (DSC)",
      "Police Clearance (PCC)": "Police Clearance (PCC)",
      "PF / UAN Withdrawal": "PF / UAN Withdrawal"
    },
    hi: {
      "Government": "सरकारी",
      "IT": "आईटी सेवा",
      "Cyber": "साइबर सुरक्षा",
      "New PAN Card": "नया पैन कार्ड",
      "PAN Card Correction": "पैन कार्ड सुधार",
      "Passport (Fresh/Renew)": "पासपोर्ट (नया/नवीनीकरण)",
      "GST Registration": "जीएसटी पंजीकरण",
      "Shop Act / Gumasta": "दुकान अधिनियम / गुमास्ता",
      "Ration Card Services": "राशन कार्ड सेवा",
      "Income Certificate": "आय प्रमाण पत्र",
      "Gazette (Name Change)": "गज़ट (नाम परिवर्तन)",
      "Laptop/PC Repair": "लैपटॉप/पीसी मरम्मत",
      "Windows OS Install": "विंडोज़ ओएस इंस्टॉल",
      "Web Development": "वेब विकास",
      "CCTV Installation": "सीसीटीवी स्थापना",
      "SSD / RAM Upgrade": "एसएसडी / रैम अपग्रेड",
      "Digital Signature (DSC)": "डिजिटल हस्ताक्षर (डीएससी)",
      "Police Clearance (PCC)": "पुलिस क्लीयरेंस (पीसीसी)",
      "PF / UAN Withdrawal": "पीएफ / यूएएन निकासी"
    }
  };

  const servicesData = [
    {
      "cat": "Government",
      "name": "New PAN Card",
      "icon": "fa-address-card",
      "color": "text-red-500",
      "bg": "bg-red-50",
      "price": "₹250",
    },
    {
      "cat": "Government",
      "name": "PAN Card Correction",
      "icon": "fa-edit",
      "color": "text-red-600",
      "bg": "bg-red-50",
      "price": "₹350",
    },
    {
      "cat": "Government",
      "name": "Passport (Fresh/Renew)",
      "icon": "fa-passport",
      "color": "text-blue-600",
      "bg": "bg-blue-50",
      "price": "₹1600+",
    },
    {
      "cat": "Government",
      "name": "GST Registration",
      "icon": "fa-file-invoice-dollar",
      "color": "text-emerald-600",
      "bg": "bg-emerald-50",
      "price": "₹800+",
    },
    {
      "cat": "Government",
      "name": "Shop Act / Gumasta",
      "icon": "fa-store",
      "color": "text-pink-600",
      "bg": "bg-pink-50",
      "price": "₹800+",
    },
    {
      "cat": "Government",
      "name": "Ration Card Services",
      "icon": "fa-shopping-basket",
      "color": "text-orange-600",
      "bg": "bg-orange-50",
      "price": "₹300+",
    },
    {
      "cat": "Government",
      "name": "Income Certificate",
      "icon": "fa-wallet",
      "color": "text-yellow-600",
      "bg": "bg-yellow-50",
      "price": "₹250",
    },
    {
      "cat": "Government",
      "name": "Gazette (Name Change)",
      "icon": "fa-file-alt",
      "color": "text-teal-600",
      "bg": "bg-teal-50",
      "price": "₹1500+",
    },
    {
      "cat": "IT",
      "name": "Laptop/PC Repair",
      "icon": "fa-laptop-code",
      "color": "text-indigo-600",
      "bg": "bg-indigo-50",
      "price": "Visit: ₹500+",
    },
    {
      "cat": "IT",
      "name": "Windows OS Install",
      "icon": "fa-desktop",
      "color": "text-blue-400",
      "bg": "bg-blue-50",
      "price": "₹500+",
    },
    {
      "cat": "IT",
      "name": "Web Development",
      "icon": "fa-code",
      "color": "text-sky-500",
      "bg": "bg-sky-50",
      "price": "Starts ₹5000+",
    },
    {
      "cat": "IT",
      "name": "CCTV Installation",
      "icon": "fa-video",
      "color": "text-slate-700",
      "bg": "bg-slate-100",
      "price": "On Visit",
    },
    {
      "cat": "IT",
      "name": "SSD / RAM Upgrade",
      "icon": "fa-microchip",
      "color": "text-green-700",
      "bg": "bg-green-50",
      "price": "Part Cost + ₹300",
    },
    {
      "cat": "Cyber",
      "name": "Digital Signature (DSC)",
      "icon": "fa-signature",
      "color": "text-purple-600",
      "bg": "bg-purple-50",
      "price": "₹1000+",
    },
    {
      "cat": "Cyber",
      "name": "Police Clearance (PCC)",
      "icon": "fa-user-shield",
      "color": "text-red-700",
      "bg": "bg-red-50",
      "price": "₹300",
    },
    {
      "cat": "Cyber",
      "name": "PF / UAN Withdrawal",
      "icon": "fa-university",
      "color": "text-blue-800",
      "bg": "bg-blue-50",
      "price": "₹500+",
    }
  ];

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const t = translations[currentLanguage as keyof typeof translations];

  const handleWhatsApp = (serviceName?: string) => {
    const text = serviceName 
      ? `Hi Vikram, I am interested in ${serviceName}`
      : 'Hi Vikram, I am interested in ';
    window.location.href = `https://wa.me/919773383276?text=${encodeURIComponent(text)}`;
  };

  const handleCustomInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.customInput as HTMLInputElement;
    if (input.value.trim()) {
      window.location.href = `https://wa.me/919773383276?text=${encodeURIComponent("New Inquiry: " + input.value)}`;
      input.value = '';
    }
  };

  return (
    <>
      <nav className="bg-white text-[#001a4d] sticky top-0 z-[100] shadow-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://res.cloudinary.com/dg4wzx8c8/image/upload/v1770368880/app_images/qffsb4ibdrphjb6ir7jw.png" 
              alt="Mahi IT Services" 
              className="w-11 h-11 object-contain rounded-lg shadow-sm"
            />
            <div>
              <a href="/" className="text-lg md:text-xl font-extrabold tracking-tight text-[#001a4d] no-underline block">
                Mahi IT <span className="text-[#0066cc]">Services</span>
              </a>
              <p className="text-xs text-slate-500">Govt & IT Solutions</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2">
              <button 
                onClick={() => setCurrentLanguage('en')}
                className={`text-xs font-bold px-3 py-1 rounded-full transition ${
                  currentLanguage === 'en' 
                    ? 'bg-white text-[#001a4d] shadow-sm' 
                    : 'text-slate-600'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setCurrentLanguage('hi')}
                className={`text-xs font-bold px-3 py-1 rounded-full transition ${
                  currentLanguage === 'hi' 
                    ? 'bg-white text-[#001a4d] shadow-sm' 
                    : 'text-slate-600'
                }`}
              >
                हिंदी
              </button>
            </div>
            <a href="https://www.instagram.com/mahiitservices" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-lg hover:scale-110 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <button 
              onClick={() => handleWhatsApp()}
              className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-green-700 transition"
            >
              <i className="fab fa-whatsapp"></i> {t.contactBtnText}
            </button>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-br from-[#001a4d] via-[#0066cc] to-[#001a4d] pt-20 pb-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-white text-xs font-bold tracking-widest uppercase">{t.tagline}</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-blue-100 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5">
            <button 
              onClick={() => handleWhatsApp()}
              className="bg-white text-[#001a4d] px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-2xl"
            >
              {t.inquireBtn}
            </button>
            <a 
              href="tel:+919773383276"
              className="bg-white/20 border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/30 transition backdrop-blur-sm"
            >
              {t.callBtn}
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-20 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-16">
          <div className="relative group">
            <i className="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="w-full pl-16 pr-6 py-5 bg-transparent rounded-2xl outline-none text-base text-slate-900"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d]">{t.servicesTitle}</h2>
            <div className="hidden sm:flex gap-2">
              <span className="px-4 py-2 bg-red-100 text-red-700 text-xs font-bold rounded-full">{t.govLabel}</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{t.itLabel}</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">{t.cyberLabel}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => handleWhatsApp(service.name)}
                className="service-card bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-all hover:transform hover:-translate-y-2"
              >
                <div className={`${service.bg} ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-5`}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                  {serviceTranslations[currentLanguage as keyof typeof serviceTranslations][service.cat as keyof typeof serviceTranslations.en] || service.cat}
                </span>
                <h3 className="font-bold text-slate-800 text-lg leading-tight mb-4 flex-grow">
                  {serviceTranslations[currentLanguage as keyof typeof serviceTranslations][service.name as keyof typeof serviceTranslations.en] || service.name}
                </h3>
                <div className="w-full border-t border-slate-100 pt-4">
                  <p className="text-[#0066cc] font-bold text-lg">{service.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#001a4d] to-[#0066cc] rounded-3xl shadow-xl p-10 md:p-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t.customServiceTitle}</h3>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">{t.customServiceDesc}</p>
          <form onSubmit={handleCustomInquiry} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="text" 
              name="customInput"
              placeholder="Enter service name..." 
              className="flex-1 px-6 py-4 rounded-xl bg-white text-slate-900 border-2 border-white shadow-lg focus:ring-2 focus:ring-[#f97316] outline-none placeholder-slate-500"
            />
            <button 
              type="submit"
              className="bg-white text-[#001a4d] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-lg whitespace-nowrap"
            >
              {t.askBtn}
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-[#001a4d] text-white pt-20 pb-10 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t.footerTitle}</h3>
              <p className="text-blue-200 text-sm mb-4">{t.footerDesc}</p>
              <div className="flex gap-5 text-lg">
                <a href="tel:+919773383276" className="hover:text-[#f97316] transition" title="Call us">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="https://wa.me/919773383276" className="hover:text-green-400 transition" title="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.instagram.com/mahiitservices" className="hover:text-pink-500 transition" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.hoursTitle}</h4>
              <div className="space-y-4 text-sm text-blue-100">
                <div>
                  <p className="font-semibold text-white mb-1">{t.hoursLabel}</p>
                  <p>10:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{t.proprietorLabel}</p>
                  <p>Vikram Gupta</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{t.phoneLabel}</p>
                  <a href="tel:+919773383276" className="hover:text-[#f97316] transition">+91 9773383276</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.locationsTitle}</h4>
              <div className="flex flex-wrap gap-2 text-sm text-blue-100">
                {['Ghatkopar', 'Mulund', 'Thane', 'Govandi', 'Kurla', 'Powai', 'Navi Mumbai'].map((location) => (
                  <a
                    key={location}
                    href={`https://maps.google.com/?q=${location},Mumbai`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white/10 rounded-full hover:bg-white/20 transition hover:text-white cursor-pointer"
                  >
                    {location}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-xs text-white/50 uppercase tracking-wider font-bold">&copy; 2024 Mahi IT Services. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
