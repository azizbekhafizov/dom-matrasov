import { useState } from "react";
import { useTranslation } from "react-i18next";

// IMPORTED IMAGES
import memory1 from "../assets/images/memory1.webp";
import memory2 from "../assets/images/memory2.jpg";
import memory3 from "../assets/images/memory3.jpg";
import memory4 from "../assets/images/memory4.avif";

import ortho1 from "../assets/images/ortopedik1.jpg";
import ortho2 from "../assets/images/ortopedik2.jpg";
import ortho3 from "../assets/images/ortopedik3.webp";
import ortho4 from "../assets/images/ortopedik4.jpg";

import kids1 from "../assets/images/detskiy1.jpg";
import kids2 from "../assets/images/detskiy2.jpg";
import kids3 from "../assets/images/detskiy3.jpg";
import kids4 from "../assets/images/detskiy4.jpg";

// PRODUCT DATA
const products = {
  memory: [
    { id: 1, key: "memory1", img: memory1, price: "2 100 000" },
    { id: 2, key: "memory2", img: memory2, price: "2 350 000" },
    { id: 3, key: "memory3", img: memory3, price: "2 500 000" },
    { id: 4, key: "memory4", img: memory4, price: "3 000 000" }
  ],

  orthopedic: [
    { id: 5, key: "ortho1", img: ortho1, price: "1 900 000" },
    { id: 6, key: "ortho2", img: ortho2, price: "2 400 000" },
    { id: 7, key: "ortho3", img: ortho3, price: "2 150 000" },
    { id: 8, key: "ortho4", img: ortho4, price: "2 900 000" }
  ],

  kids: [
    { id: 9, key: "kids1", img: kids1, price: "1 200 000" },
    { id: 10, key: "kids2", img: kids2, price: "1 350 000" },
    { id: 11, key: "kids3", img: kids3, price: "1 500 000" },
    { id: 12, key: "kids4", img: kids4, price: "1 800 000" }
  ]
};

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const openModal = (p) => {
    setSelected(p);
    setModalOpen(true);
  };

  return (
    <section
      id="products"
      className="pt-24 pb-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6"
    >
      <h2 className="text-4xl text-center font-bold text-center mb-12">
        {t("products.title")}
      </h2>

      {Object.entries(products).map(([category, list]) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl max-w-[1400px] m-auto font-bold mb-6 capitalize">
            {t(`products.${category}`)}
          </h3>

          {/* FIXED GRID */}
          <div className="w-[1400px] justify-center m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition border border-gray-100 dark:border-gray-700"
              >
                <div onClick={() => openModal(item)} className="cursor-pointer">
                  <img
                    src={item.img}
                    className="h-48 w-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  {/* NAME */}
                  <h4 className="text-lg font-semibold mb-1">
                    {t(`products.${item.key}.name`)}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm h-12 overflow-hidden">
                    {t(`products.${item.key}.desc`).slice(0, 60)}...
                  </p>

                  <p className="text-xl font-bold text-primary mt-2">
                    {item.price} сум
                  </p>

                  <button
                    onClick={() => openModal(item)}
                    className="mt-4 w-full bg-primary text-white py-3 rounded-xl font-semibold shadow-md hover:bg-primary/80 transition"
                  >
                    {t("card.details")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {modalOpen && selected && (
        <Modal product={selected} close={() => setModalOpen(false)} />
      )}
    </section>
  );
}

function Modal({ product, close }) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 relative shadow-xl animate-fade">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-3xl"
        >
          ✕
        </button>

        <img
          src={product.img}
          className="w-full h-64 object-cover rounded-xl mb-5"
        />

        <h2 className="text-2xl font-bold mb-3">
          {t(`products.${product.key}.name`)}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {t(`products.${product.key}.modalText`)}
        </p>

        <a
          href="https://t.me/Visco_admin"
          target="_blank"
          className="block text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/80 transition shadow-md"
        >
          {t(`products.${product.key}.btn`)}
        </a>
      </div>
    </div>
  );
}
