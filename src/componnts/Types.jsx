import { useTranslation } from "react-i18next";

export default function Types() {
  const { t } = useTranslation();

  return (
    <section id="types" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-12">
          {t("types_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 1 — Анатомические */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="src/assets/images/Анатомические.webp"
                alt="anatomic"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold">{t("types.anatomic_title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("types.anatomic_desc")}
              </p>
            </div>
          </div>

          {/* 2 — Ортопедические */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="src/assets/images/Ортопедические.webp"
                alt="ortho"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold">{t("types.ortho_title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("types.ortho_desc")}
              </p>
            </div>
          </div>

          {/* 3 — Беспружинные */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="src/assets/images/matras.jpg"
                alt="sprless"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold">{t("types.sprless_title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("types.sprless_desc")}
              </p>
            </div>
          </div>

          {/* 4 — Детские */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="src/assets/images/Детские.jpg"
                alt="kids"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold">{t("types.kids_title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("types.kids_desc")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
