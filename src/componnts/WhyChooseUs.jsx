"use client";

import { useTranslation } from "react-i18next";
import { Globe, Rocket, Truck, ShieldCheck } from "lucide-react";

export default function WhyChooseUsSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: (
        <Globe className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
      ),
      title: t("why.features.materials.title"),
      desc: t("why.features.materials.desc"),
    },
    {
      icon: (
        <Rocket className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
      ),
      title: t("why.features.fast.title"),
      desc: t("why.features.fast.desc"),
    },
    {
      icon: (
        <Truck className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
      ),
      title: t("why.features.delivery.title"),
      desc: t("why.features.delivery.desc"),
    },
    {
      icon: (
        <ShieldCheck className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
      ),
      title: t("why.features.warranty.title"),
      desc: t("why.features.warranty.desc"),
    },
  ];

  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-12">
            {t("why.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg group transition-all duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM SECTION */}
      <section
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5f]/80 via-[#1a3a5f]/50 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight drop-shadow-sm">
            {t("why.showroom.title")}
          </h2>

          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            {t("why.showroom.desc")}
          </p>

          <button className="mt-8 px-8 py-3 border-2 border-white text-primary font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            {t("why.showroom.button")}
          </button>
        </div>
      </section>
    </>
  );
}
