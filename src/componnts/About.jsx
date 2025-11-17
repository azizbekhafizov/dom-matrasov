"use client";
import { useTranslation } from "react-i18next";
import matImg from "../assets/images/matrass.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2" aria-label={t("about.imageAlt")}>
          <img
            className="rounded-xl shadow-lg"
            src={matImg}
            alt={t("about.imageAlt")}
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-6 text-white md:w-1/2">
          <h2 className="text-4xl md:text-3xl font-bold leading-tight tracking-tight font-serif">
            {t("about.title")}
          </h2>
          <p className="text-base font-normal leading-relaxed">
            {t("about.description")}
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("types");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center min-w-[100px] max-w-[200px] h-12 px-6 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold text-base rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            {t("about.button")}
          </button>
        </div>
      </div>
    </section>
  );
}
