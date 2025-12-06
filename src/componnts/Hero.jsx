"use client";
import { Truck, Clock, Layers, Link } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative w-full">
      {/* Hero Banner */}
      <div
        className="relative flex flex-col justify-center items-center text-center min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/fon3.jpg')" }}
      >
        {/* 🔥 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col gap-6 max-w-5xl px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold font-serif leading-tight tracking-tight">
            {t("hero.title")}
          </h1>

          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* Primary */}
            <button
              onClick={() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 h-12 rounded-xl bg-primary text-white font-semibold shadow-lg
        hover:scale-105 hover:opacity-90 transition-all duration-300"
            >
              {t("hero.catalog")}
            </button>

            {/* Glass Button */}
            <a
              href="https://t.me/Visco_admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-8 h-12 rounded-xl font-semibold text-white
          bg-white/20 backdrop-blur-md border border-white/30
          hover:bg-white/30 hover:scale-105 transition-all duration-300"
              >
                {t("hero.measure")}
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Features / Info */}
      <div className="bg-background-light py-8 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Clock className="text-primary w-8 h-8" />
            <div>
              <h3 className="font-bold">{t("hero.fastTitle")}</h3>
              <p className="text-sm text-gray-600">{t("hero.fastDesc")}</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <Truck className="text-primary w-8 h-8" />
            <div>
              <h3 className="font-bold">{t("hero.deliveryTitle")}</h3>
              <p className="text-sm text-gray-600">{t("hero.deliveryDesc")}</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <Layers className="text-primary w-8 h-8" />
            <div>
              <h3 className="font-bold">{t("hero.customTitle")}</h3>
              <p className="text-sm text-gray-600">{t("hero.customDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
