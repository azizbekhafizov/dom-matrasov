import { useTranslation } from "react-i18next";

export default function Types() {
  const { t } = useTranslation();

  const types = [
    {
      id: "anatomic",
      img: "src/assets/images/Анатомические.webp",
      title: t("types.anatomic_title"),
      desc: t("types.anatomic_desc")
    },
    {
      id: "ortho",
      img: "src/assets/images/Ортопедические.webp",
      title: t("types.ortho_title"),
      desc: t("types.ortho_desc")
    },
    {
      id: "sprless",
      img: "src/assets/images/Беспружинные.webp",
      title: t("types.sprless_title"),
      desc: t("types.sprless_desc")
    },
    {
      id: "kids",
      img: "src/assets/images/Детские.jpg",
      title: t("types.kids_title"),
      desc: t("types.kids_desc")
    }
  ];

  return (
    <section id="types" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-12">
          {t("types_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {types.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
